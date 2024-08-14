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
import GoBack from './GoBack';
import BottomAppBar from './BottomAppBar';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

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
    <>
      <Box sx={{ flexGrow: 1 }} alignItems="center">
        <GoBack></GoBack>
        <Grid
          container
          // alignItems={{ xs: 'center', lg: 'normal' }}
          direction={{ xs: 'column', lg: 'row' }}
          // alignItems="center"
          justifyContent="center"
          spacing={2}
          marginBottom={10}
          marginTop={{ xs: '40px', lg: '0px' }}
          // flexDirection={{ xs: 'column', lg: 'row' }}
        >
          <Grid
            item
            xs={7}
            container
            // alignItems={{ xs: 'center', lg: 'normal' }}
            // direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              marginBottom={{ xs: '20px', lg: '0px' }}
              sx={{
                backgroundColor: '#2F4A8C',
                width: '100%',
                height: '100%',
                alignContent: 'center',
              }}
            >
              <Typography variant="h3" color="#fff">
                Kuchnia polska
              </Typography>
            </Box>

            <Typography color="#000">
              Kuchnia polska jest bogata i ciekawa.
              <Box>
                Aktualna kuchnia jest trochę inna niż ta, 100 lat temu czy 300
                lat temu.
              </Box>
              <Box>
                Ważne: Polacy kochają zupy, chleb, kanapki i mogą jeść obiady na
                słodko i na słono.
              </Box>
            </Typography>
          </Grid>
          <Grid item xs={5} justifyContent="center">
            <Image width="100%" src={gotuj} />
          </Grid>
        </Grid>

        <Divider color="#fff"> </Divider>
        <TaskAltIcon sx={{ marginTop: '20px', color: '#000' }}></TaskAltIcon>

        <Typography fontWeight="700" color="#000">
          Proszę robić zadania i quizy - tu są interesujące informacje.
        </Typography>
        <Grid
          container
          spacing={2}
          marginTop={5}
          alignItems="center"
          flexDirection={{ xs: 'column', lg: 'row' }}
          paddingBottom="20px"
        >
          <Grid item xs={6}>
            <Link href={linkzurek}>
              <Box
                component="img"
                width={{ xs: '100%', lg: 500 }}
                sx={{
                  height: 'auto',
                }}
                alt="Żurek."
                src={Zurek}
              />
            </Link>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
              <Link href={linkzurek}>
                <Fab
                  variant="extended"
                  sx={{ marginTop: 1, backgroundColor: '#CBDFFA' }}
                >
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
                width={{ xs: '100%', lg: 500 }}
                sx={{
                  height: 'auto',
                }}
                alt="Co to?"
                src={CoTo}
              />
            </Link>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
              <Link href={linkcoto}>
                <Fab
                  variant="extended"
                  sx={{ marginTop: 1, backgroundColor: '#CBDFFA' }}
                >
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
                width={{ xs: '100%', lg: 500 }}
                sx={{
                  height: 'auto',
                }}
                alt="falsz"
                src={falsz}
              />
            </Link>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
              <Link href={linkfalsz}>
                <Fab
                  variant="extended"
                  sx={{ marginTop: 1, backgroundColor: '#CBDFFA' }}
                >
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
                width={{ xs: '100%', lg: 500 }}
                sx={{
                  height: 'auto',
                }}
                alt="guess"
                src={guess}
              />
            </Link>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
              <Link href={linkguess}>
                <Fab
                  variant="extended"
                  sx={{ marginTop: 1, backgroundColor: '#CBDFFA' }}
                >
                  <PlayCircleIcon sx={{ mr: 1 }} />
                  Zagraj
                </Fab>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <BottomAppBar></BottomAppBar>
    </>
  );
}
