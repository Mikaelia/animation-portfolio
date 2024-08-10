import { ReactNode } from "react";
import { Link } from "react-router-dom";
import Card from "@/components/Cards/Card";

export const AnimationCard: React.FC<{
  children?: ReactNode;
  name: string;
  title: string;
  description: string;
  src?: string;
  js?: boolean;
}> = ({ children, name, title, description, src, js }) => (
  <Card>
    <Link to={`animation/${js ? "js/" : ""}${name}`}>
      <div className="child-container w-100 mb-6 h-52 overflow-hidden rounded-xl bg-[white] bg-opacity-30 sm:h-80 xl:h-80">
        {src ? (
          <div
            className="h-full bg-cover"
            style={{
              backgroundImage: `url(${src})`,
            }}
          ></div>
        ) : (
          children
        )}
      </div>
      <h4 className="mb-2 font-bold text-white text-opacity-80 duration-500 ease-in-out group-hover:text-opacity-100">
        {title}
      </h4>
      <p className="text-gray1 text-opacity-65 duration-500 group-hover:text-opacity-100">
        {description}
      </p>
      {js ? (
        <div className="pill absolute right-0 top-3 rounded-bl-xl rounded-tl-xl border border-r-0 border-white bg-black p-3 duration-500 group-hover:border-black group-hover:bg-white group-hover:text-black">
          JS Animation
        </div>
      ) : (
        <div className="pill absolute right-0 top-3 rounded-bl-xl rounded-tl-xl border border-r-0 border-white bg-black p-3 duration-500 group-hover:border-black group-hover:bg-white group-hover:text-black">
          Rive Animation
        </div>
      )}
    </Link>
  </Card>
);
