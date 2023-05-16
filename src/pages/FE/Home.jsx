import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  });
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (!localStorage.getItem("accessToken")) {
  //     return navigate("/sign-in");
  //   }
  // }, []);
  return <div>home</div>;
};

export default Home;
