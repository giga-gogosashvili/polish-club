// import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import uczsie from '../public/assets/ucz_sie.jpg';

export default function PolishCard() {
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 345, backgroundColor: '#fff' }}>
      <CardMedia sx={{ height: 340 }} image={uczsie} title="Ucz Sie" />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          onClick={() => {
            {
              navigate('/polish');
            }
          }}
          sx={{
            // color: 'text.primary',
            transition: 'color 0.3s ease',
            '&:hover': {
              color: 'primary.main',
              cursor: 'pointer',
            },
          }}
        >
          Ucz się języka polskiego
        </Typography>

        <Typography variant="body2">
          Język polski jest bardzo praktyczny, dobrze go znać! Jest też bardzo
          interesujący i lekcje polskiego ze mną mogą być miłe i ciekawe.
          {/* <Box>Polski jest naprawdę fantastyczny i magiczny.</Box> */}
        </Typography>
        <Typography variant="body2">
          Polski jest naprawdę fantastyczny i magiczny.
        </Typography>
      </CardContent>
    </Card>
  );
}
