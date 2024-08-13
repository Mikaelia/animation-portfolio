import { Link } from "react-router-dom";

import HeaderWave from "@components/HeaderWave.tsx";
import { Intro } from "@components/Intro.tsx";
import { WorkCard } from "@components/WorkCard.tsx";
import { AngleArrowIcon } from "@components/AngleArrowIcon.tsx";
import { BackgroundSVG } from "@components/BackgroundSVG.tsx";
import { useRef } from "react";

export const AboutSection = () => {
  const bgRef = useRef<SVGSVGElement>(null);

  return (
    <div className="about-section z-1 flex w-screen flex-col items-center ">
      <HeaderWave
        className="about-top-wave z-[-1] mb-[-30rem] hidden w-[2000px] md:block"
        background="white"
      />
      <div className="relative w-full max-w-[2000px] bg-white p-8 ">
        <div className="about-text-container relative z-10 flex h-full flex-col items-center justify-between pt-20 md:px-12 lg:flex-row">
          <div className="flex flex-col self-start">
            <Intro></Intro>
          </div>
          <div className="about-work-section flex h-full max-w-[30rem] flex-col lg:ml-8 lg:justify-start lg:self-start">
            <WorkCard
              backgroundRef={bgRef}
              url="https://www.salesforce.com"
              date="JAN 2021 - JAN 2024"
              title="Software Engineer • Salesforce"
              details="Built data-connected, flexible, and accessible components for Trailhead, marketing, and core platform UI libraries."
              skills={[
                "Javascript",
                "Typescript",
                "React",
                "Web Components",
                "HTML & CSS",
                "Storybook",
              ]}
            ></WorkCard>
            <WorkCard
              backgroundRef={bgRef}
              url="https://garden.zendesk.com/"
              date="DEC 2020 - JAN 2021"
              title="Senior Technical Writer • Zendesk"
              details="Made key documentation contributions across Zendesk’s Garden design system component set."
              skills={["Typescript", "React", "HTML & CSS", "Storybook"]}
            ></WorkCard>
            <WorkCard
              backgroundRef={bgRef}
              date="MAR 2019 - APR 2020"
              title="Software Engineer • Zume Inc."
              details="Built Zume’s first component library (ZCL) from the ground up using Vue.js and Typescript, resulting in a
        collection of 30+ components."
              skills={[
                "Javascript",
                "Typescript",
                "Vue",
                "HTML & CSS",
                "Storybook",
              ]}
            ></WorkCard>
            <Link
              to="/resume"
              target="_blank"
              className="resume-button mr-auto mt-12 flex align-middle font-bold text-black lg:mt-8"
            >
              <span className="text-nowrap font-display text-sm font-bold">
                FULL RESUME
              </span>
              <AngleArrowIcon className={"arrow-icon ml-1 mt-[2px] h-4"} />
            </Link>
          </div>
        </div>
        <BackgroundSVG
          className="about-work-background clip-image min-w-[2000px] max-w-[2000px]"
          ref={bgRef}
        />
      </div>
      <HeaderWave
        className="about-bottom-wave relative z-[-1] mt-[-30rem]  w-[2000px] rotate-[180deg]"
        background="white"
      />
    </div>
  );
};
