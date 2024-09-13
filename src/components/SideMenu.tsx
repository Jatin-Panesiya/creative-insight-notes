import { NavLink } from "react-router-dom";
import { ISideMenuDataType } from "../utils/types";

const SideMenu = ({ data }: { data: ISideMenuDataType[] }) => {
  return (
    <div className="bg-secondary text-white min-w-[200px] h-[calc(100vh-40px)] overflow-auto sticky top-[40px] ">
      <p className="p-2 py-5 text-slate-300 text-xl">{data[0].mainTitle}</p>
      {data.map((menu: ISideMenuDataType, index: number) => (
        <NavLink
          to={menu.path}
          key={index}
          className="hover:bg-hover px-5 w-full inline-block py-1.5"
        >
          {menu.title}
        </NavLink>
      ))}
    </div>
  );
};

export default SideMenu;
