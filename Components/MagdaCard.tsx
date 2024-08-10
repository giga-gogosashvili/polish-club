import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import magdaphoto from '../public/assets/IMG_0245.png';

export default function MagdaCard() {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: 'transparent' }}>
      <CardMedia
        sx={{ height: 340 }}
        image={magdaphoto}
        title="Magdalena Knapik"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="#fff">
          Magdalena Knapik
        </Typography>
        <Typography variant="body2" color="#fff">
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
