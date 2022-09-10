import React from "react";

import Layout from "@/components/layout/Layout";
import Discover from "@/components/pages/home/discover/Discover";
import Catalog from "@/components/pages/home/catalog/Catalog";

const Home: React.FC = () => {
  return (
    <Layout title="Rutube | Видеохостинг">
      <Discover />
      <Catalog />
    </Layout>
  );
};

export default Home;
