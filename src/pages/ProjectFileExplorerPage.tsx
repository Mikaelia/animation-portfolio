import { ProjectPage } from "./ProjectPage";
import { GHPageWrapper } from "@components/GHPageWrapper.tsx";

export const ProjectFileExplorerPage = () => {
  const instructions = () => {
    return (
      <>
        <p>
          A basic file explorer made with React. Demonstrates converting
          non-ideal data to a format compatible with dynamic folder creation.
        </p>
        <p>
          This was a speed project -- I just wanted to take an un-styled JS
          explorer that I had created for a past interview, and make it look
          reasonable in as little time as possible.
        </p>
        <p>
          Check out the code{" "}
          <a
            className="underline"
            href={"https://github.com/Mikaelia/file-explorer/tree/main"}
            target="_blank"
          >
            here
          </a>
          !
        </p>
      </>
    );
  };
  return (
    <ProjectPage
      title="Quick Project: React File Explorer"
      instructions={instructions()}
    >
      <GHPageWrapper
        src={"https://mikaelia.github.io/file-explorer/"}
      ></GHPageWrapper>
    </ProjectPage>
  );
};
