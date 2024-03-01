import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const ProjectCard: React.FC<{
  children?: ReactNode;
  name: string;
  title: string;
  description: string;
  src?: string;
}> = ({ children, name, title, description, src }) => {
  return (
    <Card>
      {src ? (
        <Link to={`css/${name}`}>
          <div className="child-container w-100  mb-6 h-52 overflow-hidden rounded-xl opacity-100 sm:h-80 xl:h-80">
            <div
              className="h-full bg-cover"
              style={{
                backgroundImage: `url(${src})`,
              }}
            />
          </div>
          <h4 className="mb-2 font-bold text-white text-opacity-80 duration-500 ease-in-out  group-hover:text-opacity-100">
            {title}
          </h4>
          <div className="flex justify-between">
            <p className="text-gray1 text-opacity-65 duration-500 group-hover:text-opacity-100">
              {description}
            </p>
            <div className="pill bg-blue rounded-xl p-3">CSS</div>
          </div>
        </Link>
      ) : (
        <Link to={`animation/${name}`}>
          <div className="child-container w-100  mb-6 h-52 overflow-hidden rounded-xl opacity-100 sm:h-80 xl:h-80">
            {children}
          </div>
          <h4 className="mb-2 font-bold text-white text-opacity-80 duration-500 ease-in-out  group-hover:text-opacity-100">
            {title}
          </h4>
          <div className="flex justify-between">
            <p className="text-gray1 text-opacity-65 duration-500 group-hover:text-opacity-100">
              {description}
            </p>
            <div className="flex gap-2">
              <div className="pill bg-pink rounded-xl p-3">Animation</div>
              {/* <div className="pill bg-green rounded-xl p-3">Rive</div> */}
            </div>
          </div>
        </Link>
      )}
    </Card>
  );
};

export default ProjectCard;
