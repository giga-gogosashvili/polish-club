import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CssBaseline from '@mui/material/CssBaseline';

export default function TopAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <CssBaseline /> */}

      <AppBar position="static" style={{ width: '100%' }}>
        <Box>
          {' '}
          <div>Polish CLub</div>
        </Box>
        <Toolbar>
          <Button color="inherit">Polska magia</Button>
          <Button color="inherit">Kuchnia polska</Button>
          <Button color="inherit">Polskie tradycje</Button>
          <Button color="inherit">Język polski</Button>
          <Button color="inherit">Studenci polecają</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
