import React from "react";

import { Redirect } from "react-router-dom";

const Layout = ({ children }) => {
  const isLogin = () => {
    let token = localStorage.getItem("login");
    if (token) return true;
    return false;
  };
  if (isLogin()) return <React.Fragment>{children}</React.Fragment>;
  return (
    <Redirect
      to={{
        pathname: "/login",
      }}
    />
  );
};

export default Layout;
