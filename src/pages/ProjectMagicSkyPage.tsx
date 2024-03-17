import { ProjectPage } from "./ProjectPage";
import video from "../assets/videos/magic-sky.mp4";

export const ProjectMagicSkyPage = () => {
  return (
    <ProjectPage
      title="Magic Sky"
      instructions="Animation made for Salesforce's Trailhead profile page. Made with GSAP, JS and CSS. Sky changes color depending on the time of day, and features an easter egg animation when clicked three times "
    >
      <video className="rounded-md" width="100%" controls>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </ProjectPage>
  );
};
