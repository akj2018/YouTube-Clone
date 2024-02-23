import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import SidebarV2 from "./Sidebar_v2";
import { SkeletonTheme } from "react-loading-skeleton";

const Body = () => {
  const location = useLocation();
  const isRootPath = location.pathname === "/";
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className="flex ">
        {isRootPath ? <Sidebar /> : <SidebarV2 />}
        <SidebarV2 />
        <Outlet />
      </div>
    </SkeletonTheme>
  );
};

export default Body;
