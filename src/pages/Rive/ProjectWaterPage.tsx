import Liquid from "@rive/Liquid.jsx";
import { ProjectPage } from "../ProjectPage";

export const ProjectWaterPage = () => {
  return (
    <ProjectPage title="Water" instructions="Simple water animation">
      <Liquid alignment="CenterCenter" fit="Cover"></Liquid>
    </ProjectPage>
  );
};
