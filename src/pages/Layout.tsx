import { Outlet } from "react-router-dom";
import { ReactLenis } from "@studio-freight/react-lenis";

export const Layout = () => {
  return (
    <ReactLenis root>
      <div className="relative h-full font-poppins">
        <Outlet />
      </div>
    </ReactLenis>
  );
};
