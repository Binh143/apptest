import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      return navigate("/");
    }
  }, []);
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
