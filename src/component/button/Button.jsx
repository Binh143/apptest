import LoadingSpinner from "component/loading";
import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const StyleButton = styled.button`
  cursor: ${(props) => (props.isLoading ? "wait" : "pointer")};
  padding: 0 20px;
  height: ${(props) => props.height || "66px"};
  line-height: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.kind === "secondary" &&
    css`
      background-color: white;
      color: ${(props) => props.theme.primary};
    `};
  ${(props) =>
    props.kind === "primary" &&
    css`
      color: white;
      background-image: linear-gradient(
        to right bottom,
        ${(props) => props.theme.primary},
        ${(props) => props.theme.secondary}
      );
    `};
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
/**
 *@requires
 * @param {string} type type of button ex: "button"| "submit"
 * @returns
 */
const Button = ({
  children,
  type = "button",
  kind = "primary",
  onClick = () => {},
  ...props
}) => {
  const { isLoading, href } = props;
  const child = isLoading ? <LoadingSpinner></LoadingSpinner> : children;
  if (href !== "" && typeof href === "string") {
    return (
      <Link to={href}>
        <StyleButton
          type={type}
          kind={kind}
          {...props}
          style={{ display: "inline-block" }}
        >
          {child}
        </StyleButton>
      </Link>
    );
  }
  return (
    <StyleButton type={type} kind={kind} onClick={onclick} {...props}>
      {child}
    </StyleButton>
  );
};
Button.prototype = {
  type: PropTypes.oneOf(["button", "submit"]),
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
  kind: PropTypes.oneOf(["primary", "secondary"]),
};
export default Button;
