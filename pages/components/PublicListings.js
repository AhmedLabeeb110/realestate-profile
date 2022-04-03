import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import styles from "../../styles/PublicListings.module.css";
import PublicProperties from "./PublicProperties";
import { API_URL } from "../config/index";

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
    <Box sx={{ m: "0 auto", maxWidth: { xl: "xl", lg: "lg" }, pt: 8 }}>
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
          <Grid container spacing={6}>
            <Grid item xs={12} md={4}>
              <Item>
                {propertiespublic.map((ppl) => (
                  <PublicProperties key={ppl.id} ppl={ppl} />
                ))}
              </Item>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/propertiespublic`);
  const propertiespublic = await res.json();
  return {
    props: { propertiespublic: propertiespublic.slice(0, 3) },
    revalidate: 1,
  };
}
