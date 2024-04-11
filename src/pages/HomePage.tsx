import { HeaderSection } from "@components/HeaderSection.tsx";
import { WelcomeSectionXL } from "@/components/WelcomeSectionXL.tsx";
import { WelcomeSection } from "@/components/WelcomeSection.tsx";
import Background from "@/components/Background";
import { ProjectList } from "@components/ProjectList.tsx";
import RiveFooter from "@rive/FooterWave.tsx";
import "../assets/styles/custom.css";
import useMediaQuery from "@/utils/useMediaBreakpoint.ts";

export const HomePage = () => {
  const xlQuery = useMediaQuery(
    "only screen and (min-width: 1280px) and (max-width: 2000px)",
  );

  return (
    <div className="homepage relative flex flex-col items-center overflow-x-hidden">
      <HeaderSection></HeaderSection>
      {xlQuery ? (
        <WelcomeSectionXL></WelcomeSectionXL>
      ) : (
        <WelcomeSection></WelcomeSection>
      )}
      <Background />
      <div className="mt-32 flex w-full justify-center p-12">
        <ProjectList></ProjectList>
      </div>
      <div className="z-10 overflow-x-hidden">
        <RiveFooter></RiveFooter>
      </div>
    </div>
  );
};
