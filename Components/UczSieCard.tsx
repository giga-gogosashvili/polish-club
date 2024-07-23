// import React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import uczsie from '../public/assets/ucz_sie.jpg';

export default function DiscoverCard() {
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 340 }} image={uczsie} title="Ucz Sie" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Ucz się języka polskiego
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere
          non dolor nec facilisis. Suspendisse non commodo elit, non malesuada
          orci. Integer scelerisque massa.
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            {
              navigate('/main/uczsie');
            }
          }}
        >
          Więcej
        </Button>
      </CardActions>
    </Card>
  );
}
