import React, { ReactNode } from "react";

export const ProjectCard: React.FC<{
  children: ReactNode;
  number: string;
  title: string;
  description: string;
  theme: string;
  action: () => void;
}> = ({ children, number = "01", title, description, action, theme }) => {
  return (
    <div className="rive-card rounded-sm bg-purple p-12">
      {/* // want to eventually expand on hover */}
      <div className="number text-white">{number}</div>
      <h4 className="theme uppercase text-llpurple">{theme}</h4>
      <div className="child-container h-96 w-96 overflow-hidden border-4 bg-lpurple">
        {children}
      </div>
      <h3 className="title text-white">{title}</h3>
      <p className="description uppercase text-orange">{description}</p>
      <button onClick={action}>Click</button>
    </div>
  );
};
