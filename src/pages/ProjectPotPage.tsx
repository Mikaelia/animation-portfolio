import Pot from "@rive/Pot.tsx";
import {ProjectPage} from "./ProjectPage"

export const PotPage = () => {
  return (
    <ProjectPage title="Bubbling Pot" instructions="Try to turn the stove on.">
      <Pot></Pot>
    </ProjectPage>
  );
};
