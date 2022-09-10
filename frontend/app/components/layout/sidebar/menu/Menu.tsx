import React from "react";

import MenuItem from "@/components/layout/sidebar/menu/MenuItem";
import { IMenuItem } from "@/components/layout/sidebar/menu/menu.interfaces";
import Line from "@/components/ui/Line";

import styles from "./Menu.module.scss";

interface IMenu {
  title: string;
  items: IMenuItem[];
}

const Menu: React.FC<IMenu> = ({ title, items }) => {
  return (
    <nav className={styles.menu_sidebar}>
      <h3>{title}</h3>
      <ul>
        {items.map(menuItem => (
          <MenuItem item={menuItem} key={menuItem.link} />
        ))}
      </ul>
      <Line />
    </nav>
  );
};

export default Menu;
