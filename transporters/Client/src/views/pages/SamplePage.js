import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';


const SamplePage = () => {
  return (
    <PageContainer title="Sample Page" description="this is Sample page">

      <DashboardCard title="">
        <Box>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={12}>
            </Grid>
          </Grid>
        </Box>
      </DashboardCard>
    </PageContainer>
  );
};

export default SamplePage;
