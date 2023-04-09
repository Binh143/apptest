import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      return navigate("/signIn");
    }
  }, []);
  return <div>home</div>;
};

export default Home;
