import { HeaderSection } from "@components/HeaderSection.tsx";
import { WelcomeSectionXL } from "@/components/WelcomeSectionXL.tsx";
import { WelcomeSection } from "@/components/WelcomeSection.tsx";
import Background from "@/components/Background";
import { ProjectList } from "@components/ProjectList.tsx";
import RiveFooter from "@rive/FooterWave.tsx";
import "../assets/styles/custom.css";
import useMediaQuery from "@/utils/useMediaBreakpoint.ts";
import BlogList from "@components/BlogList";

export const HomePage = () => {
  const xlQuery = useMediaQuery(
    "only screen and (min-width: 1280px) and (max-width: 2000px)",
  );

  return (
    <div className="homepage relative flex flex-col items-center overflow-x-hidden">
      <HeaderSection></HeaderSection>
      <WelcomeSectionXL></WelcomeSectionXL>
      <div className="blog-section mt-[-30rem] flex w-screen bg-white p-12 pt-[40rem]">
        <BlogList></BlogList>
      </div>

      {/*{xlQuery ? (*/}
      {/*  <WelcomeSectionXL></WelcomeSectionXL>*/}
      {/*) : (*/}
      {/*  <WelcomeSection></WelcomeSection>*/}
      {/*)}*/}
      <Background />
      {/*<div className="z-10 overflow-x-hidden">*/}
      {/*  <RiveFooter></RiveFooter>*/}
      {/*</div>*/}
    </div>
  );
};
