import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import magdaphoto from '../public/assets/IMG_0245.png';
import { Typography } from '@mui/material';
import Link from '@mui/material/Link';
import Image from 'mui-image';

import GoBack from './GoBack';
import BottomAppBar from './BottomAppBar';
import Icon from '@mdi/react';
import { mdiHumanMaleBoard } from '@mdi/js';
import { mdiCalendarCheck } from '@mdi/js';
import { mdiAccountTieWoman } from '@mdi/js';
import { mdiEyeCheck } from '@mdi/js';
import { mdiMedalOutline } from '@mdi/js';
import { mdiSchoolOutline } from '@mdi/js';

import Stack from '@mui/material/Stack';

export default function Magda() {
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
                marginTop: '20px',
              }}
            >
              <Typography variant="h3" color="#fff">
                Magdalena Knapik
              </Typography>
            </Box>
            <Box marginLeft="20px">
              <Stack alignItems="center" direction="row" gap={2}>
                <Icon color="#000" path={mdiHumanMaleBoard} size={1} />{' '}
                <Typography variant="body1" color="#000">
                  wykładowca:
                </Typography>
              </Stack>
              <Typography
                variant="body1"
                color="#000"
                align="left"
                marginLeft="55px"
                // sx={{ display: 'block' }}
              >
                {' '}
                - języka polskiego jako obcego od 2003 roku
              </Typography>
              <Typography
                variant="body1"
                color="#000"
                align="left"
                marginLeft="55px"
                // sx={{ display: 'block' }}
              >
                {' '}
                - Wiedzy o Polsce
              </Typography>
              <Typography
                variant="body1"
                color="#000"
                align="left"
                marginLeft="55px"
                // sx={{ display: 'block' }}
              >
                {' '}
                - z zakresu glottodydaktyki, literatury, teorii komunikacji,
                kultury, technik multimedialnych, Polski w świecie
              </Typography>

              <Stack direction="row" gap={2} alignItems="left">
                <Icon
                  color="#000"
                  path={mdiCalendarCheck}
                  size={1}
                  align="left"
                />
                <Typography variant="body1" color="#000" align="left">
                  organizatorka wydarzeń kulturalnych i językowych
                </Typography>
              </Stack>

              <Stack direction="row" gap={2} alignItems="left">
                <Icon
                  color="#000"
                  path={mdiAccountTieWoman}
                  size={1}
                  align="left"
                />
                <Typography variant="body1" color="#000" align="left">
                  przewodnicząca egzaminów certyfikatowych z języka polskiego
                  jako obcego
                </Typography>
              </Stack>

              <Stack direction="row" gap={2} alignItems="left">
                <Icon
                  color="#000"
                  path={mdiCalendarCheck}
                  size={1}
                  align="left"
                />
                <Typography variant="body1" color="#000" align="left">
                  organizatorka i egzaminatorka egzaminów wstępnych
                </Typography>
              </Stack>

              <Stack direction="row" gap={2} alignItems="left">
                <Icon color="#000" path={mdiEyeCheck} size={1} align="left" />
                <Typography variant="body1" color="#000" align="left">
                  egzaminatorka TELC
                </Typography>
              </Stack>

              <Stack direction="row" gap={2} alignItems="left">
                <Icon
                  color="#000"
                  path={mdiSchoolOutline}
                  size={1}
                  align="left"
                />
                <Typography variant="body1" color="#000" align="left">
                  laureatka plebiscytu Absolwent z Pasją, nagród rektora
                  Uniwersytetu Śląskiego
                </Typography>
              </Stack>

              <Stack direction="row" gap={2} alignItems="left">
                <Icon
                  color="#000"
                  path={mdiMedalOutline}
                  size={1}
                  align="left"
                />
                <Typography variant="body1" color="#000" align="left">
                  złota odznaka UŚ
                </Typography>
              </Stack>
            </Box>
            <Typography color="#000" marginTop="20px">
              Interesujące informacje o mnie są w{' '}
              <Link href="https://wordwall.net/pl/resource/75401459/polski-dla-cudzoziemc%c3%b3w/magdalena-knapik-poznaj-mnie">
                quizie
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={5} justifyContent="center">
            <Image width="100%" src={magdaphoto} />
          </Grid>
        </Grid>
      </Box>

      <BottomAppBar></BottomAppBar>
    </>
  );
}
