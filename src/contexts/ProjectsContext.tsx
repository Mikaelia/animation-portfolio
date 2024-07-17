import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the type for the context state
interface ProjectVisibilityContextType {
  visibleProjects: number;
  setVisibleProjects: (count: number) => void;
}

// Create a context with a default value
const ProjectVisibilityContext = createContext<
  ProjectVisibilityContextType | undefined
>(undefined);

// Define the provider component
interface ProjectVisibilityProviderProps {
  children: ReactNode;
}

export const ProjectVisibilityProvider: React.FC<
  ProjectVisibilityProviderProps
> = ({ children }) => {
  const [visibleProjects, setVisibleProjects] = useState<number>(12); // Initial value can be changed

  return (
    <ProjectVisibilityContext.Provider
      value={{ visibleProjects, setVisibleProjects }}
    >
      {children}
    </ProjectVisibilityContext.Provider>
  );
};

// Custom hook for using the context
export const useProjectVisibility = () => {
  const context = useContext(ProjectVisibilityContext);
  if (!context) {
    throw new Error(
      "useProjectVisibility must be used within a ProjectVisibilityProvider",
    );
  }
  return context;
};
