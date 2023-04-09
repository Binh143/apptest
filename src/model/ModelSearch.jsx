import React, { Fragment, useState } from "react";
import styled from "styled-components";

const ModelSearchStyle = styled.div`
  .search {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(${(props) => props.theme.dark} / 0.8);
    padding: 1rem;
    place-content: center;
    z-index: 99;
    -webkit-backdrop-filter: blur(4px);
    backdrop-filter: blur(4px);
  }
  .search-content {
    max-width: 760px;
    max-height: 490px;
    background: rgb(${(props) => props.theme.darkSecondary} / 1);
    z-index: 10;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
  }
  .search-header {
    width: 100%;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 10px;
    padding: 0.5rem 1rem 0 1.5rem;
    border-bottom: solid 1px #e2e8f00d;
  }

  .search-icon {
    width: 30px;
    color: rgb(${(props) => props.theme.gray1} / 1);
  }
  .search-icon-close {
    width: 30px;
    color: rgb(${(props) => props.theme.gray1} / 1);
    cursor: pointer;
  }
  .input-search {
    width: 100%;
    outline: none;
    border: none;
    background: transparent;
    color: rgb(${(props) => props.theme.gray1} / 1);
    font-size: 1rem;
  }
  .search-body {
    width: 100%;
    height: 390px;
    overflow-y: scroll;
  }
  .search-list {
    width: 100%;
    display: block;
  }
  .search-item {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 20px;
    padding: 0.5rem 1.5rem;
    border-bottom: solid 1px #e2e8f00d;
    cursor: pointer;
  }
  .search-list:last-child {
    border: none;
  }
  .search-item:hover {
    background: rgb(${(props) => props.theme.dark} / 1);
    transition: background 0.4s ease;
  }
  .search-images {
    width: 80px;
    height: 50px;
    object-fit: cover;
    border-radius: 10px;
  }
  .search-link {
    width: 100%;
    color: rgb(${(props) => props.theme.gray1} / 1);
    font-size: 0.9rem;
  }
  .search-footer {
    width: 100%;
    height: 55px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-top: solid 1px #e2e8f00d;
    padding: 0 1.5rem;
    color: rgb(${(props) => props.theme.gray1} / 1);
  }
  .active-search {
    display: grid !important;
  }
  .remove-search {
    display: none;
  }
`;

const ModelSearch = ({ toggleSearch, onClick = () => {} }) => {
  return (
    <ModelSearchStyle>
      <section
        className={`search ${toggleSearch ? "active-search" : "remove-search"}`}
      >
        <div className={`search-content `}>
          <div className="search-header">
            <svg
              className="search-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <input
              type="text"
              name="input-search"
              id="input-search"
              className="input-search"
              placeholder="Search here... "
            />
            <svg
              onClick={onClick}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="search-icon-close"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="search-body">
            <ul className="search-list">
              <li className="search-item">
                <img
                  src="/images/no-image.jpg"
                  alt="no-image"
                  className="search-images"
                />
                <a href="#" className="search-link Line">
                  avbvhb
                </a>
              </li>
              <li className="search-item">
                <img
                  src="/images/no-image.jpg"
                  alt="no-image"
                  className="search-images"
                />
                <a href="#" className="search-link Line">
                  avbvhb
                </a>
              </li>
              <li className="search-item">
                <img
                  src="/images/no-image.jpg"
                  alt="no-image"
                  className="search-images"
                />
                <a href="#" className="search-link Line">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                  ullam nostrum soluta ratione earum? Assumenda sequi eveniet
                  nostrum esse nihil. Voluptatum laborum non voluptate sunt
                  optio vel odit itaque omnis! Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Suscipit nisi a dolore dolor,
                  qui dolorem dolorum hic, ipsa distinctio delectus quas natus
                  fugiat libero fugit vel eligendi assumenda nobis aperiam.
                </a>
              </li>
              <li className="search-item">
                <img
                  src="/images/no-image.jpg"
                  alt="no-image"
                  className="search-images"
                />
                <a href="#" className="search-link Line">
                  avbvhb
                </a>
              </li>
              <li className="search-item">
                <img
                  src="/images/no-image.jpg"
                  alt="no-image"
                  className="search-images"
                />
                <a href="#" className="search-link Line">
                  avbvhb
                </a>
              </li>
            </ul>
          </div>
          <div className="search-footer">
            <span>by Husky</span>
          </div>
        </div>
      </section>
    </ModelSearchStyle>
  );
};

export default ModelSearch;
