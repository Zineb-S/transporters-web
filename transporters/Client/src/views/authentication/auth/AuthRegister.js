import React, { useState } from "react";
import { Box, Typography, Button, Input, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import { Stack } from '@mui/system';
import axios from 'axios';

const AuthRegister = ({ title, subtitle, subtext }) => {
    
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const createUser = async (e)=>{
        console.log(username);
        console.log(email);
        console.log(password);

    try {
    const response = await axios.post(
      'http://localhost:8080/TESTONLYPURPOSES',
      JSON.stringify({ username, email, password }),
      {
        headers: { "Content-Type": "application/json", 'Access-Control-Allow-Origin': '*' },
        withCredentials: true,
      }
    );
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
    return (
        
    <>
        {title ? (
            <Typography fontWeight="700" variant="h2" mb={1}>
                {title}
            </Typography>
        ) : null}

        {subtext}

        <Box component="form">
            <Stack mb={3}>
               
                <Typography variant="subtitle1"
                    fontWeight={600} component="label" htmlFor='name' mb="5px">Username</Typography>
                <TextField  id="username" variant="outlined" fullWidth onChange={(event) =>{setUsername(event.target.value)}}/>

                <Typography variant="subtitle1"
                    fontWeight={600} component="label" htmlFor='email' mb="5px" mt="25px">Email</Typography>
                <TextField id="email" variant="outlined" fullWidth onChange={(event) =>{setEmail(event.target.value)}}/>

                <Typography variant="subtitle1"
                    fontWeight={600} component="label" htmlFor='password' mb="5px" mt="25px">Password</Typography>
                <TextField  id="password" variant="outlined" fullWidth onChange={(event) =>{setPassword(event.target.value)}}/>
            </Stack>
            <Button color="primary" variant="contained" size="large" fullWidth onClick={createUser}>
                Sign Up
            </Button>
        </Box>
        {subtitle}
    </>
)};

export default AuthRegister;
