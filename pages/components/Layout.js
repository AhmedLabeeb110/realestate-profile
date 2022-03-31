import { useRouter } from "next/router";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import PublicListings from "./PublicListings";

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <Header />
      {router.pathname === '/' && <HeroSection/>}
      {router.pathname === '/' && <PublicListings/>}
       {/*{router.pathname === '/' && <HeroSection/>}*/}
      <div>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "0mah | Find the best properties",
  description: "locate the best properties in the world",
  keywords: "mansion, apartment, hotel",
};
