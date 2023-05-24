import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import Messages from '../dashboard/components/MessagesComponent';


const MessagesPage = () => {
  return (
    <PageContainer title="Messages Page" description="">

      <DashboardCard title="Messages">
        <Box>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={12}>
              <Messages />
            </Grid>
          </Grid>
        </Box>
      </DashboardCard>
    </PageContainer>
  );
};

export default MessagesPage;
