import { ISideMenuDataType } from "../utils/types";
import Header from "./Header";
import SideMenu from "./SideMenu";

const Layout = ({
  children,
  data,
}: {
  children?: JSX.Element;
  data: ISideMenuDataType[];
}) => {
  return (
    <div>
      <Header />
      <div className="flex">
        <SideMenu data={data} />
        <div className="px-5 w-full">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
