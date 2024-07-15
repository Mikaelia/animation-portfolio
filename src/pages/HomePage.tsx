import RiveFooter from "@rive/FooterWave.tsx";

import { HeaderSection } from "@components/HeaderSection.tsx";
import Background from "@/components/Background";
import { AnchorLinks } from "@components/AnchorLinks.tsx";
import { AnimatedPlane } from "@components/AnimatedPlane.tsx";
import { AboutSection } from "@components/AboutSection.tsx";
import { ProjectSection } from "@components/ProjectSection.tsx";
import { JournalSection } from "@components/JournalSection.tsx";

import { useLenis } from "@/hooks/useLenis.tsx";

import "../assets/styles/custom.css";

export const HomePage = () => {
  const handleScrollTo = useLenis();

  return (
    <div className="homepage relative flex flex-col items-center overflow-x-hidden">
      <AnchorLinks handleScrollTo={handleScrollTo} />
      <HeaderSection handleScrollTo={handleScrollTo} />
      <div className="xl:justify-space-between relative z-0 flex w-full flex-col items-center justify-center px-20">
        <div className="plane-section relative flex h-screen w-screen items-center bg-white  md:h-[250vh] md:bg-transparent">
          <AnimatedPlane />
        </div>
        <AboutSection />
        <ProjectSection />
      </div>
      <JournalSection />
      <Background />
      <div className="z-[100] overflow-x-hidden bg-white">
        <RiveFooter />
      </div>
    </div>
  );
};
