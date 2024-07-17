import { Filters } from "@components/Filters.tsx";
import { ProjectList } from "@components/ProjectList.tsx";
import { useRef } from "react";
import { BackgroundSVG } from "@components/BackgroundSVG.tsx";
import { ProjectVisibilityProvider } from "@/contexts/ProjectsContext.tsx";

export const ProjectSection = () => {
  // const [visibleProjects, setVisibleProjects] = useState("All");
  const projBgRef = useRef<SVGSVGElement>(null);

  return (
    <div className="projects-container relative z-[-2] mt-[-20rem] flex w-screen flex-col items-center  justify-center bg-black pb-[30rem] pt-[30rem]">
      <div className="container z-10 mt-14 flex flex-col items-center">
        <div className="mb-14 flex w-full max-w-[2000px] flex-col justify-between md:flex-row">
          <div className="text flex flex-col items-center justify-center md:mx-6">
            <h2
              id="projects"
              className="mb-12 self-center font-display text-5xl font-normal md:mb-4 md:self-start"
            >
              PROJECTS
            </h2>
            <p>A collection of cool effects, animations, and mini-projects.</p>
          </div>
          <Filters
            className="ml-auto mr-6 hidden max-w-[24.25rem] md:block"
            callback={(val: string) => val}
          ></Filters>
        </div>
        <ProjectVisibilityProvider>
          <ProjectList projBgRef={projBgRef}></ProjectList>
        </ProjectVisibilityProvider>
      </div>
      <BackgroundSVG
        className="clip-image project-svg fixed left-0 top-0  z-[-1] min-w-[2000px] max-w-[2000px]"
        ref={projBgRef}
      />
    </div>
  );
};
