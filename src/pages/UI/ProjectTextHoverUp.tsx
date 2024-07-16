import { ProjectPage } from "../ProjectPage";
import { CodepenWrapper } from "@components/CodepenWrapper.tsx";

export const ProjectTextHoverUp = () => {
  const info = () => {
    return (
      <>
        <p>
          I've been seeing this neat hover animation around lately, and wanted
          to break it down.
        </p>
        <p>
          How it works is that you have two versions of your text. One is the
          default visible version, the other is translated out of view.
        </p>
        <p>
          On hover, the hidden text transitions up into view, while the default
          text transitions out.
        </p>
        <p>
          An offset to each characters is applied with Javascript. By iterating
          through the characters, you can assign a transition delay based on the
          character index. This effectively creates a wave effect.
        </p>
        <p>
          I can see this logic being extracted to a custom component so that the
          word duplications and transitions are handled for you automatically,
          and you would only need to pass in the text value.
        </p>
      </>
    );
  };
  return (
    <ProjectPage title="Text Up Hover" instructions={info()}>
      <CodepenWrapper title="Text hover up" id="VwNzGVB" />
    </ProjectPage>
  );
};
