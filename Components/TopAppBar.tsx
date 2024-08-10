import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

import Logo from '../public/assets/Polish_club_logo.png';

export default function TopAppBar() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <CssBaseline /> */}

      <AppBar
        position="static"
        style={{ width: '100%', backgroundColor: '#FBFAF9' }}
      >
        <Box>
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
            justifyContent: 'space-between',
            backgroundColor: '#000',
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
          <Button style={{ color: '#fff' }}>Polskie tradycje</Button>
          <Button style={{ color: '#fff' }}>Polskie miasta</Button>
          {/* <Button color="inherit">Studenci polecają</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
