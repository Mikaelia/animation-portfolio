import { ProjectPage } from "../ProjectPage";
import { CodepenWrapper } from "@components/CodepenWrapper.tsx";

export const ProjectToucanPage = () => {
  const info = () => (
    <>
      <p>A cool birb built with CSS</p>
      <p>
        Here, background-image linear-gradients are primarily used for creating
        the custom shapes, in addition to custom border radii.
      </p>
    </>
  );

  return (
    <ProjectPage title="CSS Toucan" instructions={info()}>
      <CodepenWrapper title="CSS Toucan" id="yLeJXNK" />
    </ProjectPage>
  );
};
