import React, { useEffect, useState } from "react";
import { Grid, Box, Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';

// components
import SalesOverview from './components/SalesOverview';
import YearlyBreakup from './components/YearlyBreakup';
import MonthlyEarnings from './components/MonthlyEarnings';
import { Navigate, redirect, useNavigate } from "react-router";
import { to } from "react-spring";



const Dashboard = () => {
  if (!localStorage.getItem('token')) {
    return <Navigate to="/auth/login"/>
  }
  return (
    
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Typography sx={{ m: 2 }} variant="h1">YnoTrans Dashboard</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <SalesOverview />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <YearlyBreakup />
              </Grid>
              <Grid item xs={12}>
                <MonthlyEarnings />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Dashboard;
