import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="font-poppins relative h-full">
      {/* <nav className="font-semibold absolute">
        <ul className="flex items-center gap-5 p-5 ">
          <li className="text-gray6 duration-500 ease-in-out hover:text-white">
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav> */}
      <Outlet />
    </div>
  );
};
