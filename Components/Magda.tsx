import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import magdaphoto from '../public/assets/IMG_0245.png';
import { Typography } from '@mui/material';
import Link from '@mui/material/Link';
import Image from 'mui-image';

import GoBack from './GoBack';
import BottomAppBar from './BottomAppBar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

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

            <List sx={{ marginLeft: '10%' }}>
              <ListItem disablePadding>
                <ListItemText sx={{ alignSelf: 'center' }} disableTypography>
                  {' '}
                  <Box color="#000">
                    - wykładowca języka polskiego jako obcego od 2003 roku text
                  </Box>
                  <Box color="#000">- wykładowca Wiedzy o Polsce</Box>
                  <Box color="#000">
                    - wykładowca z zakresu glottodydaktyki, literatury, teorii
                    komunikacji, kultury, technik multimedialnych, Polski w
                    świecie
                  </Box>
                  <Box color="#000">
                    - organizatorka wydarzeń kulturalnych i językowych
                  </Box>
                  <Box color="#000">
                    - przewodnicząca egzaminów certyfikatowych z języka
                    polskiego jako obcego
                  </Box>
                  <Box color="#000">
                    - organizatorka i egzaminatorka egzaminów wstępnych
                  </Box>
                  <Box color="#000">- egzaminatorka TELC</Box>
                  <Box color="#000">
                    - laureatka plebiscytu Absolwent z Pasją, nagród rektora UŚ
                  </Box>
                  <Box color="#000">- złota odznaka UŚ</Box>
                </ListItemText>
              </ListItem>
            </List>

            <Typography color="#000">
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
