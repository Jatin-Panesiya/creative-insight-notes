import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Css from "./pages/Css/Css";
import { HtmlSideMenuData } from "./utils/constants";
import ErrorPage from "./pages/Error/ErrorPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {HtmlSideMenuData.map(({ Element, path }, index) => (
          <Route element={<Element />} path={path} key={index} />
        ))}
        <Route element={<Css />} path="/css" />
        <Route element={<ErrorPage />} path="*" />
        <Route element={<Navigate to="/html/html-introduction" />} path="/" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
