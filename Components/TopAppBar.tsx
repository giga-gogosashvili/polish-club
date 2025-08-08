import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

import Logo from '../public/assets/Polish_club_logo.png';

export default function TopAppBar() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        flexGrow: 1,
        width: '100%',
        boxShadow: 'none',
      }}
    >
      {/* <CssBaseline /> */}

      <AppBar
        position="static"
        style={{
          width: '100%',
          // backgroundColor: 'transparent',
          // backgroundColor: 'yellow',

          boxShadow: 'none',
          // maxWidth: '100%',
          // left: '0px',
          // right: '0px',
        }}
      >
        <Box marginBottom="20px">
          {' '}
          <div>
            <img
              alt="logo"
              src={Logo}
              style={{
                width: '38%',
                height: '38%',
                margin: '0 auto',
              }}
            />
          </div>
        </Box>
        <Toolbar
          style={{ margin: '0' }}
          sx={{
            // '& .MuiListItemText-primary': {
            //   color: 'grey.100',
            //   typography: 'body1',
            // },
            width: '100%',
            justifyContent: 'space-between',
            // backgroundColor: '#2F4A8C',
            backgroundColor: 'yellow',

            // maxWidth: '500px',
          }}
          // alignItems="center"
          // justifyContent="center"
        >
          {/* <Button color="inherit">Polska magia</Button> */}
          <Button
            style={{ color: '#fff' }}
            onClick={() => {
              {
                navigate('/cuisine');
              }
            }}
          >
            Kuchnia polska
          </Button>
          <Button
            style={{ color: '#fff' }}
            onClick={() => {
              {
                navigate('/traditions');
              }
            }}
          >
            Polskie tradycje
          </Button>
          <Button
            style={{ color: '#fff' }}
            onClick={() => {
              {
                navigate('/cities');
              }
            }}
          >
            Polskie miasta
          </Button>
          {/* <Button color="inherit">Studenci polecają</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
