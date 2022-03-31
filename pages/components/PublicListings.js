import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import styles from "../../styles/PublicListings.module.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function PublicListings() {
  return (
    <Box sx={{ maxWidth: {xl: 'xl', lg: 'lg'}, pt: 8}}>
      <Container>
        <Grid container spacing={12}>
          <Grid item xs={12} md={7}>
            <Item className={styles.regularHeading}>Tahapan Pembelian Properti yang Mudah dan Cepat</Item>
          </Grid>
        </Grid>
      </Container>
      <br />
      <br />
      <br />
      <Container>
        <Grid container spacing={6}>
          <Grid item xs={4}>
            <Item>xs=8</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
