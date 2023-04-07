import React from "react";
import styled from "styled-components";
const StyleField = styled.div`
  position: relative;
  line-height: 40px;
  width: 100%;
  height: 45px;
  .inputV2 {
    width: 100%;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    padding: 10px 0;
    border-bottom: solid 1px ${(props) => props.theme.grayDark};
  }
  .labelV2 {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding: 10px 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #84878b;
    cursor: text;
    transition: 0.3s all;
  }
  .labelV2::before {
    content: "Enter your ";
  }
  .inputV2:focus,
  .inputV2:valid {
    border-bottom: solid 1px ${(props) => props.theme.primary};
  }
  /* .inputV2:invalid {
        border-bottom: solid 1px red;
      } */
  .inputV2:focus ~ .labelV2::before,
  .inputV2:valid ~ .labelV2::before {
    content: "";
  }
  .inputV2:focus ~ .labelV2,
  .inputV2:valid ~ .labelV2 {
    top: -25px;
    color: ${(props) => props.theme.grayDark};
    font-weight: 600;
  }
`;
const FieldV2 = () => {
  return (
    <StyleField>
      <input
        type="text"
        id="fullNameV2"
        name="fullNameV2"
        className="inputV2"
        required
      />
      <label htmlFor="fullNameV2" className="labelV2">
        Full Name
      </label>
    </StyleField>
  );
};

export default FieldV2;
