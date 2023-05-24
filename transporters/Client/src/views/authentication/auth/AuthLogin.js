import React, { useEffect, useState } from "react";
import {
    Box,
    Typography,
    Button,
    Stack,
    TextField,
} from '@mui/material';
import { Link, Navigate, redirect, useNavigate } from 'react-router-dom';


import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import axios from 'axios';


const AuthLogin = ({ title, subtitle, subtext }) => {
    const nav = useNavigate();

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const UserLogin = async (e)=>{
        

    try {
    const response = await axios.post(
      'http://localhost:8080/api/auth/signin',
      JSON.stringify({ username, password }),
      {
        headers: { "Content-Type": "application/json", 'Access-Control-Allow-Origin': '*' },
        withCredentials: true,
      }
    );
    localStorage.setItem('token', response.data.accessToken)
    if (localStorage.getItem('token')) {
        nav("/dashboard");
    } else {
        nav("/login");
    }
  } catch (err) {
    if (!err?.response) {
      console.log("No Server Response");
    } else if (err.response?.status === 409) {
      console.log("Username Taken");
    } else {
      console.log("Registration Failed");
    }
  }
    }

    if (localStorage.getItem('token')) {
        return <Navigate to="/dashboard"/>
    }
    return (
    <>
        {title ? (
            <Typography fontWeight="700" variant="h2" mb={1}>
                {title}
            </Typography>
        ) : null}

        {subtext}

        <Stack>
            <Box>
                <Typography variant="subtitle1"
                    fontWeight={600} component="label" htmlFor='username' mb="5px">Username</Typography>
                <TextField id="username" variant="outlined" fullWidth onChange={(event) =>{setUsername(event.target.value)}}/>
            </Box>
            <Box mt="25px">
                <Typography variant="subtitle1"
                    fontWeight={600} component="label" htmlFor='password' mb="5px" >Password</Typography>
                <TextField id="password" type="password" variant="outlined" fullWidth onChange={(event) =>{setPassword(event.target.value)}}/>
            </Box>
            <Stack justifyContent="space-between" direction="row" alignItems="center" my={2}>
            </Stack>
        </Stack>
        <Box>
            <Button
                color="primary"
                variant="contained"
                size="large"
                fullWidth
                onClick={UserLogin}
                type="submit"
            >
                Sign In
            </Button>
        </Box>
        {subtitle}
    </>
) };

export default AuthLogin;
