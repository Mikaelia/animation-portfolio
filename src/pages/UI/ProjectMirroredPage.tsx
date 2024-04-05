import { ProjectPage } from "../ProjectPage";
import { CodepenWrapper } from "@components/CodepenWrapper.tsx";

export const ProjectMirroredPage = () => {
  const instructions = () => (
    <>
      A cool effect that I found{" "}
      <a href="https://www.sixsocks.studio/en?utm_source=extension&utm_medium=click&utm_campaign=muzli">
        here
      </a>{" "}
      and replicated.
    </>
  );

  return (
    <ProjectPage title="Header Mirror" instructions={instructions()}>
      <CodepenWrapper title="Mirrored Header Effect" id="WNWMaMW" />
    </ProjectPage>
  );
};
