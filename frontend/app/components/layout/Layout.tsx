import Head from "next/head";
import React from "react";

import Sidebar from "@/components/layout/sidebar/Sidebar";

import Header from "./header/Header";
import styles from "./layout.module.scss";

const Layout: React.FC<React.PropsWithChildren<{ title: string }>> = ({
  title,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className={styles.main}>
        <Sidebar />
        <section className={styles.content}>
          <Header />
          <div className={styles.wrapper}>{children}</div>
        </section>
      </main>
    </>
  );
};

export default Layout;
