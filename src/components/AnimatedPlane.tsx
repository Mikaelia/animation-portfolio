import { useRef } from "react";
import Plane from "@rive/Plane.tsx";
import { animated, useScroll } from "@react-spring/web";
import { calculateVHPercentage } from "@/utils/viewportUtils.ts";

export const AnimatedPlane = () => {
  const plane = useRef<HTMLDivElement>(null);

  const handleScroll = ({
    value: { scrollYProgress },
  }: {
    value: { scrollYProgress: number };
  }) => {
    const viewportHeight = Math.round(window.innerHeight);
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (!plane.current) return;

    plane.current.style.transform = `translateX(100vw)`;
    plane.current.style.opacity = "0";

    const vhPercent = calculateVHPercentage();

    const handlePlaneTransformation = () => {
      if (!plane.current) return;

      const headerHeight = viewportHeight + 229.3;

      if (scrollPosition >= headerHeight) {
        plane.current.style.opacity = "1";
        // subtract the distance already traveled to create new zero.
        const percentOfContainerScrolled =
          (scrollPosition - headerHeight) / (3 * viewportHeight);
        const totalTranslateValueNeeded = 200;
        const translationPerCurrentPercentScrolled =
          percentOfContainerScrolled * totalTranslateValueNeeded;

        // want to get from translate 100 to translate 0, 3vh should be zero
        plane.current.style.transform = `translateX(${100 - translationPerCurrentPercentScrolled}vw)`;
      }

      if (scrollYProgress > 4.5 * vhPercent) {
        plane.current.style.opacity = "0";
      }
    };

    handlePlaneTransformation();
  };

  useScroll({
    onChange: handleScroll,
    default: {
      immediate: true,
    },
  });

  return (
    <>
      <animated.div
        ref={plane}
        className="plane-section-animated fixed left-0 top-[20%] hidden h-[20rem] w-[50rem] opacity-0 md:block"
      >
        <Plane />
      </animated.div>
    </>
  );
};
