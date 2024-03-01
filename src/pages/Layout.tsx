import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="font-poppins">
      <nav className="border-b border-gray5 bg-gray4 font-semibold">
        <ul className="flex items-center gap-5 p-5 text-gray6">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};
