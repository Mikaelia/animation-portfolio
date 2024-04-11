import { CssCard } from "@components/Cards/CssCard.tsx";
import { UICard } from "@components/Cards/UICard.tsx";
import { AnimationCard } from "@components/Cards/AnimationCard.tsx";
import Blackbird from "@rive/Blackbird.tsx";

export const ProjectList = () => {
  return (
    <ul className="relative grid w-full max-w-7xl auto-rows-min grid-cols-projects grid-rows-projects justify-center gap-8 overflow-visible">
      <li>
        <CssCard
          name="css-sword"
          title="CSS Sword"
          description="A sword made using only HTML and CSS"
          src="./css-sword.png"
          art
        ></CssCard>
      </li>
      <li>
        <CssCard
          name="css-green-ball"
          title="CSS Green Ball"
          description="A ball made using only HTML and CSS"
          src="./css-green-ball.png"
          art
        ></CssCard>
      </li>
      <li>
        <CssCard
          name="css-toucan"
          title="CSS Toucan"
          description="A toucan made using only HTML and CSS"
          src="./css-toucan.png"
          art
        ></CssCard>
      </li>
      <li>
        <CssCard
          name="css-smiley"
          title="Smiley"
          description="A smiley made using only HTML and CSS"
          src="./smiley.png"
          art
        ></CssCard>
      </li>
      <li>
        <UICard
          name="file-explorer"
          title="File Explorer"
          src="./file-explorer.png"
          description="A simple react file explorer"
        ></UICard>
      </li>
      <li>
        <UICard
          name="header-mirror"
          title="Header Mirror"
          src="./mirrored.gif"
          description="Mirroring header effect"
        ></UICard>
      </li>
      <li>
        <UICard
          name="text-hover-up"
          title="Text hover animation"
          description="Fun text hover animation"
          src="./text-hover-up.gif"
        ></UICard>
      </li>
      <li>
        <UICard
          name="text-hover-flip"
          title="Text flip hover animation"
          description="Fun text hover animation"
          src="./text-hover-flip.gif"
        ></UICard>
      </li>
      <li>
        <UICard
          name="animated-tooltip"
          title="Animated tooltip"
          description="Animated tooltip that unscrambles words"
          src="./tooltip.gif"
        ></UICard>
      </li>
      <li>
        <UICard
          name="explore-button"
          title="Explore Button"
          description="Animated button with mouse interaction"
          src="./explore-button.gif"
        ></UICard>
      </li>
      <li>
        <AnimationCard
          name="blackbird"
          title="Blackbird"
          description="Birb time"
        >
          <Blackbird></Blackbird>
        </AnimationCard>
      </li>
      <li>
        <AnimationCard
          name="canvas-floating-boxes"
          title="Floating"
          description="Canvas interactive floating boxes animation"
          src="./floating-boxes.gif"
          js
        ></AnimationCard>
      </li>
      <li>
        <AnimationCard
          name="magic-sky"
          title="Magic Sky"
          description="Salesforce's Trailhead homepage hero animation project"
          src="./magic-sky.png"
          js
        ></AnimationCard>
      </li>
      <li>
        <UICard
          name="gooey-nav"
          title="Gooey"
          description="Gooey nav with html filter"
          src="./gooey-nav.gif"
        ></UICard>
      </li>
      <li>
        <AnimationCard
          name="san-francisco"
          title="San Francisco"
          description="An animated scene of San Francisco"
          src="./san-francisco.png"
        ></AnimationCard>
      </li>
      <li>
        <AnimationCard
          name="undersea-socials"
          title="Undersea Socials"
          description="A discarded idea for underwater social links"
          src="./undersea-socials.png"
        ></AnimationCard>
      </li>
      <li>
        <AnimationCard
          name="liquid"
          title="Liquid"
          description="Simple liquid Rive animation"
          src="./liquid.gif"
        ></AnimationCard>
      </li>
      <li>
        <AnimationCard
          name="bubbling-pot"
          title="Bubbling Pot"
          description="Bubbling pot animation"
          src="./bubbling-pot.png"
        ></AnimationCard>
      </li>
    </ul>
  );
};
