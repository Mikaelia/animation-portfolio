import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="relative h-full overflow-x-hidden font-poppins">
      <Outlet />
    </div>
  );
};
