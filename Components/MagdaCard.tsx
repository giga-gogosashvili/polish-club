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
        >
          Magdalena Knapik
        </Typography>
        <Typography variant="body2">
          Pasjonatka języka polskiego. Pasjonatka języka polskiego. Pasjonatka
          języka polskiego. Pasjonatka języka polskiego. Pasjonatka języka
          polskiego. Pasjonatka języka polskiego.
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Więcej o mnie</Button>
        <Button size="small">Kontakt</Button>
      </CardActions> */}
    </Card>
  );
}
