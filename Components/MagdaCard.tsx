import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import magdaphoto from '../public/assets/IMG_0245.png';

import { useNavigate } from 'react-router-dom';

export default function MagdaCard() {
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 345, backgroundColor: '#fff' }}>
      <CardMedia
        sx={{ height: 340 }}
        image={magdaphoto}
        title="Magdalena Knapik"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          onClick={() => {
            {
              navigate('/magda');
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
          Magdalena Knapik
        </Typography>
        <Typography variant="body2">
          Pasjonatka języka polskiego. Organizatorka wydarzeń kulturalnych.
          Promotorska polskiej kultury i polskich tradycji. Wykładowca i
          egzaminator – kliknij aby dowiedzieć się więcej.
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Więcej o mnie</Button>
        <Button size="small">Kontakt</Button>
      </CardActions> */}
    </Card>
  );
}
