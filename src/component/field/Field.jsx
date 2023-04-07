import React from "react";
import styled from "styled-components";

const StyleField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 15px;
  margin-bottom: 30px;
  &:last-child {
    margin-bottom: 0;
  }
`;
const Field = ({ children }) => {
  return <StyleField>{children}</StyleField>;
};

export default Field;
