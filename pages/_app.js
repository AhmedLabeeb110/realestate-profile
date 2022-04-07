import { StyledEngineProvider } from "@mui/styled-engine-sc";
import { SessionProvider } from "next-auth/react";

import "../styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <StyledEngineProvider injectFirst>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </StyledEngineProvider>
  );
}

export default MyApp;
