import { Filters } from "@components/Filters.tsx";
import { ProjectList } from "@components/ProjectList.tsx";
import { useRef, useState } from "react";
import { BackgroundSVG } from "@components/BackgroundSVG.tsx";

export const ProjectSection = () => {
  const [visibleProjects, setVisibleProjects] = useState("All");
  const projBgRef = useRef<SVGSVGElement>(null);

  return (
    <div className="projects-container relative z-[-2] mt-[-20rem] flex w-screen flex-col items-center  justify-center bg-black pb-[30rem] pt-[30rem]">
      <div className="flex w-full max-w-[2000px] flex-col justify-between md:flex-row">
        <div className="text flex flex-col items-center justify-center md:ml-12 md:items-start">
          <h2 id="projects" className="mb-4 font-display text-5xl font-normal">
            PROJECTS
          </h2>
          <p>A collection of cool effects, animations, and mini-projects.</p>
        </div>
        <Filters
          className="hidden md:block"
          callback={(val: string) => setVisibleProjects(val)}
        ></Filters>
      </div>
      <div className="container z-10 mt-36 flex flex-col items-center">
        <ProjectList
          visibleProjects={visibleProjects}
          projBgRef={projBgRef}
        ></ProjectList>
      </div>
      <BackgroundSVG
        className="clip-image project-svg fixed left-0 top-0  z-[-1] min-w-[2000px] max-w-[2000px]"
        ref={projBgRef}
      />
    </div>
  );
};
