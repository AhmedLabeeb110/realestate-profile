import styles from "../styles/Home.module.css";
import Layout from "./components/Layout";
import HeroSection from "./components/HeroSection";
import PublicListings from "./components/PublicListings";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <PublicListings />
    </Layout>
  );
}
