import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Zurek from '../public/assets/Tasks/zurek.png';
import CoTo from '../public/assets/Tasks/coto.png';
import falsz from '../public/assets/Tasks/falsz.png';
import guess from '../public/assets/Tasks/guess.png';

import gotuj from '../public/assets/gotuj.png';
import { Typography } from '@mui/material';
import Link from '@mui/material/Link';
import Image from 'mui-image';
import Divider from '@mui/material/Divider';

export default function Cuisine() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} marginBottom={10}>
        <Grid
          item
          xs={7}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h3">Kuchnia polska</Typography>

          <Typography>
            Kuchnia polska jest bogata i ciekawa. Aktualna kuchnia jest trochę
            inna niż ta, 100 lat temu czy 300 lat temu. Ważne: Polacy kochają
            zupy, chleb, kanapki i mogą jeść obiady na słodko i na słono. Proszę
            robić zadania i quizy - tu są interesujące informacje.
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <Image width={400} src={gotuj} showLoading />

          {/* <Box
            component="img"
            sx={{
              height: 'auto',

              maxWidth: 500,
            }}
            alt="The house from the offer."
            src={gotuj}
          /> */}
        </Grid>
      </Grid>
      {/* <Card>
        <CardMedia sx={{ height: 600, width: 'auto' }} image={gotuj} />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Kuchnia polska jest bogata i ciekawa. Aktualna kuchnia jest trochę
            inna niż ta, 100 lat temu czy 300 lat temu. Ważne: Polacy kochają
            zupy, chleb, kanapki i mogą jeść obiady na słodko i na słono. Proszę
            robić zadania i quizy - tu są interesujące informacje.{' '}
          </Typography>
        </CardContent>
      </Card> */}
      {/* <Typography variant="h2">Kuchnia polska</Typography> */}
      <Divider sx={{ bgcolor: 'white' }}> </Divider>
      <Grid container spacing={2} marginTop={10}>
        <Grid item xs={6}>
          <Link href="https://wordwall.net/pl/resource/30511797/polski-dla-cudzoziemc%c3%b3w/%c5%bcurek">
            <Box
              component="img"
              sx={{
                height: 'auto',
                maxWidth: 500,
              }}
              alt="Żurek."
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
              alt="Co to?"
              src={CoTo}
            />
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Link href="https://wordwall.net/pl/resource/34142936/polski-dla-cudzoziemc%c3%b3w/polska-kuchnia">
            <Box
              component="img"
              sx={{
                height: 'auto',
                maxWidth: 500,
              }}
              alt="Co to?"
              src={falsz}
            />
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Link href="https://wordwall.net/pl/resource/74320304/polski-dla-cudzoziemc%c3%b3w/polska-kuchnia">
            <Box
              component="img"
              sx={{
                height: 'auto',
                maxWidth: 500,
              }}
              alt="Co to?"
              src={guess}
            />
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}
