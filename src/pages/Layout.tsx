import { Outlet } from "react-router-dom";
import { ReactLenis } from "@studio-freight/react-lenis";
import RiveFooter from "@rive/FooterWave.tsx";

export const Layout = () => {
  return (
    <ReactLenis root>
      <div className="relative h-full font-body">
        <Outlet />
      </div>
    </ReactLenis>
  );
};
