import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <div className="bg-slate-900 text-white flex sticky top-0">
      <NavLink
        to="/html/html-introduction"
        className={`hover:bg-slate-600 p-2 px-5 ${
          location.pathname.includes("html") && "active"
        }`}
      >
        HTML
      </NavLink>
      <NavLink to="/css" className="hover:bg-slate-600 p-2 px-5">
        CSS
      </NavLink>
    </div>
  );
};
export default Header;
