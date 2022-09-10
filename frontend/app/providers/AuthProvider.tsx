import dynamic from "next/dynamic";
import React from "react";

import { TypeComponentAuthFields } from "@/providers/private-route.interface";

const DynamicCheckRole = dynamic(() => import("./CheckRole"), {
  ssr: false,
});

const AuthProvider: React.FC<
  React.PropsWithChildren<TypeComponentAuthFields>
> = ({ children, Component: { isOnlyUser } }) => {
  return !isOnlyUser ? (
    <>{children}</>
  ) : (
    <DynamicCheckRole Component={{ isOnlyUser }}>{children}</DynamicCheckRole>
  );
};

export default AuthProvider;
