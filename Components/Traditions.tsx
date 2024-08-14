import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import falsz from '../public/assets/Tasks/falsz.png';
import guess from '../public/assets/Tasks/guess.png';
import podlazniczka from '../public/assets/Tasks/podlazniczka.png';
import paczek from '../public/assets/Tasks/paczek.png';
import pasztet from '../public/assets/Tasks/pasztet.png';

import traditions from '../public/assets/traditions.png';
import { Typography } from '@mui/material';
import Link from '@mui/material/Link';
import Image from 'mui-image';
import Divider from '@mui/material/Divider';
import Fab from '@mui/material/Fab';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GoBack from './GoBack';
import BottomAppBar from './BottomAppBar';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

export default function Traditions() {
  const linkpodlazniczka =
    'https://wordwall.net/pl/resource/39583725/polski-dla-cudzoziemc%c3%b3w/%c5%9bwi%c4%85teczny-test';
  const linkpaczek =
    'https://wordwall.net/pl/resource/67976575/polski-dla-cudzoziemc%c3%b3w/t%c5%82usty-czwartek';
  const linkpasztet =
    'https://wordwall.net/pl/resource/31281063/polski-dla-cudzoziemc%c3%b3w/wielkanocny-koszyczek';
  const linkguess =
    'https://wordwall.net/pl/resource/74320304/polski-dla-cudzoziemc%c3%b3w/polska-kuchnia';
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
                Polskie tradycje
              </Typography>
            </Box>

            <Typography color="#000">
              Polacy kochają tradycje, święta, różne okazje. Kalendarz polski
              jest bardzo bogaty w różne wydarzenia, w każdym miesiącu jest
              jakiś specjalny dzień lub dni.
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Image width={400} src={traditions} />
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
            <Link href={linkpodlazniczka}>
              <Box
                component="img"
                sx={{
                  height: 'auto',
                  maxWidth: 500,
                }}
                alt="Żurek."
                src={podlazniczka}
              />
            </Link>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
              <Link href={linkpodlazniczka}>
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
            <Link href={linkpaczek}>
              <Box
                component="img"
                sx={{
                  height: 'auto',
                  maxWidth: 500,
                }}
                alt="Co to?"
                src={paczek}
              />
            </Link>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
              <Link href={linkpaczek}>
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
            <Link href={linkpasztet}>
              <Box
                component="img"
                sx={{
                  height: 'auto',
                  maxWidth: 500,
                }}
                alt="falsz"
                src={pasztet}
              />
            </Link>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
              <Link href={linkpasztet}>
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
