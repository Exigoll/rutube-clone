import React from "react";

import styles from "./Sidebar.module.scss";
import Link from "next/link";
import Menu from "@/components/layout/sidebar/menu/Menu";
import { menu } from "./menu/menu.data";

const Sidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      <Link href={"/"}>
        <a className={styles.logo}>
          Rutube
        </a>
      </Link>
      <Menu title="Меню" items={menu}/>
      <div className={styles.copy}>
        © 2022 Rutube by Exigoll
      </div>
    </aside>
  );
};

export default Sidebar;
