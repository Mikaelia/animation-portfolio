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
          On the SVG itself, the I needed to convert the clip path using{" "}
          <a
            className="underline"
            href={"https://yoksel.github.io/relative-clip-path/"}
            target="_blank"
          >
            an online tool{" "}
          </a>
          so that the value would be relative to the size of the element being
          clipped.
        </p>
        <p>
          For this, <b>clipPathUnits="objectBoundingBox"</b> is used. Now, path
          coordinates represent a fraction of the bounding box dimensions. For
          example, M0,0 means the top-left corner of the bounding box, and
          H0.013 means a horizontal line to 1.3% of the width of the bounding
          box. This relative coordinate system ensures that the clipping path
          scales with the size of the element it is applied to.
        </p>
        <p>
          Finally, positioning the blurred element inside of the clipped
          container allows you to create the appearance of a glow that shines
          through the letters.
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
