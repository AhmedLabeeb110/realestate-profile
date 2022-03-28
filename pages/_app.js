import { StyledEngineProvider } from "@mui/styled-engine-sc";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <StyledEngineProvider injectFirst>
      <Component {...pageProps} />
    </StyledEngineProvider>
  );
}

export default MyApp;
