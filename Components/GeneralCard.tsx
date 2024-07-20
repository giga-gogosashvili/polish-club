import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import mainphoto from '../src/assets/11235885_11070.jpg';

export default function GeneralCard() {
  return (
    <Card sx={{ maxWidth: 900 }}>
      <CardMedia
        sx={{ height: 400 }}
        image={mainphoto}
        title="Magdalena Knapik"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Polski jest fantastyczny
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere
          non dolor nec facilisis. Suspendisse non commodo elit, non malesuada
          orci. Integer scelerisque massa sed sollicitudin interdum.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Czytaj więcej</Button>
      </CardActions>
    </Card>
  );
}
