export const MenuData = [
  {
    id: 1,
    title: "Dashboard",
    url: "/",
    classIcon: "bx-grid-alt",
    subMenu: [],
  },
  {
    id: 2,
    title: "Giáo viên",
    url: "/teacher",
    classIcon: "bxs-folder",
    subMenu: [
      {
        title: "Danh sách giáo viên",
        url: "/teacher",
      },
      {
        title: "Thêm giáo viên",
        url: "/teacher/create",
      },
    ],
  },
  {
    id: 3,
    title: "Sinh viên",
    url: "/student",
    classIcon: "bxs-folder",
    subMenu: [
      {
        title: "Danh sách sinh viên",
        url: "/student",
      },
      {
        title: "Thêm sinh viên",
        url: "/student/create",
      },
    ],
  },
];
