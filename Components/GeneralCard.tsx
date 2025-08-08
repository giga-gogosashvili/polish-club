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
          Polski jest fantastyczny, Polska jest magiczna
        </Typography>
        <Typography variant="body2">
          Ucz się na każdym poziomie: A1, A2, B1, B2, C1, C2. Przygotuj się ze
          mną do egzaminu z języka polskiego – certyfikatowego, TELC, w ramach
          rekrutacji na różne programy Kirklanda, NAWA, studia w Polsce. Ucz się
          ze mną polskiej kultury i tradycji. Poznaj ciekawostki o Polsce.
        </Typography>
      </CardContent>
    </Card>
  );
}
