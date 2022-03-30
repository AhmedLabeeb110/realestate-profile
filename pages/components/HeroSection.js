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
  boxShadow: theme.shadows[1],
}));

export default function HeroSection() {
  return (
    <div className={styles.HeroMain}>
      {/*<Container maxWidth="xl" className={styles.HeroImgParent}>
        <Image src={hero} alt="Hero Image" id={styles.HeroImage}/>
  </Container>*/}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8} xl={6}>
            <Item>
              <h1>Temukan Hunian Keluarga Sesuai Keinginanmu</h1>
            </Item>
            <Item>
              <p>
                Menyediakan hunian bagi keluarga anda dengan varian pilihan dan
                lokasi yang strategis di kota anda dengan cara yang lebih mudah.
              </p>
            </Item>
            <Item>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <Stack spacing={2} direction="row">
                  <TextField
                    id="outlined-basic"
                    label="Search properties"
                    variant="outlined"
                    placeholder="Search location, properties, residental group"
                  />
                  <Button variant="contained">Contained</Button>
                </Stack>
              </Box>
            </Item>
            <Item>
              <Image src={propertynumbers} alt="Property Numbers" />
            </Item>
          </Grid>
          <Grid item xs={4} xl={6}>
            <Item>
              <Image src={hero} alt="Hero Image" id={styles.HeroImage} />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
