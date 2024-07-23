import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Zurek from '../public/assets/Tasks/zurek.png';
import { Typography } from '@mui/material';

export default function Cuisine() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography>
        Kuchnia polska jest bogata i ciekawa. Aktualna kuchnia jest trochę inna
        niż ta, 100 lat temu czy 300 lat temu. Ważne: Polacy kochają zupy,
        chleb, kanapki i mogą jeść obiady na słodko i na słono. Proszę robić
        zadania i quizy - tu są interesujące informacje.{' '}
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box
            component="img"
            sx={{
              height: 'auto',

              maxWidth: 500,
            }}
            alt="The house from the offer."
            src={Zurek}
          />
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </Box>
  );
}
