import React, { useEffect } from "react";
import styled from "styled-components";
const CreateTeacherStyle = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 1rem;
  border-radius: 8px 0 0 8px;
`;

const CreateTeacher = () => {
  useEffect(() => {
    document.title = "Thêm giáo viên";
  }, []);
  return <CreateTeacherStyle></CreateTeacherStyle>;
};

export default CreateTeacher;
