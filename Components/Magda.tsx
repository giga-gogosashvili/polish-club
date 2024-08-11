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
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Icon from '@mdi/react';
import { mdiHumanMaleBoard } from '@mdi/js';

export default function Magda() {
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
                Magdalena Knapik
              </Typography>
            </Box>

            <Typography color="#000">
              Interesujące informacje o mnie są w{' '}
              <Link href="https://wordwall.net/pl/resource/75401459/polski-dla-cudzoziemc%c3%b3w/magdalena-knapik-poznaj-mnie">
                quizie
              </Link>
            </Typography>
            <List>
              <ListItem disablePadding>
                <ListItemIcon>
                  <Icon path={mdiHumanMaleBoard} size={1} />
                </ListItemIcon>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography variant="body2" style={{ color: '#000' }}>
                      wykładowca języka polskiego jako obcego od 2003 roku
                    </Typography>
                  }
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={5}>
            <Image width={400} src={magdaphoto} />
          </Grid>
        </Grid>
      </Box>

      <BottomAppBar></BottomAppBar>
    </>
  );
}
