import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import mainphoto from '../public/assets/Untitled (5).png';

export default function GeneralCard() {
  return (
    <Card
      sx={{ maxWidth: 900, backgroundColor: 'transparent', boxShadow: 'none' }}
    >
      <CardMedia
        sx={{ height: 400, width: 'auto' }}
        image={mainphoto}
        title="Magdalena Knapik"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Polski jest fantastyczny
        </Typography>
        <Typography variant="body2">
          Język polski jest bardzo praktyczny, dobrze go znać! Jest też bardzo
          interesujący i lekcje polskiego ze mną mogą być miłe i ciekawe. Polski
          jest naprawdę fantastyczny i magiczny.
        </Typography>
      </CardContent>
    </Card>
  );
}
