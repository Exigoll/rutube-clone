import Head from "next/head";
import { FC, PropsWithChildren } from "react";

import styles from "./layout.module.scss";
import Sidebar from "@/services/layout/sidebar";
import Header from "./header";

const Layout: FC<PropsWithChildren<{ title: string }>> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className={styles.main}>
        <Sidebar />
        <section className={styles.content}>
          <Header />
          <div className={styles.wrapper}>
            {children}
          </div>
        </section>
      </main>
    </>
  );
};

export default Layout;
