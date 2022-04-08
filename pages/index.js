import Layout from "./components/Layout";
import HeroSection from "./components/HeroSection";
import PublicListings from "./components/PublicListings";
import PublicHeading from "./components/PublicHeading";
import { useEffect, useState } from "react";

// import  {API_URL}  from "./config/index";

export default function Home() {
  const [propertiespublic, setPropertiesPublic] = useState([]);

  useEffect(()=>{
    fetch('/api/propertiespublic')
    .then(res=> res.json())
    .then(data=> setPropertiesPublic(data))
  },[]);
  return (
    <Layout>
      <HeroSection />
      <br />
      <br />
      <br />
      <PublicHeading />
        <PublicListings propertiespublic={propertiespublic.slice(0,3)} />
    </Layout>
  );
}