import { ProjectPage } from "../ProjectPage";
import { CodepenWrapper } from "@components/CodepenWrapper.tsx";

export const ProjectBallPage = () => {
  const info = () => (
    <>
      <p>A ball built with CSS</p>
      <p>
        Box shadow insets are used for the various gradients, and pseudo
        elements for the individual reflections.
      </p>
    </>
  );
  return (
    <ProjectPage title="CSS Green Ball" instructions={info()}>
      <CodepenWrapper title="CSS Green Ball" id="XWXdLMG" />
    </ProjectPage>
  );
};
