import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { MenuData } from "./MenuData";
import { CollapseItem } from "component/collapseItem";

const ModelMenuStyle = styled.div`
  width: 100%;
  height: 100%;
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 300px;
    background: #11101d;
    z-index: 9;
    transition: all 0.5s ease;
  }
  .sidebar.close {
    width: 78px;
  }
  .sidebar .logo-details {
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    column-gap: 10px;
  }
  .sidebar .logo-details img {
    height: 50px;
    line-height: 50px;
  }
  .sidebar .logo-details .logo_name {
    font-size: 22px;
    color: #fff;
    font-weight: 600;
    transition: 0.3s ease;
    transition-delay: 0.1s;
  }
  .sidebar.close .logo-details .logo_name {
    transition-delay: 0s;
    opacity: 0;
    pointer-events: none;
  }
  .sidebar .nav-links {
    height: 100%;
    padding: 30px 0 150px 0;
    overflow: auto;
  }
  .sidebar.close .nav-links {
    overflow: visible;
  }
  .sidebar .nav-links::-webkit-scrollbar {
    display: none;
  }
  .sidebar .nav-links li {
    position: relative;
    list-style: none;
    transition: all 0.4s ease;
  }
  .sidebar .nav-links li:hover {
    background: #1d1b31;
  }
  .sidebar .nav-links li .icon-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .sidebar.close .nav-links li .icon-link {
    display: block;
  }
  .sidebar .nav-links li i {
    height: 50px;
    min-width: 78px;
    text-align: center;
    line-height: 50px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .sidebar .nav-links li.showMenu i.arrow {
    transform: rotate(-180deg);
  }
  .sidebar.close .nav-links i.arrow {
    display: none;
  }
  .sidebar .nav-links li a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
  .sidebar .nav-links li a .link_name {
    font-size: 18px;
    font-weight: 400;
    color: #fff;
    transition: all 0.4s ease;
    text-transform: capitalize;
  }
  .sidebar.close .nav-links li a .link_name {
    opacity: 0;
    pointer-events: none;
  }
  .sidebar .nav-links li .sub-menu {
    padding: 6px 6px 14px 80px;
    margin-top: -10px;
    background: #1d1b31;
    display: none;
  }
  .sidebar .nav-links li.showMenu .sub-menu {
    display: block;
  }
  .sidebar .nav-links li .sub-menu a {
    color: #fff;
    font-size: 15px;
    padding: 5px 0;
    white-space: nowrap;
    opacity: 0.6;
    transition: all 0.3s ease;
  }
  .sidebar .nav-links li .sub-menu a:hover {
    opacity: 1;
  }
  .sidebar.close .nav-links li .sub-menu {
    position: absolute;
    left: 100%;
    top: -10px;
    margin-top: 0;
    padding: 10px 20px;
    border-radius: 0 6px 6px 0;
    opacity: 0;
    display: block;
    pointer-events: none;
    transition: 0s;
  }
  .sidebar.close .nav-links li:hover .sub-menu {
    top: 0;
    opacity: 1;
    pointer-events: auto;
    transition: all 0.4s ease;
  }
  .sidebar .nav-links li .sub-menu .link_name {
    display: none;
  }
  .sidebar.close .nav-links li .sub-menu .link_name {
    font-size: 18px;
    opacity: 1;
    display: block;
  }
  .sidebar .nav-links li .sub-menu.blank {
    opacity: 1;
    pointer-events: auto;
    padding: 3px 20px 6px 16px;
    opacity: 0;
    pointer-events: none;
  }
  .sidebar .nav-links li:hover .sub-menu.blank {
    top: 50%;
    transform: translateY(-50%);
  }
  .sidebar .profile-details {
    position: fixed;
    bottom: 0;
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #1d1b31;
    padding: 12px 0;
    transition: all 0.5s ease;
  }
  .sidebar.close .profile-details {
    background: none;
  }
  .sidebar.close .profile-details {
    width: 78px;
  }
  .sidebar .profile-details .profile-content {
    display: flex;
    align-items: center;
  }
  .sidebar .profile-details img {
    height: 50px;
    width: 50px;

    object-fit: cover;
    border-radius: 16px;
    margin: 0 14px 0 12px;
    background: #1d1b31;
    transition: all 0.5s ease;
  }
  .sidebar.close .profile-details img {
    padding: 10px;
  }
  .sidebar .profile-details .profile_name,
  .sidebar .profile-details .job {
    color: #fff;
    font-size: 0.9rem;
    font-weight: 500;
    white-space: nowrap;
    text-transform: capitalize;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .sidebar.close .profile-details i,
  .sidebar.close .profile-details .profile_name,
  .sidebar.close .profile-details .job {
    display: none;
  }
  .sidebar .profile-details .job {
    font-size: 0.7rem;
    width: 100%;
  }
  .home-section {
    position: relative;
    background: #e4e9f7;
    height: 100vh;
    left: 300px;
    width: calc(100% - 260px);
    transition: all 0.5s ease;
    padding: 12px;
  }
  .sidebar.close ~ .home-section {
    left: 78px;
    width: calc(100% - 78px);
  }
  .sidebar-search {
    cursor: text;
    color: #fff;
  }
  .logo-images {
    width: 50px;
    height: 50px;
    margin-left: 12px;
  }
  .logo_name {
    font-size: 0.8rem !important;
  }
  .profile-details i {
    min-width: 50px !important;
  }
  .name-job {
    max-width: 180px;
  }
`;
const ModelMenu = ({
  toggleMenu,
  onClickMenu = () => {},
  onClickSearch = () => {},
}) => {
  const { name, email, avatar } = useSelector((state) => state.user);
  const data = MenuData;
  return (
    <ModelMenuStyle>
      <div className={`sidebar ${toggleMenu ? "" : "close"} `}>
        <div className="logo-details">
          <img
            className="logo-images"
            src="/images/LogoHITU.webp"
            alt="hitu-logo"
          />
          <div className="logo_name">Trường Cao đẳng Công Thương TP.HCM</div>
        </div>
        <ul className="nav-links">
          <li onClick={onClickSearch}>
            <div className="icon-link">
              <a href="#">
                <i className="bx bx-search"></i>
                <span className="sidebar-search link_name">Search...</span>
              </a>
              <div className="sub-menu ">
                <span className="link_name sidebar-search">Search</span>
              </div>
            </div>
          </li>
          {data.length > 0 &&
            data.map((item, index) => (
              <CollapseItem data={item} key={item.id} />
            ))}
          <li>
            <div className="profile-details">
              <div className="profile-content">
                <img
                  src={`${avatar !== "null" ? avatar : "/images/no-image.jpg"}`}
                  alt="profile"
                />
              </div>
              <div className="name-job">
                <div className="profile_name">{name}</div>
                <div className="job">{email}</div>
              </div>

              <i className="bx bx-log-out" />
            </div>
          </li>
        </ul>
      </div>
    </ModelMenuStyle>
  );
};

export default ModelMenu;
