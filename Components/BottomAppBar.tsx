import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function BottomAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <CssBaseline /> */}

      <AppBar
        position="static"
        style={{
          width: '100%',
          backgroundColor: '#2F4A8C',
          // height: '90px',
        }}
      >
        <Box sx={{ padding: '20px' }}>
          <Typography style={{ color: '#fff' }}>
            magdalena.j.knapik@gmail.com
          </Typography>
          <Typography style={{ color: '#fff' }}>+48 534 993 080</Typography>

          <Typography variant="caption" style={{ color: '#fff' }}>
            © Polish Club 2024
          </Typography>
        </Box>
      </AppBar>
    </Box>
  );
}
