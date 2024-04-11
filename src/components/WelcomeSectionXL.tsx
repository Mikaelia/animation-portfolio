import { useRef } from "react";
import Plane from "@rive/Plane";
import "../assets/styles/custom.css";
import { Intro } from "@components/Intro.tsx";
import { useScroll, animated, useSpring } from "@react-spring/web";
import { AnimatedSocials } from "@components/AnimatedSocials.tsx";

export const WelcomeSectionXL = () => {
  const plane = useRef<HTMLDivElement>(null!);
  const text = useRef<HTMLDivElement>(null);
  const [socialStyles, socialApi] = useSpring(() => ({
    transform: "translateY(-100vh)",
  }));
  const [textStyles, textApi] = useSpring(() => ({
    opacity: "0",
  }));

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
        if (textPercent > -25) {
          text.current!.style.transform = `translateX(${textPercent}vw)`;
          textApi.start({ opacity: "1" });
        } else {
          text.current!.style.transform = `translateX(-25vw)`;
          socialApi.start({ transform: "translateY(0vh)" });
        }
      } else {
        const textPercent = ((scrollYProgress - 0.5) / 0.17) * 100;
        text.current!.style.transform = `translateX(-25vw) translateY(${-textPercent}vh)`;
      }
    };

    handlePlaneTransformation();
    handleTextTransformation();
  };

  useScroll({ onChange: handleScroll });

  return (
    <div className="plane-section xl:justify-space-between  relative z-0 flex h-[700vh] w-full flex-col items-center justify-center pl-20 pr-20 lg:mt-16 xl:mt-20 xl:flex-row">
      <animated.div style={socialStyles} className="fixed right-[-230px] top-0">
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
        className="xl:items-left fixed top-10 flex max-w-5xl flex-col items-center text-center lg:w-[45vw] xl:p-8 xl:text-left xl:text-left"
      >
        <Intro></Intro>
      </animated.div>
    </div>
  );
};
