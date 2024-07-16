import { ProjectPage } from "../ProjectPage";
import { CodepenWrapper } from "@components/CodepenWrapper.tsx";

export const ProjectMirroredPage = () => {
  const instructions = () => (
    <>
      <p>
        Inpsired by{" "}
        <a href="https://www.sixsocks.studio/en?utm_source=extension&utm_medium=click&utm_campaign=muzli">
          sixsocks
        </a>{" "}
        , this effect will mirror page content in the header component and
        translate it on scroll, giving the header the appearance of a mirror.
      </p>
      <p>
        The trick works by creating a duplication of the page content in
        javascript and appending it to the header element. In CSS, the content
        is then flipped upside down.
      </p>
      <p>
        For the scroll effect, I created a scroll event listener, which captures
        <b> window.pageYOffset</b>.
      </p>
      <p>
        <b>window.pageYOffset</b> is the number of pixels the document has been
        scrolled vertically. Setting the <b>translateY</b> of the duped content
        to scrollTop will move the content vertically by the amount equal to the
        current scroll position.
      </p>
      <p>
        {" "}
        Applying <b>overflow:hidden</b> to the header ensures that the content
        is contained to the header.
      </p>
    </>
  );

  return (
    <ProjectPage title="Header Mirror" instructions={instructions()}>
      <CodepenWrapper title="Mirrored Header Effect" id="WNWMaMW" />
    </ProjectPage>
  );
};
