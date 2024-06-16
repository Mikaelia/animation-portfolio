import { useRef } from "react";
import Plane from "@rive/Plane";
import "../assets/styles/custom.css";
import { Intro } from "@components/Intro.tsx";
import { useScroll, animated, useSpring } from "@react-spring/web";
import { AnimatedSocials } from "@components/AnimatedSocials.tsx";
import { WorkCard } from "@components/WorkCard.tsx";
import { AngleArrowIcon } from "@components/AngleArrowIcon.tsx";

export const WelcomeSectionXL = () => {
  const plane = useRef<HTMLDivElement>(null!);
  const text = useRef<HTMLDivElement>(null);
  const [socialStyles, socialApi] = useSpring(() => ({
    transform: "translateY(-100vh)",
  }));
  const [textStyles, textApi] = useSpring(() => ({
    opacity: "0",
  }));

  const bgRef = useRef<SVGSVGElement>(null);

  const handleScroll = ({
    value: { scrollYProgress },
  }: {
    value: { scrollYProgress: number };
  }) => {
    if (!text.current || !plane.current) return;

    const handlePlaneTransformation = () => {
      if (scrollYProgress < 0.05) {
        plane.current.style.transform = "translateX(100vw)";
        text.current!.style.transform = "translateX(100vw)";
      } else {
        const percent = 100 - ((scrollYProgress - 0.05) / 0.2) * 100;
        plane.current.style.transform = `translateX(${percent}vw)`;
      }
    };

    const handleTextTransformation = () => {
      if (scrollYProgress > 0.2 && scrollYProgress < 0.5) {
        const textPercent = 100 - ((scrollYProgress - 0.2) / 0.18) * 100;
        if (textPercent > 0) {
          socialApi.start({ transform: "translateY(-100vh)" });
        }
        if (textPercent > -60) {
          text.current!.style.transform = `translateX(${textPercent}vw)`;
          textApi.start({ opacity: "1" });
        } else {
          text.current!.style.transform = `translateX(-60vw)`;
          socialApi.start({ transform: "translateY(0vh)" });
        }
        // } else {
        //   const textPercent = ((scrollYProgress - 0.5) / 0.17) * 100;
        //   text.current!.style.transform = `translateX(-25vw) translateY(${-textPercent}vh)`;
        // }
      }
    };

    handlePlaneTransformation();
    handleTextTransformation();
  };

  useScroll({
    onChange: handleScroll,
    default: {
      immediate: true,
    },
  });

  return (
    <>
      <div className="plane-section xl:justify-space-between  relative z-0 flex h-[700vh] w-full flex-col items-center justify-center pl-20 pr-20 lg:mt-16 xl:mt-20 xl:flex-row">
        <animated.div
          style={socialStyles}
          className="fixed right-[-230px] top-0"
        >
          <AnimatedSocials></AnimatedSocials>
        </animated.div>
        <animated.div
          ref={plane}
          className="plane xl:w-9rem sm:display-block display-none fixed top-20 mt-[10rem] h-[20rem] w-[100vw] max-w-3xl md:h-[20rem] md:w-[45vw] lg:mt-0 xl:mt-[5rem]"
        >
          <Plane />
        </animated.div>

        <animated.div
          ref={text}
          style={textStyles}
          className="welcome-text xl:items-left fixed top-0 ml-[100vw] flex h-screen w-screen items-center text-center xl:text-left"
        >
          <div className="background relative h-full w-full ">
            <svg
              width="405"
              height="1068"
              viewBox="0 0 405 1068"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="M8.55005 1067.18C39.87 1033.18 78.66 979.97 88.21 909.72C104 793.74 23.56 752.42 4.00005 600.98C-11 484.76 19.92 382.27 41.54 310.68C61.8 243.58 97.23 174.1 115.71 53.55C119.119 31.294 121.764 8.92755 123.64 -13.5099H403.28L403.18 1067.18"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_19_2">
                  <rect
                    width="1067.18"
                    height="404.09"
                    fill="white"
                    transform="matrix(0 -1 1 0 0 1067.18)"
                  />
                </clipPath>
              </defs>
            </svg>
            <div className="absolute left-[10rem] top-0 h-screen max-h-[1067px] w-screen bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="100%"
                width="110%"
                viewBox="0 0 1600 800"
                preserveAspectRatio="none"
                ref={bgRef}
                className="clip-image min-w-[2000px] max-w-[2000px]"
              >
                <rect
                  style={{ zIndex: "-2" }}
                  fill="#190059"
                  width="1600"
                  height="800"
                />
                <g>
                  <path
                    fill="#4d1553"
                    d="M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z"
                  />
                  <path
                    fill="#712e4b"
                    d="M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2c116.8 24 231.7 59 347.6 92.2H1600V0z"
                  />
                  <path
                    fill="#934842"
                    d="M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z"
                  />
                  <path
                    fill="#b36234"
                    d="M0 0v429.4c55.6-18.4 113.5-27.3 171.4-27.7c102.8-0.8 203.2 22.7 299.3 54.5c3 1 5.9 2 8.9 3c183.6 62 365.7 146.1 562.4 192.1c186.7 43.7 376.3 34.4 557.9-12.6V0H0z"
                  />
                  <path
                    fill="#d47e1c"
                    d="M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z"
                  />
                  <path
                    fill="#de962c"
                    d="M1600 0H0v136.3c62.3-20.9 127.7-27.5 192.2-19.2c93.6 12.1 180.5 47.7 263.3 89.6c2.6 1.3 5.1 2.6 7.7 3.9c158.4 81.1 319.7 170.9 500.3 223.2c210.5 61 430.8 49 636.6-16.6V0z"
                  />
                  <path
                    fill="#e8af3c"
                    d="M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-5.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z"
                  />
                  <path
                    fill="#f0c74b"
                    d="M1600 0H498c118.1 85.8 243.5 164.5 386.8 216.2c191.8 69.2 400 74.7 595 21.1c40.8-11.2 81.1-25.2 120.3-41.7V0z"
                  />
                  <path
                    fill="#f8df5b"
                    d="M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z"
                  />
                  <path
                    fill="#fff86b"
                    d="M1315.3 72.4c75.3-12.6 148.9-37.1 216.8-72.4h-723C966.8 71 1144.7 101 1315.3 72.4z"
                  />
                </g>
              </svg>
              <div className="relative z-10 flex h-full">
                <Intro></Intro>

                <div className="work-section m-8 mt-3 flex flex-col justify-start ">
                  <WorkCard
                    bgRef={bgRef}
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
                    bgRef={bgRef}
                    date="DEC 2020 - JAN 2021"
                    title="Senior Technical Writer • Zendesk"
                    details="Made key documentation contributions across Zendesk’s Garden design system component set."
                    skills={["Typescript", "React", "HTML & CSS", "Storybook"]}
                  ></WorkCard>
                  <WorkCard
                    bgRef={bgRef}
                    date="MAR 2019 - APR 2020"
                    title="Software Engineer • Zume"
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

                  <button className="mx-auto mt-auto flex align-middle font-bold text-black">
                    <span className="text-nowrap">Full Resume</span>
                    <AngleArrowIcon className={"h-6 pb-[3px]"} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </animated.div>
      </div>
    </>
  );
};
