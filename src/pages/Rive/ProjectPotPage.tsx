import Pot from "@rive/Pot.tsx";
import { ProjectPage } from "../ProjectPage";

export const PotPage = () => {
  return (
    <ProjectPage
      title="Bubbling Pot"
      instructions="My very first swing at Rive animation. Hit the dial to turn the stove on."
    >
      <Pot></Pot>
    </ProjectPage>
  );
};
