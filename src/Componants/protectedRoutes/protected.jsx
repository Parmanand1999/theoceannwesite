import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Protected = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const signup = localStorage.getItem("oceanAllSignupData");
  const token = localStorage.getItem("oceanAllToken");

  let authenticated = false;

  if (!token && !signup) {
    window.location.href = "/login";
    authenticated = false;
  } else if (
    token &&
    (location.pathname === "/login" || location.pathname === "/signup")
  ) {
    window.location.href = "/";
    navigate("/");
  } else {
    authenticated = true;
  }
  return <>{authenticated && <props.element />}</>;
};

export default Protected;
