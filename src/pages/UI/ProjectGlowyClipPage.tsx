import { ProjectPage } from "../ProjectPage";
import { GHPageWrapper } from "@components/GHPageWrapper.tsx";

export const ProjectGlowyClipPage = () => {
  const instructions = () => {
    return (
      <>
        <p>
          An effect to create the reflective glow of an element on text. Built
          with HTML, CSS and Figma.
        </p>
        <p>
          I used Figma to make a blurred copy of a the astronaut image in
          addition to an exportable text SVG. A clip path is made on a container
          element using the SVG.
        </p>

        <p>
          Positioning the blurred element inside of the clipped container allows
          you to create the appearance of a glow that shines through the
          letters.
        </p>
        <p>
          Check out the code{" "}
          <a
            className="underline"
            href={"https://github.com/Mikaelia/glow-text-clip-path"}
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
    <ProjectPage title="Glowy Text Clip Path" instructions={instructions()}>
      <GHPageWrapper
        src={"https://mikaelia.github.io/glow-text-clip-path/"}
      ></GHPageWrapper>
    </ProjectPage>
  );
};
