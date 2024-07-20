import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import magdaphoto from '../src/assets/1200x1200_vector_PL-6.jpg';

export default function MagdaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 340 }}
        image="src/assets/IMG_0245.JPG"
        title="Magdalena Knapik"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Magdalena Knapik
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere
          non dolor nec facilisis. Suspendisse non commodo elit, non malesuada
          orci. Integer scelerisque massa sed sollicitudin interdum.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Więcej o mnie</Button>
        <Button size="small">Kontakt</Button>
      </CardActions>
    </Card>
  );
}
