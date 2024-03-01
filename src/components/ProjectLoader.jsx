// src/Pages/ProjectPage.tsx
import React from "react";
import { useParams } from "react-router-dom";

export const ProjectLoader = () => {
  const { projectName } = useParams();

  // Dynamically import the project component
  const ProjectComponent = React.lazy(() => import(`./rive/Pot.jsx`));

  return (
    <div>
      <h2>{projectName} Project Page</h2>
      <React.Suspense fallback={<div>Loading...</div>}>
        <ProjectComponent />
      </React.Suspense>
    </div>
  );
};
