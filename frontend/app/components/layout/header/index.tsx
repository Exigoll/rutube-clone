import { FC } from "react";

import styles from "./Header.module.scss";

import Search from "@/services/layout/header/search";
import IconsRight from "@/services/layout/header/icons-right";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Search />
      <IconsRight />
    </header>
  );
};

export default Header;
