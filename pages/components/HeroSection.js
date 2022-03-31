import React from "react";
import Image from "next/image";
import hero from "../../public/mainImg/hero.png";
import propertynumbers from "../../public/mainImg/propertynumbers.png";
//MUI and CSS
import styles from "../../styles/HeroSection.module.css";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: theme.shadows[0],
  backgroundColor: "#eeedde"
}));

export default function HeroSection() {
  return (
    <Box className={styles.HeroMain}>
    <Container sx={{ maxWidth: {xl: 'xl', lg: 'lg'}, pt: 5, pb: 8}}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <Item className={styles.primaryText}>
            <h1>Temukan Hunian Keluarga Sesuai Keinginanmu</h1>
          </Item>
          <Item className={styles.secondaryText}>
            <p>
              Menyediakan hunian bagi keluarga anda dengan varian pilihan dan
              lokasi yang strategis di kota anda dengan cara yang lebih mudah.
            </p>
          </Item>

          <Item className={styles.bannerInput}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <Stack spacing={2}>
                <TextField
                  id="outlined-basic"
                  label="Search properties"
                  variant="outlined"
                  placeholder="Search properties"
                  sx={{ width: "300%", maxWidth: "80vw" }}
                />
                <Button
                  variant="contained"
                  sx={{ height: "48px" }}
                  className={styles.bannerButton}
                >
                  Search
                </Button>
              </Stack>
            </Box>
          </Item>

          <Item sx={{display: 'flex'}}>
            <Image src={propertynumbers} alt="Property Numbers" />
          </Item>
        </Grid>
        <Grid sx={{display: {xs: 'none', md: 'block'} }} item xs={12} md={5}>
          <Item>
            <Image src={hero} alt="Hero Image" id={styles.HeroImage} />
          </Item>
        </Grid>
      </Grid>
    </Container>
    </Box>
  );
}
