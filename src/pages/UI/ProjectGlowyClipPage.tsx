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
          On the SVG itself, the I needed to convert the <b>clipPathUnits</b>{" "}
          property <b>'userSpaceOnUse' </b>
          to <b>'objectBoundingBox'</b> using{" "}
          <a
            className="underline"
            href={"https://yoksel.github.io/relative-clip-path/"}
            target="_blank"
          >
            this
          </a>{" "}
          online tool.
        </p>
        <p>
          When clipPathUnits is set to userSpaceOnUse, the coordinates within
          the &lt;clipPath&gt; element are relative to the entire SVG canvas.
          This means that the clipping path will not change its position or
          scale relative to the element it is applied to, even if the element
          moves or is resized.
        </p>
        <p>
          When clipPathUnits is set to objectBoundingBox, the coordinates within
          the &lt;clipPath&gt; element are relative to the bounding box of the
          element the clipping path is applied to. This means the coordinates
          are normalized between 0 and 1, representing the width and height of
          the element.
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
        <small>* Astro image from rawpixel.com</small>
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
