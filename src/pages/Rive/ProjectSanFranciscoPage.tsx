import { ProjectPage } from "../ProjectPage";
import SanFrancisco from "@rive/SanFrancisco";

export const ProjectSanFranciscoPage = () => {
  return (
    <ProjectPage
      title="San Francisco"
      instructions="A little animated scene of SF"
    >
      <SanFrancisco fit="Contain"></SanFrancisco>
    </ProjectPage>
  );
};
