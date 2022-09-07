import { FC } from "react";

import Layout from "@/services/layout/Layout";
import Discover from "@/services/pages/home/discover";
import Catalog from "@/services/pages/home/catalog";

const Home: FC = () => {
  return (
    <Layout title="Rutube | Видеохостинг">
      <Discover />
      <Catalog />
    </Layout>
  );
};

export default Home;
