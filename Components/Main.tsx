import TopAppBar from './TopAppBar';
import Box from '@mui/material/Box';
import MagdaCard from './MagdaCard';
import GeneralCard from './GeneralCard';
import BottomAppBar from './BottomAppBar';
import UczSieCard from './UczSieCard';
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
          <UczSieCard />
        </Grid>
        <BottomAppBar />
      </Box>
    </>
  );
}
