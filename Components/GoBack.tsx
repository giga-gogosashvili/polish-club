import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';

export default function GoBack() {
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'left',
          alignContent: 'center',
          justifyContent: 'left',
          width: '100%',
          height: 5,
        }}
      >
        <BottomNavigation showLabels onClick={() => navigate(-1)}>
          <BottomNavigationAction
            // label="Go back"
            // disableRipple
            icon={
              <ArrowBackIosIcon
              // sx={{
              //   height: '20px',
              //   //   color: '#7C5DFA',
              // }}
              />
            }
            // sx={{
            //   display: 'inline',
            // }}
          />
        </BottomNavigation>
      </Box>
      <ArrowBackIosIcon
        onClick={() => navigate(-1)}
        sx={{ justifyContent: 'left' }}
      />
    </>
  );
}
