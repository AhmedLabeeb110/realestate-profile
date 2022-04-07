import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import styles from "../../styles/Header.module.css";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Header() {
  const { data: session, status } = useSession();
  return (
    <header>
      <AppBar position="static" className={styles.appBar} elevation={0}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/">
              <a className={styles.logo}>
                <b>
                  <i>0</i> mah
                </b>
              </a>
            </Link>
          </Typography>

          <div className={styles.spaceItems}>
            <Link href="/">
              <a className={styles.individualItems}>Home</a>
            </Link>
            <Link href="/properties">
              <a className={styles.individualItems}>Properties</a>
            </Link>
            <Link href="/about">
              <a className={styles.individualItems}>About</a>
            </Link>
            {!session && status !== 'authenticated' && (
            <Link href="/api/auth/signin">
              <a
                className={styles.individualItems}
                onClick={(e) => {
                  e.preventDefault();
                  signIn('github');
                }}
              >
                <b>Login</b>
              </a>
            </Link>)}
            {session && status !== 'unauthenticated' && ( <Link href="/api/auth/signout">
              <a
                className={styles.individualItems}
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                <b>Logout</b>
              </a>
            </Link>)}
          </div>
        </Toolbar>
      </AppBar>
    </header>
  );
}
