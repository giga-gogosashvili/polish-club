import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Zurek from '../public/assets/Tasks/zurek.png';
import CoTo from '../public/assets/Tasks/coto.png';
import { Typography } from '@mui/material';
import Link from '@mui/material/Link';

const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

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
          <Link href="https://wordwall.net/pl/resource/30511797/polski-dla-cudzoziemc%c3%b3w/%c5%bcurek">
            <Box
              component="img"
              sx={{
                height: 'auto',

                maxWidth: 500,
              }}
              alt="The house from the offer."
              src={Zurek}
            />
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Link href="https://wordwall.net/pl/resource/24429640/polski-dla-cudzoziemc%c3%b3w/kurpiowskie-jedzenie">
            <Box
              component="img"
              sx={{
                height: 'auto',

                maxWidth: 500,
              }}
              alt="The house from the offer."
              src={CoTo}
            />
          </Link>
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </Box>
  );
}
