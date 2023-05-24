import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import Reviews from '../dashboard/components/ReviewsComponent';


const ReviewsPage = () => {
  return (
    <PageContainer title="Reviews Page" description="">

      <DashboardCard title="Reviews">
        <Box>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={12}>
              <Reviews />
            </Grid>
          </Grid>
        </Box>
      </DashboardCard>
    </PageContainer>
  );
};

export default ReviewsPage;
