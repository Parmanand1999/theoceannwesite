import React, { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const LoginMiddleware = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [authenticated, setAuthenticated] = useState(null);
  const token = localStorage.getItem("oceanAllToken");
  console.log("www");
  useEffect(() => {
    if (token) {
      //   console.log("no token");
      navigate("/");
      setAuthenticated(false);
      // window.location.href = "/login";
    }
  }, []);
  return <>{authenticated ? null : <props.element />}</>;
};

export default LoginMiddleware;
