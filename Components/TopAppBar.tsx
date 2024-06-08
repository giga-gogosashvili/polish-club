import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CssBaseline from '@mui/material/CssBaseline';

import Logo from '../src/assets/Polish_club_logo.png';

export default function TopAppBar() {
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
            // maxWidth: '500px',
          }}
          // alignItems="center"
          // justifyContent="center"
        >
          {/* <Button color="inherit">Polska magia</Button> */}
          <Button style={{ color: '#DC143C' }}>Kuchnia polska</Button>
          <Button style={{ color: '#DC143C' }}>Polskie tradycje</Button>
          <Button style={{ color: '#DC143C' }}>Język polski</Button>
          {/* <Button color="inherit">Studenci polecają</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
