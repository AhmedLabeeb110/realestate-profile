import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import styles from "../../styles/PublicListings.module.css";
import { styled } from "@mui/material/styles";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow: theme.shadows[0],
  }));

export default function PublicHeading() {
  return (
        <Container>
          <Grid container spacing={12}>
            <Grid item xs={12} md={12}>
              <Item className={styles.regularHeading}>
                Tahapan Pembelian Properti yang Mudah dan Cepat
              </Item>
            </Grid>
          </Grid>
        </Container>
  );
}
