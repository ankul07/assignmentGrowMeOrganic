import React from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  element: JSX.Element;
}
// private route hai ye
const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const userInfo = localStorage.getItem("userinfo");

  if (userInfo) {
    return element;
  } else {
    return <Navigate to="/" />;
  }
};

export default PrivateRoute;
