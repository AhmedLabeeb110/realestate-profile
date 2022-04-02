import Link from "next/link";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import styles from "../../styles/Footer.module.css";
import Awards from '../../public/mainImg/Awards.png'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: theme.shadows[0]
}));

export default function Footer() {
  return (
    <footer>
      <Box sx={{ flexGrow: 1 }} className={styles.footer}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3} md={3}>
            <Item className={styles.logo}>
              {/*Copyright &copy; <i>0</i>mah*/}
              <i>O</i> mah
            </Item>
            <Item className={styles.footerItems}>
              <Image
                src={Awards}
                alt="Picture of the author"
                width={185}
                maxWidth={500}
                height={100}
              />
            </Item>
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <Item className={styles.footerItemsMain}>About</Item>
            <Item className={styles.footerItems}>Portfolio</Item>
            <Item className={styles.footerItems}>References</Item>
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <Item className={styles.footerItemsMain}>Business</Item>
            <Item className={styles.footerItems}>Affiliate Programs</Item>
            <Item className={styles.footerItems}>Air BNB</Item>
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <Item className={styles.footerItemsMain}>Contact</Item>
            <Item className={styles.footerItems}>Live Chat</Item>
            <Item className={styles.footerItems}>FAQ</Item>
          </Grid>
        </Grid>
      </Box>
    </footer>
  );
}
