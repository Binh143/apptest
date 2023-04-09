import ModelMenu from "model/ModelMenu";
import ModelSearch from "model/ModelSearch";
import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const MainStyle = styled.div`
  .main_content {
    position: absolute;
    height: 100%;
    width: calc(100% - 78px);
    left: 78px;
    transition: all 0.5s ease;
    display: flex;
    flex-direction: column;
    z-index: -1;
  }
  .main_content .text {
    font-size: 25px;
    font-weight: 500;
    color: #1d1b31;
    margin: 12px;
  }
  .main_content-active {
    width: calc(100% - 300px);
    left: 300px;
  }
  .menu-content {
    width: 100%;
    height: 60px;
    background: rgb(${(props) => props.theme.darkSecondary} / 1);
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    column-gap: 20px;
  }
  .menu-content-right {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 20px;
  }

  .menu-content-item {
    position: relative;
    cursor: pointer;
  }
  .menu-content-status-count {
    position: absolute;
    top: -5px;
    right: -5px;
    font-size: 0.6rem;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background: rgb(${(props) => props.theme.redF} / 1);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .menu-content-icon {
    font-size: 1.8rem;
  }
  .menu-content-dropdown {
    background: rgb(${(props) => props.theme.dark} / 1);
    color: rgb(${(props) => props.theme.gray1} / 1);
  }
  .content {
    width: 100%;
    height: 100%;
    padding: 1rem 2rem 1rem 1rem;
    background: rgb(${(props) => props.theme.gray3} / 1);
  }
`;

const Main = () => {
  const navigate = useNavigate();
  const params = useLocation();

  const [toggleSearch, setToggleSearch] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleFullscreen, setToggleFullscreen] = useState(true);
  useEffect(() => {
    if (!params.pathname === "/dashboard" || !params.pathname === "/") {
      if (!localStorage.getItem("accessToken")) {
        return navigate("/signIn");
      }
    }
  }, []);
  window.onkeydown = function (e) {
    // ESCAPE key pressed
    if (e.keyCode === 27) {
      if (toggleSearch) {
        setToggleSearch(false);
      } else {
        setToggleMenu(false);
      }
    }
  };
  const handleFullscreen = () => {
    setToggleFullscreen(!toggleFullscreen);
    if (toggleFullscreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };
  return (
    <MainStyle>
      <ModelMenu
        toggleMenu={toggleMenu}
        onClickMenu={() => setToggleMenu(!toggleMenu)}
        onClickSearch={() => setToggleSearch(true)}
      ></ModelMenu>
      <ModelSearch
        toggleSearch={toggleSearch}
        onClick={() => setToggleSearch(false)}
      ></ModelSearch>
      <div
        className={`main_content ${toggleMenu ? "main_content-active" : ""}`}
      >
        <div className="menu-content ">
          <div>
            <i
              className="bx bx-menu menu-content-icon"
              onClick={() => setToggleMenu(!toggleMenu)}
            ></i>
            <span> </span>
          </div>
          <div className="menu-content-right">
            <div className="menu-content-item dropdown-btn">
              <label className="menu-content-status-count">99+</label>
              <i className="bx bxs-news menu-content-icon"></i>
              <div className="dropdown menu-content-dropdown">
                <div className="dropdown-header">
                  <span>Tin tức</span>
                  <i className="bx bx-x dropdown-header-icon"></i>
                </div>
                <div className="dropdown-body">
                  <ul className="dropdown-list">
                    <li className="dropdown-item">
                      <Link to="/" className="dropdown-link">
                        bjvfbvj
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="menu-content-item dropdown-btn">
              <label className="menu-content-status-count">99+</label>
              <i className="bx bx-bell menu-content-icon"></i>
              <div className="dropdown menu-content-dropdown">
                <div className="dropdown-header">
                  <span>Thông báo</span>
                  <i className="bx bx-x dropdown-header-icon"></i>
                </div>
                <div className="dropdown-body">
                  <ul className="dropdown-list">
                    <li className="dropdown-item">
                      <Link to="/" className="dropdown-link">
                        bjvfbvj
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="menu-content-item " onClick={handleFullscreen}>
              <i
                className={`bx ${
                  toggleFullscreen ? "bx-expand" : "bx-exit-fullscreen"
                }  menu-content-icon`}
              ></i>
            </div>
          </div>
        </div>
        <div className="content">
          <Outlet></Outlet>
        </div>
      </div>
    </MainStyle>
  );
};

export default Main;
