import { FC } from "react";

import Index from "@/services/layout";
import Discover from "@/services/pages/home/discover";
import Catalog from "@/services/pages/home/catalog";

const Home: FC = () => {
  return (
    <Index title="Rutube | Видеохостинг">
      <Discover />
      <Catalog />
    </Index>
  );
};

export default Home;
