import TopAppBar from './TopAppBar';
import Box from '@mui/material/Box';
import MagdaCard from './MagdaCard';
import GeneralCard from './GeneralCard';
import BottomAppBar from './BottomAppBar';
import DiscoverCard from './DiscoverCard';
import { Grid } from '@mui/material';

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
