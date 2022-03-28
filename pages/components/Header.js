import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import styles from "../../styles/Header.module.css";

export default function Header() {

  return (
    <header>
      <AppBar position="static" className={styles.appBar} elevation={0}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/">
              <a className={styles.logo}>
               <b><i>0</i> mah</b>
              </a>
            </Link>
          </Typography>

          <div className={styles.spaceItems}>
            <Link href="/properties">
              <a className={styles.individualItems}>Properties</a>
            </Link>
            <Link href="/about">
              <a className={styles.individualItems}>About</a>
            </Link>
            <Link href="/contact">
              <a className={styles.individualItems}>Events</a>
            </Link>
          </div>
          </Toolbar>
      </AppBar>
    </header>
  );
}
