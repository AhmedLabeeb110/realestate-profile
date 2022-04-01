import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "../../styles/PublicListings.module.css";
//import HouseOne from "../../public/mainImg/HouseOne.jpg";
// import Image from "next/image";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: theme.shadows[0]
}));

export default function PublicListings() {
  return (
    <Box sx={{  m: '0 auto', maxWidth: { xl: "xl", lg: "lg" }, pt: 8 }}>
     <Box>
     <Container>
     <Grid container spacing={12}>
       <Grid item xs={12} md={12}>
         <Item className={styles.regularHeading}>
           Tahapan Pembelian Properti yang Mudah dan Cepat
         </Item>
       </Grid>
     </Grid>
   </Container>
   <br />
   <br />
   <br />
   <Container>
     <Grid container spacing={6} >
       <Grid item xs={12} md={4} >
         <Item>
           <Card sx={{ maxWidth: 345 }} className={styles.cardBg}>
             <CardMedia
               component="img"
               height="140"
               image="/mainImg/HouseOne.jpg"
               alt="Public Cards"
               sx={{ mb: 2 }}
             />
             <CardContent>
               <Typography gutterBottom className={styles.CardTtiles}>
                 Pilih Properti
               </Typography>
               <Typography className={styles.paragraph}>
                 Lizards are a widespread group of squamate reptiles, with
                 over 6,000 species, ranging across all continents except
                 Antarctica
               </Typography>
             </CardContent>
             <CardActions>
               <Button
                 variant="content"
                 color="warning"
                 className={styles.BtnStyles}
                 sx={{ mb: 1 }}
               >
                 Baca lebih Lanjut
               </Button>
             </CardActions>
           </Card>
         </Item>
       </Grid>

       <Grid item xs={12} md={4} >
         <Item>
           <Card sx={{ maxWidth: 345 }} className={styles.cardBg}>
             <CardMedia
               component="img"
               height="140"
               image="/mainImg/HouseTwo.jpg"
               alt="Public Cards"
               sx={{ mb: 2 }}
             />
             <CardContent>
               <Typography gutterBottom className={styles.CardTtiles}>
                 Pilih Properti
               </Typography>
               <Typography className={styles.paragraph}>
                 Lizards are a widespread group of squamate reptiles, with
                 over 6,000 species, ranging across all continents except
                 Antarctica
               </Typography>
             </CardContent>
             <CardActions>
               <Button
                 variant="content"
                 color="warning"
                 className={styles.BtnStyles}
                 sx={{ mb: 1 }}
               >
                 Baca lebih Lanjut
               </Button>
             </CardActions>
           </Card>
         </Item>
       </Grid>

       <Grid item xs={12} md={4} >
         <Item>
           <Card sx={{ maxWidth: 345 }} className={styles.cardBg}>
             <CardMedia
               component="img"
               height="140"
               image="/mainImg/HouseThree.jpg"
               alt="Public Cards"
               sx={{ mb: 2 }}
             />
             <CardContent>
               <Typography gutterBottom className={styles.CardTtiles}>
                 Pilih Properti
               </Typography>
               <Typography className={styles.paragraph}>
                 Lizards are a widespread group of squamate reptiles, with
                 over 6,000 species, ranging across all continents except
                 Antarctica
               </Typography>
             </CardContent>
             <CardActions>
               <Button
                 variant="content"
                 color="warning"
                 className={styles.BtnStyles}
                 sx={{ mb: 1 }}
               >
                 Baca lebih Lanjut
               </Button>
             </CardActions>
           </Card>
         </Item>
       </Grid>

     </Grid>
   </Container></Box>
    </Box>
  );
}
