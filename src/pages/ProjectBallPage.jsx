import ProjectPage from "./ProjectPage";
import {CodepenWrapper} from "../components/CodepenWrapper"

export const ProjectBallPage = () => {
  return (
    <ProjectPage title="CSS Green Ball" instructions="Look at the cool ball">
      <CodepenWrapper title="CSS Sword" src="https://codepen.io/Mikiaela/embed/XWXdLMG?default-tab=html%2Cresult" id="XWXdLMG"/>
    </ProjectPage>
  );
};