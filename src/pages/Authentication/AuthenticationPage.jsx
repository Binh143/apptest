import React, { Children } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AuthenticationPageStyle = styled.div`
  min-height: 100vh;
  padding: 20px;
  .logo {
    margin: 0 auto 20px;
  }
  .heading {
    text-align: center;
    /* color: ${(props) => props.theme.primary}; */
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 60px;
    background: linear-gradient(86.88deg, #1dc071, #2cccff);
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
  .logo-link {
    display: flex;
    justify-content: center;
  }
  .logo {
    width: 10rem;
  }
  .form {
    max-width: 600px;
    margin: 0 auto;
  }
  .have-account {
    margin-bottom: 30px;
    margin-top: 30px;
    text-align: center;
    a {
      display: inline-block;
      color: ${(props) => props.theme.primary};
      font-weight: 500;
    }
  }
`;
const AuthenticationPage = ({ children }) => {
  return (
    <AuthenticationPageStyle>
      <div className="container">
        <Link to="/" className="logo-link">
          <img src="/images/LogoHITU.webp" alt="logo" className="logo" />
        </Link>
        <h1 className="heading">Trường Cao đẳng Công Thương TP.Hồ Chí Minh</h1>
        {children}
      </div>
    </AuthenticationPageStyle>
  );
};

export default AuthenticationPage;
