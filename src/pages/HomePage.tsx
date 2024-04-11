import { useRef, useState } from "react";
import { Link, Element } from "react-scroll";
import Cat from "@rive/Cat";
import Plane from "@rive/Plane";
import Socials from "@/components/rive/Socials";
import Background from "@/components/Background";
import "../assets/styles/custom.css";
import RiveFooter from "@rive/FooterWave.tsx";
import HeaderWave from "@/components/HeaderWave";
import { ProjectList } from "@components/ProjectList.tsx";
import { Intro } from "@components/Intro.tsx";

import { useScroll, animated, useSpring } from "@react-spring/web";
import { AnimatedSocials } from "@components/AnimatedSocials.tsx";

export const HomePage = () => {
  const [catLoaded, setCatLoaded] = useState(false);
  const plane = useRef<HTMLDivElement>(null!);
  const text = useRef<HTMLDivElement>(null);

  const [socialStyles, socialApi] = useSpring(() => ({
    transform: "translateY(-100vh)",
  }));
  const [textStyles, textApi] = useSpring(() => ({
    opacity: "0",
  }));

  const {} = useScroll({
    onChange: ({ value: { scrollYProgress } }) => {
      if (!text.current || !plane.current) return;
      if (scrollYProgress < 0.05) {
        plane.current.style.transform = "translateX(100vw)";
        text.current.style.transform = "translateX(100vw)";
      } else {
        const percent = calculatePercentage(scrollYProgress);
        plane.current.style.transform = `translateX(${percent}vw)`;
      }
      if (scrollYProgress > 0.2 && scrollYProgress < 0.5) {
        const textPercent = 100 - ((scrollYProgress - 0.2) / 0.18) * 100;
        if (textPercent > 0) {
          socialApi.start({ transform: "translateY(-100vh)" });
        }
        if (textPercent > -25) {
          text.current.style.transform = `translateX(${textPercent}vw)`;
          textApi.start({ opacity: "1" });
        } else {
          text.current.style.transform = `translateX(-25vw)`;
          socialApi.start({ transform: "translateY(0vh)" });
        }
      } else {
        const textPercent = ((scrollYProgress - 0.5) / 0.17) * 100;
        text.current.style.transform = `translateX(-25vw) translateY(${-textPercent}vh)`;
        socialApi.start({ transform: "translateY(-100vh)" });
      }
    },
  });

  const calculatePercentage = (scrollProgress: number) => {
    return 100 - ((scrollProgress - 0.05) / 0.2) * 100;
  };
  return (
    <div className="homepage relative flex flex-col items-center overflow-x-hidden">
      <div
        className={` z-1 header flex h-screen w-full max-w-[2000px] items-center duration-1000 ${catLoaded ? " bg-gray3" : "bg-black"}`}
      >
        <div
          className={`rive-projects relative flex w-full flex-col items-center pb-20 pt-20 text-center duration-1000 ${catLoaded ? "text-white" : "text-black"}`}
        >
          <h1 className="mt-[-15rem] font-handwriting text-7xl sm:mt-[-10rem] sm:text-8xl lg:text-9xl">
            MIKAELA GURNEY
          </h1>
          <p className="mb-20 pt-6 font-handwriting md:text-xl lg:text-2xl">
            Let's do fun web stuff.
          </p>
          <div className="absolute left-[-1.75rem] flex h-[500px] w-full items-center overflow-hidden sm:bottom-[-18rem] xl:left-[-18rem] xl:top-[-16rem]">
            <div className="cat h-[500px] w-full xl:pr-[17rem] ">
              <Cat handleWakeUp={() => setCatLoaded(true)}></Cat>
            </div>
          </div>
        </div>
        {catLoaded && (
          <Link
            className="scroll-button md:hidden"
            style={{ zIndex: "1" }}
            to="section1"
            smooth="easeInOutCubic"
            duration={1500}
          >
            <svg
              className="scroll-svg h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              width="800"
              height="800"
              fill="none"
              viewBox="0 0 24 24"
              style={{ transform: "rotate(90deg)" }}
            >
              <path
                fill="white"
                d="M5.636 7.757 7.05 6.343 12.707 12 7.05 17.657l-1.414-1.414L9.878 12 5.636 7.757Z"
              />
              <path
                fill="white"
                d="m12.707 6.343-1.414 1.414L15.535 12l-4.242 4.243 1.414 1.414L18.364 12l-5.657-5.657Z"
              />
            </svg>
          </Link>
        )}
      </div>
      <div className="overflow-x-hidden">
        <HeaderWave background={catLoaded ? "#333333" : "#0F0F0F"}></HeaderWave>
      </div>
      <div className="plane-section xl:justify-space-between relative flex h-[700vh] w-full flex-col items-center justify-center pl-20 pr-20 lg:mt-16 xl:mt-20 xl:flex-row">
        <animated.div
          style={socialStyles}
          className="fixed right-[-200px] top-0"
        >
          <AnimatedSocials></AnimatedSocials>
        </animated.div>
        <animated.div
          ref={plane}
          className="plane xl:w-9rem sm:display-block display-none fixed top-20 mt-[10rem] h-[20rem] w-[100vw] max-w-3xl md:h-[20rem] md:w-[45vw] lg:mt-0 xl:mt-[5rem]"
        >
          {/*<Element name="section1"></Element>*/}
          <Plane />
        </animated.div>
        <animated.div
          ref={text}
          style={textStyles}
          className="xl:items-left fixed top-10 flex max-w-5xl flex-col items-center text-center lg:w-[45vw] xl:p-8 xl:text-left xl:text-left"
        >
          <Intro></Intro>
          {/*<Socials></Socials>*/}
        </animated.div>
      </div>

      <Background />
      <div className="mt-32 flex w-full justify-center p-12">
        <ProjectList></ProjectList>
      </div>
      <div className="overflow-x-hidden">
        <RiveFooter></RiveFooter>
      </div>
    </div>
  );
};
