import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import menu from '../public/assets/Tasks/menu.png';
import niebieskiptak from '../public/assets/Tasks/niebieskiptak.png';
import znani from '../public/assets/Tasks/znani.png';
import serwisy from '../public/assets/Tasks/serwisy.png';
//
import poczta from '../public/assets/Tasks/poczta.png';
import poczta_kurier from '../public/assets/Tasks/poczta_kurier.png';
import pogoda from '../public/assets/Tasks/pogoda.png';
import poryroku from '../public/assets/Tasks/poryroku.png';

import polish from '../public/assets/polish.png';
import { Typography } from '@mui/material';
import Link from '@mui/material/Link';
import Image from 'mui-image';
import Divider from '@mui/material/Divider';
import Fab from '@mui/material/Fab';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GoBack from './GoBack';
import BottomAppBar from './BottomAppBar';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

export default function Polish() {
  const linkznani =
    'https://wordwall.net/pl/resource/33899302/polski-dla-cudzoziemc%c3%b3w/wyj%c4%85tkowe-kobiety';
  const linkniebieskiptak =
    'https://wordwall.net/pl/resource/23596073/polski-dla-cudzoziemc%c3%b3w/kolory-w-%c5%bcyciu-polak%c3%b3w';
  const linkmenu =
    'https://wordwall.net/pl/resource/65077371/polski-dla-cudzoziemc%c3%b3w/dialogi-pytania-i-odpowiedzi-kawiarnia';
  const linkserwisy =
    'https://wordwall.net/pl/resource/75115556/polski-dla-cudzoziemc%c3%b3w/serwisy-i-us%c5%82ugi';

  ///

  const linkpoczta = 'https://wordwall.net/pl/resource/94571842';
  const linkpoczta_kurier = 'https://wordwall.net/pl/resource/94571691';
  const linkpogoda = 'hhttps://wordwall.net/pl/resource/94498315';
  const linkporyroku = 'https://wordwall.net/pl/resource/94498959';

  return (
    <>
      <Box sx={{ flexGrow: 1 }} alignItems="center">
        <GoBack></GoBack>
        <Grid
          container
          direction={{ xs: 'column', lg: 'row' }}
          justifyContent="center"
          spacing={2}
          marginBottom={10}
          marginTop={{ xs: '40px', lg: '0px' }}
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
              marginBottom={{ xs: '20px', lg: '0px' }}
              sx={{
                backgroundColor: '#2F4A8C',
                width: '100%',
                height: '20%',
                alignContent: 'center',
              }}
            >
              <Typography variant="h3" color="#fff">
                Język polski
              </Typography>
            </Box>

            <Typography color="#000">
              Język polski jest bardzo praktyczny, dobrze go znać! Jest też
              bardzo interesujący i lekcje polskiego ze mną mogą być miłe i
              ciekawe.
              <Box>Polski jest naprawdę fantastyczny i magiczny.</Box>
            </Typography>
          </Grid>
          <Grid item xs={5} justifyContent="center">
            <Image width="100%" src={polish} />
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
            <Link href={linkznani}>
              <Box
                component="img"
                width={{ xs: '100%', lg: 500 }}
                sx={{
                  height: 'auto',
                }}
                alt="Żurek."
                src={znani}
              />
            </Link>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
              <Link href={linkznani}>
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
            <Link href={linkniebieskiptak}>
              <Box
                component="img"
                width={{ xs: '100%', lg: 500 }}
                sx={{
                  height: 'auto',
                }}
                alt="Co to?"
                src={niebieskiptak}
              />
            </Link>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
              <Link href={linkniebieskiptak}>
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
            <Link href={linkmenu}>
              <Box
                component="img"
                width={{ xs: '100%', lg: 500 }}
                sx={{
                  height: 'auto',
                }}
                alt="falsz"
                src={menu}
              />
            </Link>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
              <Link href={linkmenu}>
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
            <Link href={linkserwisy}>
              <Box
                component="img"
                width={{ xs: '100%', lg: 500 }}
                sx={{
                  height: 'auto',
                }}
                alt="falsz"
                src={serwisy}
              />
            </Link>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
              <Link href={linkserwisy}>
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
            <Link href={linkpoczta}>
              <Box
                component="img"
                width={{ xs: '100%', lg: 500 }}
                sx={{
                  height: 'auto',
                }}
                alt="poczta"
                src={poczta}
              />
            </Link>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
              <Link href={linkpoczta}>
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
            <Link href={linkpoczta_kurier}>
              <Box
                component="img"
                width={{ xs: '100%', lg: 500 }}
                sx={{
                  height: 'auto',
                }}
                alt="poczta_kurier"
                src={poczta_kurier}
              />
            </Link>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
              <Link href={linkpoczta_kurier}>
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
            <Link href={linkpogoda}>
              <Box
                component="img"
                width={{ xs: '100%', lg: 500 }}
                sx={{
                  height: 'auto',
                }}
                alt="pogoda"
                src={pogoda}
              />
            </Link>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
              <Link href={linkpogoda}>
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
            <Link href={linkporyroku}>
              <Box
                component="img"
                width={{ xs: '100%', lg: 500 }}
                sx={{
                  height: 'auto',
                }}
                alt="poryroku"
                src={poryroku}
              />
            </Link>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
              <Link href={linkporyroku}>
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
          ///
        </Grid>
      </Box>
      <BottomAppBar></BottomAppBar>
    </>
  );
}
