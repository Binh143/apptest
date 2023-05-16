import TeacherAPI from "api/TeacherAPI";
import Toggle from "component/toggle/Toggle";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ToggleStatus = ({ status, id }) => {
  const [on, setOn] = useState(status === true ? true : false);
  const handleToggle = async () => {
    const result = await TeacherAPI.putToggle(id);
    console.log("🚀 ~ file: ToggleStatus.jsx:10 ~ useEffect ~ result:", result);
    if (result.status === 200) {
      setOn(!on);
    } else {
      setOn(status);
      toast.error(
        "Không thể cập nhật trạnh thái của giáo viên cần kiểm tra lại",
        {
          delay: 1000,
        }
      );
    }
  };
  return <Toggle on={on} onClick={handleToggle}></Toggle>;
};

export default ToggleStatus;
