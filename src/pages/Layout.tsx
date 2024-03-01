import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="font-poppins h-full">
      <nav className="border-b border-gray5 bg-gray4 font-semibold">
        <ul className="flex items-center gap-5 p-5 ">
          <li className="text-gray6 duration-500 ease-in-out hover:text-white">
            <Link to="/">Home</Link>
          </li>
          <li className="text-gray6 duration-500 ease-in-out hover:text-white">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};
