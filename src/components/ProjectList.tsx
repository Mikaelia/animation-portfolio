import { CssCard } from "@components/Cards/CssCard.tsx";
import { UICard } from "@components/Cards/UICard.tsx";
import { AnimationCard } from "@components/Cards/AnimationCard.tsx";
import Blackbird from "@rive/Blackbird.tsx";
import { useEffect, useRef } from "react";
import throttle from "lodash.throttle";

const MouseoverLogic = ({ bgRef, rectRefs }) => {
  useEffect(() => {
    //debounce

    const handleMouseEnter = (rect, overlay) => {
      const rectMeasurements = rect.getBoundingClientRect();
      const parentMeasurements = overlay.getBoundingClientRect();

      if (parentMeasurements) {
        const top = rectMeasurements.top - parentMeasurements.top;
        const left = rectMeasurements.left - parentMeasurements.left;
        const bottom = parentMeasurements.bottom - rectMeasurements.bottom;
        const right = parentMeasurements.right - rectMeasurements.right;

        overlay.style.clipPath = `inset(${top}px ${right}px ${bottom}px ${left}px round 24px)`;
      }
    };

    const handleMouseLeave = (overlay) => {
      overlay.style.clipPath = "inset(100%)";
    };
    rectRefs.forEach((rectRef) => {
      const rect = rectRef.current;
      const overlay = bgRef?.current;

      const throttledResetClipPath = throttle(() => {
        overlay.style.clipPath = "inset(100%)";
      }, 100);

      if (rect && overlay) {
        window.addEventListener("scroll", throttledResetClipPath);

        rect.addEventListener("mouseenter", () =>
          handleMouseEnter(rect, overlay),
        );
        rect.addEventListener("mouseleave", () => handleMouseLeave(overlay));

        // Cleanup event listeners on component unmount
        return () => {
          rect.removeEventListener("mouseenter", () =>
            handleMouseEnter(rect, overlay),
          );
          rect.removeEventListener("mouseleave", () =>
            handleMouseLeave(overlay),
          );
        };
      }
    });

    // Ensure cleanup for all event listeners
    return () => {
      rectRefs.forEach((rectRef) => {
        const rect = rectRef.current;
        const overlay = bgRef?.current;
        if (rect && overlay) {
          rect.removeEventListener("mouseenter", () =>
            handleMouseEnter(rect, overlay),
          );
          rect.removeEventListener("mouseleave", () =>
            handleMouseLeave(overlay),
          );
        }
      });
    };
  }, [bgRef, rectRefs]);

  return null; // Or render your component's content here
};

export default MouseoverLogic;

export const ProjectList = ({ projBgRef, visibleProjects }) => {
  const rectRefs = [
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
  ];
  return (
    <>
      <ul className="relative grid w-full max-w-7xl auto-rows-min grid-cols-projects grid-rows-projects justify-center gap-8 overflow-visible">
        <MouseoverLogic bgRef={projBgRef} rectRefs={rectRefs} />
        <li ref={rectRefs[0]}>
          <AnimationCard
            name="magic-sky"
            title="Magic Sky"
            description="Salesforce's Trailhead homepage hero animation project"
            src="./magic-sky.png"
            js
          ></AnimationCard>
        </li>
        <li ref={rectRefs[1]}>
          <CssCard
            name="css-sword"
            title="CSS Sword"
            description="A sword made using only HTML and CSS"
            src="./css-sword.png"
            art
          ></CssCard>
        </li>
        <li ref={rectRefs[2]}>
          <CssCard
            name="css-green-ball"
            title="CSS Green Ball"
            description="A ball made using only HTML and CSS"
            src="./css-green-ball.png"
            art
          ></CssCard>
        </li>
        <li ref={rectRefs[3]}>
          <CssCard
            name="css-toucan"
            title="CSS Toucan"
            description="A toucan made using only HTML and CSS"
            src="./css-toucan.png"
            art
          ></CssCard>
        </li>
        <li ref={rectRefs[4]}>
          <CssCard
            name="css-smiley"
            title="Smiley"
            description="A smiley made using only HTML and CSS"
            src="./smiley.png"
            art
          ></CssCard>
        </li>
        <li ref={rectRefs[5]}>
          <UICard
            name="file-explorer"
            title="File Explorer"
            src="./file-explorer.png"
            description="A simple react file explorer"
          ></UICard>
        </li>
        <li ref={rectRefs[6]}>
          <UICard
            name="header-mirror"
            title="Header Mirror"
            src="./mirrored.gif"
            description="Mirroring header effect"
          ></UICard>
        </li>
        <li ref={rectRefs[7]}>
          <UICard
            name="text-hover-up"
            title="Text hover animation"
            description="Fun text hover animation"
            src="./text-hover-up.gif"
          ></UICard>
        </li>
        <li ref={rectRefs[8]}>
          <UICard
            name="text-hover-flip"
            title="Text flip hover animation"
            description="Fun text hover animation"
            src="./text-hover-flip.gif"
          ></UICard>
        </li>
        <li ref={rectRefs[9]}>
          <UICard
            name="animated-tooltip"
            title="Animated tooltip"
            description="Animated tooltip that unscrambles words"
            src="./tooltip.gif"
          ></UICard>
        </li>
        <li ref={rectRefs[10]}>
          <UICard
            name="explore-button"
            title="Explore Button"
            description="Animated button with mouse interaction"
            src="./explore-button.gif"
          ></UICard>
        </li>
        <li ref={rectRefs[11]}>
          <AnimationCard
            name="blackbird"
            title="Blackbird"
            description="Birb time"
          >
            <Blackbird></Blackbird>
          </AnimationCard>
        </li>
        <li ref={rectRefs[12]}>
          <AnimationCard
            name="canvas-floating-boxes"
            title="Floating"
            description="Canvas interactive floating boxes animation"
            src="./floating-boxes.gif"
            js
          ></AnimationCard>
        </li>

        <li ref={rectRefs[13]}>
          <UICard
            name="gooey-nav"
            title="Gooey"
            description="Gooey nav with html filter"
            src="./gooey-nav.gif"
          ></UICard>
        </li>
        <li ref={rectRefs[14]}>
          <AnimationCard
            name="san-francisco"
            title="San Francisco"
            description="An animated scene of San Francisco"
            src="./san-francisco.png"
          ></AnimationCard>
        </li>
        <li ref={rectRefs[15]}>
          <AnimationCard
            name="undersea-socials"
            title="Undersea Socials"
            description="A discarded idea for underwater social links"
            src="./undersea-socials.png"
          ></AnimationCard>
        </li>
        <li ref={rectRefs[16]}>
          <AnimationCard
            name="liquid"
            title="Liquid"
            description="Simple liquid Rive animation"
            src="./liquid.gif"
          ></AnimationCard>
        </li>
        <li ref={rectRefs[17]}>
          <AnimationCard
            name="bubbling-pot"
            title="Bubbling Pot"
            description="Bubbling pot animation"
            src="./bubbling-pot.png"
          ></AnimationCard>
        </li>
      </ul>
    </>
  );
};
