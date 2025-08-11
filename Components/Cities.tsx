import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import symbole from '../public/assets/Tasks/symbole.png';
import malediwy from '../public/assets/Tasks/malediwy.png';
import pieknypolska from '../public/assets/Tasks/pieknypolska.png';
import jedzeniezregionow from '../public/assets/Tasks/jedzeniezregionow.png';

//
import polska from '../public/assets/Tasks/polska.png';
import polskawpigulce from '../public/assets/Tasks/polskawpigulce.png';
import bebok from '../public/assets/Tasks/bebok.png';
import syrenka from '../public/assets/Tasks/syrenka.png';

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
  const linkpieknypolska =
    'https://wordwall.net/pl/resource/72637862/polski-dla-cudzoziemc%c3%b3w/polska';
  const linkjedzeniezregionow =
    'https://wordwall.net/pl/resource/73376600/polski-dla-cudzoziemc%c3%b3w/polskie-produkty';
  //
  const linkpolska = 'https://wordwall.net/pl/resource/93038422';
  const linkpolskawpigulce = 'https://wordwall.net/pl/resource/92867714';
  const linkbebok = 'https://wordwall.net/pl/resource/87192548';
  const linksyrenka = 'https://wordwall.net/pl/resource/88767220';
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
            <Image width="100%" src={cities} />
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
            <Link href={linksymbole}>
              <Box
                component="img"
                width={{ xs: '100%', lg: 500 }}
                sx={{
                  height: 'auto',
                }}
                alt="Symbole."
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
                width={{ xs: '100%', lg: 500 }}
                sx={{
                  height: 'auto',
                }}
                alt="Malediwy"
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

          <Grid item xs={6}>
            <Link href={linkpieknypolska}>
              <Box
                component="img"
                width={{ xs: '100%', lg: 500 }}
                sx={{
                  height: 'auto',
                }}
                alt="Malediwy"
                src={pieknypolska}
              />
            </Link>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
              <Link href={linkpieknypolska}>
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
            <Link href={linkjedzeniezregionow}>
              <Box
                component="img"
                width={{ xs: '100%', lg: 500 }}
                sx={{
                  height: 'auto',
                }}
                alt="Malediwy"
                src={jedzeniezregionow}
              />
            </Link>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
              <Link href={linkjedzeniezregionow}>
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
            <Link href={linkpolska}>
              <Box
                component="img"
                width={{ xs: '100%', lg: 500 }}
                sx={{
                  height: 'auto',
                }}
                alt="polska"
                src={polska}
              />
            </Link>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
              <Link href={linkpolska}>
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
            <Link href={linkpolskawpigulce}>
              <Box
                component="img"
                width={{ xs: '100%', lg: 500 }}
                sx={{
                  height: 'auto',
                }}
                alt="polskawpigulce"
                src={polskawpigulce}
              />
            </Link>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
              <Link href={linkpolskawpigulce}>
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
            <Link href={linkbebok}>
              <Box
                component="img"
                width={{ xs: '100%', lg: 500 }}
                sx={{
                  height: 'auto',
                }}
                alt="bebok"
                src={bebok}
              />
            </Link>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
              <Link href={linkbebok}>
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
            <Link href={linksyrenka}>
              <Box
                component="img"
                width={{ xs: '100%', lg: 500 }}
                sx={{
                  height: 'auto',
                }}
                alt="syrenka"
                src={syrenka}
              />
            </Link>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
              <Link href={linksyrenka}>
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
