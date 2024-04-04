import { ProjectPage } from "../ProjectPage";
import { CodepenWrapper } from "@components/CodepenWrapper.tsx";

export const ProjectTextHoverFlip = () => {
  const instructions = () => (
    <>
      A fun text animation that I found on{" "}
      <a href="https://letude.group/?utm_source=extension&utm_medium=click&utm_campaign=muzli">
        Letude's
      </a>{" "}
      website and wanted to replicate.
    </>
  );

  return (
    <ProjectPage title="Text Flip Hover" instructions={instructions()}>
      <CodepenWrapper title="Text hover flip" id="MWRrZLd" />
    </ProjectPage>
  );
};
