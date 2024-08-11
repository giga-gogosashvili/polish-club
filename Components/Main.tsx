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
      <Box flexDirection="row" boxShadow="none">
        <TopAppBar></TopAppBar>
        <GeneralCard />
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="space-around"
          sx={{ backgroundColor: '#CBDFFA' }}
          padding="20px 0"
          marginBottom="40px"
        >
          <MagdaCard />
          <UczSieCard />
        </Grid>
        <BottomAppBar />
      </Box>
    </>
  );
}
