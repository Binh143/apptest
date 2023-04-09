import { SignInPage } from "pages/Authentication";
import HomeBE from "pages/BE/HomeBE";
import MainBE from "pages/BE/MainBE";
import Home from "pages/FE/Home";
import Main from "pages/FE/Main";
import DashboardTeacherFE from "pages/FE/teacher/DashboardTeacherFE";
import PageNotFound from "pages/PageNotFound";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
        <Route path="/" element={<Main />}>
          <Route index element={<Home></Home>}></Route>
          <Route index path="dashboard" element={<Home></Home>}></Route>
          <Route
            path="teacher"
            element={<DashboardTeacherFE></DashboardTeacherFE>}
          ></Route>
          <Route
            path="teacher"
            element={<DashboardTeacherFE></DashboardTeacherFE>}
          ></Route>
        </Route>
        <Route path="/admin" element={<MainBE></MainBE>}>
          <Route index element={<HomeBE></HomeBE>}></Route>
          <Route path="dashboard" element={<HomeBE></HomeBE>}></Route>
        </Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
