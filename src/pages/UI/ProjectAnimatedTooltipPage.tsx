import { ProjectPage } from "../ProjectPage";
import { CodepenWrapper } from "@components/CodepenWrapper.tsx";

export const ProjectAnimatedTooltipPage = () => {
  const instructions = () => (
    <>
      I tried to reproduce an animated tooltip that I found{" "}
      <a href="https://madeinhaus.com/?ref=muzli2024&utm_source=extension&utm_medium=click&utm_campaign=muzli">
        here
      </a>
      . The tooltip will animate on mousemove and unscramble letters that match
      the shape of whatever content you provide the element. In production,
      additional work would have to be done to make this accessible.
    </>
  );

  return (
    <ProjectPage title="Animated Tooltip" instructions={instructions()}>
      <CodepenWrapper title="Animated Tooltip" id="BaErdOZ" />
    </ProjectPage>
  );
};
