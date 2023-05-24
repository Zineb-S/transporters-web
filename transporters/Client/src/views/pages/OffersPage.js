import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import Offers from '../dashboard/components/OffersComponent';


const OffersPage = () => {
  return (
    <PageContainer title="Offers Page" description="">

      <DashboardCard title="Offers">
        <Box>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={12}>
              <Offers />
            </Grid>
          </Grid>
        </Box>
      </DashboardCard>
    </PageContainer>
  );
};

export default OffersPage;
