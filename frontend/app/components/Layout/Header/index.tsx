import { FC } from "react";

import styles from "./Header.module.scss";

import Search from "@/services/Layout/Header/search/Search";
import IconsRight from "@/services/Layout/Header/icons-right/IconsRight";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Search />
      <IconsRight />
    </header>
  );
};

export default Header;
