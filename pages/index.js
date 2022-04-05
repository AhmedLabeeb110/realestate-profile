import Layout from "./components/Layout";
import HeroSection from "./components/HeroSection";
import PublicListings from "./components/PublicListings";
import PublicHeading from "./components/PublicHeading";

import { API_URL } from "./config/index";

export default function Home({ propertiespublic }) {
  return (
    <Layout>
      <HeroSection />
      <br />
      <br />
      <br />
      <PublicHeading />
        <PublicListings propertiespublic={propertiespublic} />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/propertiespublic`);
  const propertiespublic = await res.json();
  return {
    props: { propertiespublic: propertiespublic.slice(0, 3) },
    revalidate: 1,
  };
}
