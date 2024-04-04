import { ProjectPage } from "../ProjectPage";
import video from "../../assets/videos/magic-sky.mp4";

export const ProjectMagicSkyPage = () => {
  const instructions = () => {
    return (
      <>
        <p className="mb-4">
          Animation made for Salesforce's Trailhead profile page. Made with
          GSAP, JS and CSS.
        </p>
        <p className="mb-4">
          Sky changes color and the sun changes position depending on the time
          of day. At night, a moon and stars emerge.
        </p>
        <p className="mb-4">
          This experience features an easter egg animation which appears when
          clicked three times. We shoot off into space to find an astro which
          you can bump around with your mouse.
        </p>
      </>
    );
  };
  return (
    <ProjectPage title="Magic Sky" instructions={instructions()}>
      <video className="rounded-md" width="100%" controls>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </ProjectPage>
  );
};
