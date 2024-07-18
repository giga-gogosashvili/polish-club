import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function BottomAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <CssBaseline /> */}

      <AppBar
        position="static"
        style={{ width: '100%', backgroundColor: '#FBFAF9', height: '90px' }}
      >
        <Box>
          <Typography style={{ color: 'black' }}>
            magdalena.j.knapik@gmail.com
          </Typography>
          <Typography style={{ color: 'black' }}>+48 534 993 080</Typography>

          <Typography variant="caption" style={{ color: 'black' }}>
            © Polish Club 2024
          </Typography>
        </Box>
      </AppBar>
    </Box>
  );
}
