import { ProjectPage } from "../ProjectPage";
import ExploreButton from "@rive/ExploreButton.tsx";

export const ProjectExploreButtonPage = () => {
  return (
    <ProjectPage
      title="Explore Button"
      instructions="Explore button built and animated with Rive."
    >
      <div className="flex h-full w-full items-center justify-center">
        <ExploreButton></ExploreButton>
      </div>
    </ProjectPage>
  );
};
