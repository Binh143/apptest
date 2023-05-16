import React, { useState } from "react";
// import "./toggleStyle.css";
import styled from "styled-components";
const ToggleStyle = styled.div`
  .toggle {
    width: 40px;
    height: 20px;
    background-color: #ccc;
    padding: 3px;
    border-radius: 100rem;
    cursor: pointer;
    transition: all 0.2s linear;
  }
  .toggle.active {
    background-color: ${(props) => props.theme.primary};
  }
  .spinner {
    width: 15px;
    height: 15px;
    background-color: white;
    border-radius: 100rem;
    transition: all 0.2s linear;
  }
  .spinner.active {
    transform: translateX(19px);
  }
`;
const Toggle = ({ on, onClick = () => {} }) => {
  return (
    <ToggleStyle>
      <div className={`toggle ${on ? "active" : ""}`} onClick={onClick}>
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>
      {/* <div className="toggle-control">
        <div className="toggle-on" onClick={() => setOn(true)}>
          on
        </div>
        <div className="toggle-off" onClick={() => setOn(false)}>
          off
        </div>
      </div> */}
    </ToggleStyle>
  );
};

export default Toggle;
