import React from "react";
import Layout from "../Layout/Layout";
import HomeBanner from "../Layout/HomeBanner";
import Homeitems from "../Layout/Homeitems";
import HomeWorkshop from "../Layout/HomeWorkshop";
import HomeCollections from "../Layout/HomeCollections";

function Home() {
  return (
    <Layout>
      <HomeBanner />
      <Homeitems />
      <HomeWorkshop />
      <HomeCollections />
    </Layout>
  );
}

export default Home;
