import React from "react";

import Layout from "@/components/layout/Layout";
import Catalog from "@/components/pages/home/catalog/Catalog";
import Discover from "@/components/pages/home/discover/Discover";

const Home: React.FC = () => {
  return (
    <Layout title="Rutube | Видеохостинг">
      <Discover />
      <Catalog />
    </Layout>
  );
};

export default Home;
