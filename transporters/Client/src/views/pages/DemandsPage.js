import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import Demands from '../dashboard/components/DemandsComponent';


const DemandsPage = () => {
  return (
    <PageContainer title="Demands Page" description="">

      <DashboardCard title="Demands">
        <Box>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={12}>
              <Demands />
            </Grid>
          </Grid>
        </Box>
      </DashboardCard>
    </PageContainer>
  );
};

export default DemandsPage;
