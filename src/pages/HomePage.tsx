import { useState } from "react";
import { AnimationCard } from "@components/Cards/AnimationCard";
import { CssCard } from "@components/Cards/CssCard";
import Cat from "@rive/Cat";
import Plane from "@rive/Plane";
import Socials from "@/components/rive/Socials";
import Background from "@/components/Background";
import "../assets/styles/custom.css";
import RiveFooter from "@rive/FooterWave.tsx";
import HeaderWave from "@/components/HeaderWave";
import Blackbird from "@rive/Blackbird.tsx";

export const HomePage = () => {
  const [catLoaded, setCatLoaded] = useState(false);

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
            <div className="cat h-[500px] w-full w-full xl:pr-[17rem] ">
              <Cat handleWakeUp={() => setCatLoaded(true)}></Cat>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-x-hidden">
        <HeaderWave background={catLoaded ? "#333333" : "#0F0F0F"}></HeaderWave>
      </div>

      <div className="plane-section xl:justify-space-between flex w-full flex-col items-center justify-center pl-20 pr-20 lg:mt-16 xl:mt-20 xl:flex-row">
        <div className=" xl:w-9rem sm:display-block display-none mt-[10rem] h-[20rem] w-[100vw] max-w-3xl md:h-[20rem] md:w-[45vw] lg:mt-0 xl:mt-[5rem]">
          <Plane />
        </div>
        <div className="flex max-w-5xl flex-col items-center text-center lg:w-[45vw] xl:mt-56 xl:pl-20 xl:text-left">
          <div className="mb-6 text-xl">
            <p className="mb-12">
              My name's Mikaela. <br></br>
              <br></br> I'm a frontend developer based in foggy San Francisco.
              Here you'll find some of my CSS and animation experiments and
              mini-projects.
            </p>
            <p className="mb-12">
              I love creating clean, flexible UIs and playful interactions for
              users to enjoy. Over the past four years, I've had the pleasure of
              collaborating with designers and developers to launch new products
              and reimagine existing features. I've also worked on design
              systems and component libraries to streamline development across
              engineering teams.
            </p>
            <p className="mb-12">
              As an artist I'm addicted to detail. Check out my{" "}
              <a
                className="underline"
                href={"https://www.facebook.com/mikaelaspencils/"}
                target="_blank"
              >
                pencil
              </a>{" "}
              work or follow along as I learn to{" "}
              <a
                className="underline"
                href={"https://www.instagram.com/mikaelisms/"}
                target="_blank"
              >
                watercolor
              </a>
              .
            </p>
            I even have a{" "}
            <a
              className="underline"
              href={"https://www.pixelsips.dev"}
              target="_blank"
            >
              blog
            </a>
            , where I (very) occasionally write things!
          </div>
          <Socials></Socials>
        </div>
      </div>

      <Background />
      <div className="mt-32 flex w-full justify-center p-12">
        <ul className="relative grid w-full max-w-7xl auto-rows-min grid-cols-projects grid-rows-projects justify-center gap-8 overflow-visible">
          <li>
            <CssCard
              name="css-sword"
              title="CSS Sword"
              description="A sword made using only HTML and CSS"
              src="./css-sword.png"
            ></CssCard>
          </li>
          <li>
            <CssCard
              name="css-green-ball"
              title="CSS Green Ball"
              description="A ball made using only HTML and CSS"
              src="./css-green-ball.png"
            ></CssCard>
          </li>
          <li>
            <CssCard
              name="css-toucan"
              title="CSS Toucan"
              description="A toucan made using only HTML and CSS"
              src="./css-toucan.png"
            ></CssCard>
          </li>
          <li>
            <AnimationCard
              name="magic-sky"
              title="Magic Sky"
              description="Salesforce's Trailhead homepage hero animation project"
              src="./magic-sky.png"
            ></AnimationCard>
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
              src="./liquid.png"
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
      </div>
      <div className="overflow-x-hidden">
        <RiveFooter></RiveFooter>
      </div>
    </div>
  );
};
