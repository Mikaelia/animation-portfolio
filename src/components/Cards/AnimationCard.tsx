import { ReactNode } from "react";
import { Link } from "react-router-dom";
import Card from "@/components/Cards/Card";

export const AnimationCard: React.FC<{
  children?: ReactNode;
  name: string;
  title: string;
  description: string;
  src?: string;
}> = ({ children, name, title, description, src }) => (
  <Card>
    <Link to={`animation/${name}`}>
      <div className="child-container w-100 mb-6 h-52 overflow-hidden rounded-xl opacity-100 sm:h-80 xl:h-80">
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
      <div className="pill rounded-tl-xl border-2 border-r-0 border-lpink rounded-bl-xl bg-pink p-3 absolute top-5 right-0">Animation</div>
    </Link>
  </Card>
);
