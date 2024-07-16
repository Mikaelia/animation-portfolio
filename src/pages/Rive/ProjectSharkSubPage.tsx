import { ProjectPage } from "../ProjectPage";
import SharkSub from "@rive/SharkSub";

export const ProjectSharkSubPage = () => {
  const instructions = () => {
    return (
      <>
        <p>I had originally intended for this site to be undersea themed.</p>
        <p>On load, water was to animate in, filling the screen.</p>
        <p>
          Here was an idea that I had for what underwater social media links
          might have looked like.
        </p>
        <p>
          I created all assets and animations in Rive. With Javascript, you can
          capture the click events and navigate to the respective sites.
        </p>
        <p>
          I still think an undersea site would be fun to make. Maybe the
          submarine would follow you around..
        </p>
      </>
    );
  };
  return (
    <ProjectPage title="Undersea Socials" instructions={instructions()}>
      <SharkSub></SharkSub>
    </ProjectPage>
  );
};
