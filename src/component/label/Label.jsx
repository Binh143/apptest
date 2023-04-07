import React from "react";
import styled from "styled-components";
const StyleLabel = styled.label`
  font-weight: 600;
  color: ${(props) => props.theme.grayDark};
  cursor: pointer;
`;
const Label = ({ htmlFor = "", children, ...props }) => {
  return (
    <StyleLabel htmlFor={htmlFor} {...props}>
      {children}
    </StyleLabel>
  );
};

export default Label;
