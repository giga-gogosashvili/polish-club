// import React from 'react';
import TopAppBar from './TopAppBar';
import Box from '@mui/material/Box';
import MagdaCard from './MagdaCard';
import GeneralCard from './GeneralCard';
import BottomAppBar from './BottomAppBar';
import DiscoverCard from './DiscoverCard';
import { Grid } from '@mui/material';
import Discover from './Discover';
import Cuisine from './Cuisine ';

// import Root from '/Root';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function Main() {
  return (
    <>
      <Box flexDirection="row">
        <TopAppBar></TopAppBar>
        <GeneralCard />
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <MagdaCard />
          <DiscoverCard />
        </Grid>
        <BottomAppBar />
      </Box>
    </>
  );
}
