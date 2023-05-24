import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import Members from '../dashboard/components/MembersComponent';


const MembersPage = () => {
  return (
    <PageContainer title="Members Page" description="">

      <DashboardCard title="Members">
        <Box>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={12}>
              <Members />
            </Grid>
          </Grid>
        </Box>
      </DashboardCard>
    </PageContainer>
  );
};

export default MembersPage;
