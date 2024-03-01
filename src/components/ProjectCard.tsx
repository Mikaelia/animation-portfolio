import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

const ProjectCard: React.FC<{
  children: ReactNode;
  name: string;
  title: string;
  description: string;
}> = ({ children, name, title, description }) => {
  return (
    <div className="rive-card group cursor-pointer rounded-3xl border border-gray2 border-opacity-65 border-opacity-65  bg-gray3 bg-opacity-65 p-6 duration-500 ease-in-out hover:border-opacity-100 hover:bg-opacity-100">
      <Link to={`projects/${name}`}>
        <div className="child-container w-100  mb-6 h-52 overflow-hidden rounded-xl opacity-100 sm:h-80 xl:h-80">
          {children}
        </div>
        <h4 className="mb-2 font-bold text-white text-opacity-80 duration-500 ease-in-out  group-hover:text-opacity-100">
          {title}
        </h4>
        <p className="text-gray1 text-opacity-65 duration-500 group-hover:text-opacity-100">
          {description}
        </p>
      </Link>
    </div>
  );
};

export default ProjectCard;
