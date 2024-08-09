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
import Fab from '@mui/material/Fab';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

export default function Cuisine() {
  const linkzurek =
    'https://wordwall.net/pl/resource/30511797/polski-dla-cudzoziemc%c3%b3w/%c5%bcurek';
  const linkcoto =
    'https://wordwall.net/pl/resource/24429640/polski-dla-cudzoziemc%c3%b3w/kurpiowskie-jedzenie';
  const linkfalsz =
    'https://wordwall.net/pl/resource/34142936/polski-dla-cudzoziemc%c3%b3w/polska-kuchnia';
  const linkguess =
    'https://wordwall.net/pl/resource/74320304/polski-dla-cudzoziemc%c3%b3w/polska-kuchnia';
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        marginBottom={10}
        flexDirection={{ xs: 'column', lg: 'row' }}
      >
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
            Kuchnia polska jest bogata i ciekawa.
            <Box>
              Aktualna kuchnia jest trochę inna niż ta, 100 lat temu czy 300 lat
              temu.
            </Box>
            <Box>
              Ważne: Polacy kochają zupy, chleb, kanapki i mogą jeść obiady na
              słodko i na słono.
            </Box>
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <Image width={400} src={gotuj} />
        </Grid>
      </Grid>

      <Divider sx={{ bgcolor: 'white' }}> </Divider>
      <Typography fontWeight="700" marginTop={5}>
        Proszę robić zadania i quizy - tu są interesujące informacje.
      </Typography>
      <Grid
        container
        spacing={2}
        marginTop={10}
        flexDirection={{ xs: 'column', lg: 'row' }}
      >
        <Grid item xs={6}>
          <Link href={linkzurek}>
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
          <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Link href={linkzurek}>
              <Fab variant="extended" sx={{ marginTop: 1 }}>
                <PlayCircleIcon sx={{ mr: 1 }} />
                Zagraj
              </Fab>
            </Link>
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Link href={linkcoto}>
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
          <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Link href={linkcoto}>
              <Fab variant="extended" sx={{ marginTop: 1 }}>
                <PlayCircleIcon sx={{ mr: 1 }} />
                Zagraj
              </Fab>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Link href={linkfalsz}>
            <Box
              component="img"
              sx={{
                height: 'auto',
                maxWidth: 500,
              }}
              alt="falsz"
              src={falsz}
            />
          </Link>
          <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Link href={linkfalsz}>
              <Fab variant="extended" sx={{ marginTop: 1 }}>
                <PlayCircleIcon sx={{ mr: 1 }} />
                Zagraj
              </Fab>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Link href={linkguess}>
            <Box
              component="img"
              sx={{
                height: 'auto',
                maxWidth: 500,
              }}
              alt="guess"
              src={guess}
            />
          </Link>
          <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Link href={linkguess}>
              <Fab variant="extended" sx={{ marginTop: 1 }}>
                <PlayCircleIcon sx={{ mr: 1 }} />
                Zagraj
              </Fab>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
