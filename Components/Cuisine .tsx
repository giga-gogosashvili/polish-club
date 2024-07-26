import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Zurek from '../public/assets/Tasks/zurek.png';
import CoTo from '../public/assets/Tasks/coto.png';
import gotuj from '../public/assets/gotuj.jpg';
import { Typography } from '@mui/material';
import Link from '@mui/material/Link';
import Image from 'mui-image';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function Cuisine() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ImageList sx={{ height: 450 }} cols={2} rowHeight={164}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <Typography variant="h3">Kuchnia polska</Typography>
          <Typography>
            Kuchnia polska jest bogata i ciekawa. Aktualna kuchnia jest trochę
            inna niż ta, 100 lat temu czy 300 lat temu. Ważne: Polacy kochają
            zupy, chleb, kanapki i mogą jeść obiady na słodko i na słono. Proszę
            robić zadania i quizy - tu są interesujące informacje.
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <Image src={gotuj} showLoading />

          {/* <Box
            component="img"
            sx={{
              height: 'auto',

              maxWidth: 500,
            }}
            alt="The house from the offer."
            src={gotuj}
          /> */}
        </Grid>
      </Grid>
      {/* <Card>
        <CardMedia sx={{ height: 600, width: 'auto' }} image={gotuj} />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Kuchnia polska jest bogata i ciekawa. Aktualna kuchnia jest trochę
            inna niż ta, 100 lat temu czy 300 lat temu. Ważne: Polacy kochają
            zupy, chleb, kanapki i mogą jeść obiady na słodko i na słono. Proszę
            robić zadania i quizy - tu są interesujące informacje.{' '}
          </Typography>
        </CardContent>
      </Card> */}
      {/* <Typography variant="h2">Kuchnia polska</Typography> */}

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Link href="https://wordwall.net/pl/resource/30511797/polski-dla-cudzoziemc%c3%b3w/%c5%bcurek">
            <Box
              component="img"
              sx={{
                height: 'auto',

                maxWidth: 500,
              }}
              alt="The house from the offer."
              src={Zurek}
            />
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Link href="https://wordwall.net/pl/resource/24429640/polski-dla-cudzoziemc%c3%b3w/kurpiowskie-jedzenie">
            <Box
              component="img"
              sx={{
                height: 'auto',

                maxWidth: 500,
              }}
              alt="The house from the offer."
              src={CoTo}
            />
          </Link>
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </Box>
  );
}

const itemData = [
  {
    img: '../public/assets/Tasks/zurek.png',
    title: 'Zurek',
  },
  {
    img: '../public/assets/Tasks/coto.png',
    title: 'Burger',
  },
  {
    img: 'public/assets/Tasks/falsz.png',
    title: 'Camera',
  },
  {
    img: 'public/assets/Tasks/guess.png',
    title: 'Coffee',
  },
];
