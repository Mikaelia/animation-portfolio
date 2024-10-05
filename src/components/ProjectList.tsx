import { CssCard } from "@components/Cards/CssCard.tsx";
import { UICard } from "@components/Cards/UICard.tsx";
import { AnimationCard } from "@components/Cards/AnimationCard.tsx";
import Blackbird from "@rive/Blackbird.tsx";
import { useContext, useEffect, useRef, useState } from "react";
import { LenisContext } from "@/contexts/LenisContext.tsx";
import { AngleArrowIcon } from "@components/AngleArrowIcon.tsx";

export const ProjectList = () => {
  const [targetElement, setTargetElement] = useState<HTMLLIElement | null>(
    null,
  );
  const [defaultVisible, setDefaultVisible] = useState(12);
  const [totalChildren, setTotalChildren] = useState(0);

  const borderRef: React.RefObject<HTMLDivElement> = useRef(null);
  const listRef: React.RefObject<HTMLUListElement> = useRef(null);
  const rectRefs: React.RefObject<HTMLLIElement>[] = [
    useRef<HTMLLIElement>(null),
    useRef<HTMLLIElement>(null),
    useRef<HTMLLIElement>(null),
    useRef<HTMLLIElement>(null),
    useRef<HTMLLIElement>(null),
    useRef<HTMLLIElement>(null),
    useRef<HTMLLIElement>(null),
    useRef<HTMLLIElement>(null),
    useRef<HTMLLIElement>(null),
    useRef<HTMLLIElement>(null),
    useRef<HTMLLIElement>(null),
    useRef<HTMLLIElement>(null),
    useRef<HTMLLIElement>(null),
    useRef<HTMLLIElement>(null),
    useRef<HTMLLIElement>(null),
    useRef<HTMLLIElement>(null),
    useRef<HTMLLIElement>(null),
    useRef<HTMLLIElement>(null),
    useRef<HTMLLIElement>(null),
  ];

  const { initializeLenis } = useContext(LenisContext);

  useEffect(() => {
    if (targetElement && borderRef.current && listRef.current) {
      const rect = (targetElement as HTMLElement).getBoundingClientRect();
      const containerRect = listRef.current.getBoundingClientRect();
      const offsetX = rect.left - containerRect.left;
      const offsetY = rect.top - containerRect.top;
      borderRef.current.style.opacity = ".1";
      borderRef.current.style.width = `${rect.width}px`;
      borderRef.current.style.height = `${rect.height}px`;
      borderRef.current.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    }
  }, [targetElement]);

  useEffect(() => {
    rectRefs.forEach((ref) => {
      if (ref.current) {
        ref.current.addEventListener("mouseover", () =>
          setTargetElement(ref.current),
        );
      }
    });
  }, [rectRefs]);

  useEffect(() => {
    const children = listRef.current?.children;
    if (!children) return;

    for (let i = 0; i < children.length; i++) {
      const child = children[i] as HTMLLIElement;
      if (child.tagName !== "DIV") {
        if (i <= defaultVisible) {
          child.style.display = "block";
          child.classList.add("fade-in");
        } else {
          child.style.display = "none";
        }
      }
    }
    initializeLenis();
  }, [initializeLenis, defaultVisible]);

  useEffect(() => {
    if (!listRef.current) return;
    setTotalChildren(listRef.current.children.length);
  }, [listRef]);

  const showMore = () => {
    setDefaultVisible(defaultVisible + 8);
  };

  return (
    <>
      <ul
        ref={listRef}
        className="grid-cols-projects_sm lg:grid-cols-projects_lg relative grid w-full max-w-7xl auto-rows-min grid-rows-projects justify-center overflow-visible md:justify-between "
      >
        <div
          ref={borderRef}
          className="absolute left-0 top-0 rounded-xl border-[5px] bg-white opacity-0  duration-500 ease-in-out"
        ></div>
        <li ref={rectRefs[0]}>
          <AnimationCard
            name="magic-sky"
            title="Magic Sky"
            description="Salesforce's Trailhead homepage hero animation project"
            src="./magic-sky.png"
            js
          ></AnimationCard>
        </li>
        <li ref={rectRefs[18]}>
          <UICard
            name="glowy-clip"
            title="Glowy Clip Text"
            src="./glowy-clip.gif"
            description="Technique for applying a glow cast to text"
          ></UICard>
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
        <li ref={rectRefs[11]}>
          <AnimationCard
            name="blackbird"
            title="Blackbird"
            description="Birb time"
          >
            <Blackbird></Blackbird>
          </AnimationCard>
        </li>
        <li ref={rectRefs[6]}>
          <UICard
            name="header-mirror"
            title="Header Mirror"
            src="./mirrored.gif"
            description="Mirroring header effect"
          ></UICard>
        </li>
        <li ref={rectRefs[5]}>
          <UICard
            name="file-explorer"
            title="File Explorer"
            src="./file-explorer.png"
            description="A simple react file explorer"
            isComponent
          ></UICard>
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
      {defaultVisible < totalChildren && (
        <button
          onClick={showMore}
          className="group mt-10 flex text-nowrap font-display text-sm font-bold text-white"
        >
          <span>SHOW MORE</span>
          <AngleArrowIcon
            className={
              "arrow-icon ml-1 mt-[4px] h-4 rotate-[135deg] group-hover:translate-y-1"
            }
            color="white"
          />
        </button>
      )}
    </>
  );
};
