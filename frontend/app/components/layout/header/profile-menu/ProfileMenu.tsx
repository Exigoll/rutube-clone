import React from "react";

import { useAuth } from "@/hooks/useAuth";

import { api } from "@/store/api/api";

import styles from "./ProfileMenu.module.scss";

const ProfileMenu: React.FC = () => {
  const { user } = useAuth();

  const { data, isLoading } = api.useGetProfileQuery(null, {
    skip: !user,
  });

  return (
    <div className={styles.s}>
      <h1>ProfileMenu</h1>
    </div>
  );
};

export default ProfileMenu;
