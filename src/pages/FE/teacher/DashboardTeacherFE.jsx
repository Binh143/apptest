import TeacherAPI from "api/TeacherAPI";
import { Button } from "component/button";
import ToggleStatus from "model/ToggleStatus";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import styled from "styled-components";

const IndexTeacherStyle = styled.div`
  width: 100%;
  height: 100%;
  .dataTable {
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 1rem;
    a button {
      font-size: 16px;
      font-weight: 500;
      height: auto;
      padding: 0.5rem 1rem;
    }
    a:nth-child(2) button {
      background: rgb(${(props) => props.theme.redF} / 1);
    }
    a:nth-child(3) button {
      background: rgb(${(props) => props.theme.warning} / 1);
    }
  }
`;

const DashboardTeacherFE = () => {
  const col = [
    {
      name: "Tên",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Khoa",
      selector: (row) => row.facultyName,
      sortable: true,
    },

    {
      name: "Chức vụ",
      selector: (row) => (row.manager === true ? "Trưởng khoa" : "Giáo viên"),
      sortable: true,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
      sortable: true,
    },
    {
      name: "Trạng thái",
      selector: (row) => (
        <ToggleStatus status={row.status} id={row.id}></ToggleStatus>
      ),
    },
  ];
  const customStyles = {
    headRow: {
      style: {
        border: "none",
      },
    },
    headCells: {
      style: {
        color: "#202124",
        fontSize: "14px",
      },
    },
    rows: {
      highlightOnHoverStyle: {
        backgroundColor: "rgb(230, 244, 244)",
        borderBottomColor: "#FFFFFF",

        outline: "1px solid #FFFFFF",
      },
    },
    pagination: {
      style: {
        border: "none",
      },
    },
  };
  const [data, setData] = useState();

  const params = {
    page: Number(1),
    size: Number(20),
  };

  useEffect(() => {
    document.title = "Giáo viên";
    const requestAPI = async () => {
      try {
        const result = await TeacherAPI.getPages(params);
        if (result.status === 200) {
          setData(result.data.data);
        }
      } catch (error) {
        console.log(
          "🚀 ~ file: DashboardTeacherFE.jsx:23 ~ requestAPI ~ error:",
          error
        );
      }
    };
    requestAPI();
  }, []);

  function ActionHeaderTable() {
    return (
      <div className="dataTable">
        <Button href={"create"}>Thêm</Button>
        <Button href={"/"}>Xóa</Button>
        <Button href={"create"}>Thùng rác</Button>
      </div>
    );
  }
  return (
    <IndexTeacherStyle>
      <DataTable
        title="Danh sách giáo viên"
        actions={<ActionHeaderTable />}
        columns={col}
        data={data}
        pagination
        selectableRows
        highlightOnHover
        pointerOnHover
        customStyles={customStyles}
        fixedHeader
        selectableRowsHighlight
        fixedHeaderScrollHeight="calc( 100% - 80px)"
      ></DataTable>
    </IndexTeacherStyle>
  );
};

export default DashboardTeacherFE;
