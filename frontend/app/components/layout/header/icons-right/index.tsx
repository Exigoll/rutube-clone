import styles from "./IconsRight.module.scss";
import { FC } from "react";
import { useAuth } from "@/hooks/useAuth";
import ProfileMenu from "@/services/layout/header/profile-menu";
import UploadVideo from "@/services/layout/header/upload-video";
import AuthForm from "@/services/layout/header/authForm";

const IconsRight: FC = () => {
  const { user } = useAuth();

  return (
    <div className={styles.icons}>
      {user ? (
        <>
          <ProfileMenu />
          <UploadVideo />
        </>
      ) : (
        <AuthForm />
      )}
    </div>
  );
};

export default IconsRight;
