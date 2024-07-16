import { ProjectPage } from "../ProjectPage";
import { CodepenWrapper } from "@components/CodepenWrapper.tsx";

export const ProjectSwordPage = () => {
  const text = () => (
    <>
      <p>A sword built with CSS.</p>
      <p>
        Technique primarily involves the use of absolutely positioned pseudo
        elements to reduce the amount of HTML needed, in addition to CSS borders
        and transform properties to achieve the correct angle and orientation of
        the various elements.
      </p>
    </>
  );
  return (
    <ProjectPage title="CSS Sword" instructions={text()}>
      <CodepenWrapper title="CSS Sword" id="dyGPVGX" />
    </ProjectPage>
  );
};
