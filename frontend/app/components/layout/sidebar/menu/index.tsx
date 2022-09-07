import { FC } from "react";
import { IMenuItem } from "@/services/layout/sidebar/menu/menu.interfaces";

import styles from "./Menu.module.scss";
import MenuItem from "@/services/layout/sidebar/menu/MenuItem";
import Line from "@/services/ui/Line";

interface IMenu {
  title: string,
  items: IMenuItem[],
}

const Menu: FC<IMenu> = ({ title, items }) => {
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
