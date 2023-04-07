import React from "react";
import { useController } from "react-hook-form";
import styled from "styled-components";
const InputStyle = styled.div`
  width: 100%;
  position: relative;
  input {
    width: 100%;
    padding: ${(props) => (props.hasIcon ? "20px 60px 20px 20px" : "20px")};
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    background-color: ${(props) => props.theme.grayLight};
    border-radius: 8px;
    transition: all 0.2s linear;
    border: solid 1px transparent;
  }
  input:focus {
    background-color: white;
    border: solid 1px ${(props) => props.theme.primary};
  }
  input:invalid {
    border: solid 1px red;
  }

  input::-webkit-input-placeholder {
    color: ${(props) => props.theme.icon};
  }
  input::-moz-input-placeholder {
    color: ${(props) => props.theme.icon};
  }
  .input-icon {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;
const Input = ({
  name = "",
  type = "text",
  hasIcon = false,
  control,
  children,
  ...props
}) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <InputStyle hasIcon={children ? true : false}>
      <input type={type} id={name} {...props} {...field} />
      {children}
    </InputStyle>
  );
};

export default Input;
