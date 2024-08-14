import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import symbole from '../public/assets/Tasks/symbole.png';
import malediwy from '../public/assets/Tasks/malediwy.png';

import cities from '../public/assets/cities.png';
import { Typography } from '@mui/material';
import Link from '@mui/material/Link';
import Image from 'mui-image';
import Divider from '@mui/material/Divider';
import Fab from '@mui/material/Fab';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GoBack from './GoBack';
import BottomAppBar from './BottomAppBar';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

export default function Cities() {
  const linksymbole =
    'https://wordwall.net/pl/resource/71118926/polski-dla-cudzoziemc%c3%b3w/miasta-symbole';
  const linkmalediwy =
    'https://wordwall.net/pl/resource/34142880/polski-dla-cudzoziemc%c3%b3w/polska';

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <GoBack></GoBack>
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
            <Box
              sx={{
                backgroundColor: '#2F4A8C',
                width: '100%',
                height: '20%',
                alignContent: 'center',
              }}
            >
              <Typography variant="h3" color="#fff">
                Polskie miasta
              </Typography>
            </Box>

            <Typography color="#000">
              Miasta w Polsce mają wiele ciekawych budynków, parków, pięknych
              miejsc, gdzie można się relaksować. Wiele miast ma swoje
              charakterystyczne symbole albo typowe dla siebie jedzenie lub
              produkty.
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Image width={400} src={cities} />
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
          flexDirection={{ xs: 'column', lg: 'row' }}
          paddingBottom="20px"
        >
          <Grid item xs={6}>
            <Link href={linksymbole}>
              <Box
                component="img"
                sx={{
                  height: 'auto',
                  maxWidth: 500,
                }}
                alt="Żurek."
                src={symbole}
              />
            </Link>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
              <Link href={linksymbole}>
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
            <Link href={linkmalediwy}>
              <Box
                component="img"
                sx={{
                  height: 'auto',
                  maxWidth: 500,
                }}
                alt="Co to?"
                src={malediwy}
              />
            </Link>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
              <Link href={linkmalediwy}>
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
          {/* <Grid item xs={6}>
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
                <Fab
                  variant="extended"
                  sx={{ marginTop: 1, backgroundColor: '#CBDFFA' }}
                >
                  <PlayCircleIcon sx={{ mr: 1 }} />
                  Zagraj
                </Fab>
              </Link>
            </Box>
          </Grid> */}
        </Grid>
      </Box>
      <BottomAppBar></BottomAppBar>
    </>
  );
}
