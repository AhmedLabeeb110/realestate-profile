import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import styles from "../../styles/PublicListings.module.css";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: theme.shadows[0],
}));

export default function PublicListings({ propertiespublic }) {
  return (
    <Box sx={{ m: "0 auto", maxWidth: { xl: "xl", lg: "lg", md: "md" }, pt: 8 }}>
      <Box>
        <Container>
          <Grid container spacing={6}>
           
          {propertiespublic?.map((property) => (
          <Grid item xs={12} md={4} key={property.id}>
              <Item>
              <Card sx={{ maxWidth: 345 }} className={styles.cardBg}>
              <CardMedia
                component="img"
                height="140"
                image={property.image}
                alt="Public Cards"
                sx={{ mb: 2 }}
              />
              <CardContent>
                <Typography gutterBottom className={styles.CardTtiles}>
                  {property.name}
                </Typography>
                <Typography className={styles.paragraph}>
                  {property.description}
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
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
