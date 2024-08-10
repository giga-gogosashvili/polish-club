import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import mainphoto from '../public/assets/Untitled (5).png';

export default function GeneralCard() {
  return (
    <Card sx={{ maxWidth: 900, backgroundColor: 'transparent' }}>
      <CardMedia
        sx={{ height: 400, width: 'auto' }}
        image={mainphoto}
        title="Magdalena Knapik"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="#fff">
          Polski jest fantastyczny
        </Typography>
        <Typography variant="body2" color="text.secondary" color="#fff">
          Język polski jest bardzo praktyczny, dobrze go znać! Jest też bardzo
          interesujący i lekcje polskiego ze mną mogą być miłe i ciekawe. Polski
          jest naprawdę fantastyczny i magiczny.
        </Typography>
      </CardContent>
    </Card>
  );
}
