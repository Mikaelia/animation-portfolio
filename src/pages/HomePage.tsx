import { useState } from "react";
import { AnimationCard } from "@components/Cards/AnimationCard";
import { CssCard } from "@components/Cards/CssCard";
import Pot from "@rive/Pot";
import Cat from "@rive/Cat";
import Liquid from "@rive/Liquid.jsx";
import SharkSub from "@rive/SharkSub";
import SanFrancisco from "@rive/SanFrancisco";
import Plane from "@rive/Plane";
import Socials from "@/components/rive/Socials";
import Background from "@/components/Background";
import "../assets/styles/birds.css";
import Wave from "@/components/Wave";
import Background2 from "@/components/Background2";
import FooterWave from "@components/FooterWave.tsx";

export const HomePage = () => {
  const [catLoaded, setCatLoaded] = useState(false);

  return (
    <div className="homepage relative flex flex-col items-center">
      <div
        className={`header flex h-screen w-full items-center duration-1000 ${catLoaded ? "border-b border-gray2 bg-gray3" : " border-b border-black bg-black"}`}
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

      <div className="plane-section xl:justify-space-between flex w-full flex-col items-center justify-center pl-20 pr-20 lg:mt-16 xl:mt-20 xl:flex-row">
        <div className=" xl:w-9rem sm:display-block display-none mt-[10rem] h-[20rem] w-[100vw] max-w-3xl md:h-[20rem] md:w-[45vw] lg:mt-0 xl:mt-[5rem]">
          <Plane />
        </div>
        <div className="flex max-w-5xl flex-col items-center text-center lg:w-[45vw] xl:mt-56 xl:pl-20 xl:text-left">
          <p className="mb-[4rem] text-xl">
            {" "}
            My name's Mikaela. <br></br>
            <br></br> I'm a frontend developer living and working in San
            Francisco, CA. On this page you'll find some of my CSS and animation
            experiments and mini-projects. <br></br>
            <br></br> I'm excited by building interactions that are fun,
            intuitive, and have a personality of their own. Over the past four
            years, I've enjoyed working closely with designers and developers to
            bring ideas to life; building out new products and enhancing
            existing features, creating design and layout systems, architecting
            UI component libraries, and developing tools to make other
            engineers' lives easier. <br></br>
            <br></br>My mission is to create virtual experiences that'll
            brighten your day.
          </p>
          <Socials></Socials>
        </div>
      </div>

      <Background />
      {/* <Wave></Wave> */}
      {/* <Background2></Background2> */}

      {/* <h2 className="font-handwriting mt-0 mb-32 text-5xl ">Mini Projects</h2> */}
      <div className="mt-32 flex w-full justify-center p-12">
        <ul className="relative grid w-full max-w-7xl auto-rows-min grid-cols-projects grid-rows-projects justify-center gap-8 overflow-visible">
          <li>
            <CssCard
              name="css-sword"
              title="CSS Sword"
              description="Swish swish"
              src="./css-sword.png"
            ></CssCard>
          </li>
          <li>
            <CssCard
              name="css-green-ball"
              title="CSS Green Ball"
              description="Bounce bounce"
              src="./css-green-ball.png"
            ></CssCard>
          </li>
          <li>
            <CssCard
              name="css-toucan"
              title="CSS Toucan"
              description="Squack squack"
              src="./css-toucan.png"
            ></CssCard>
          </li>
          <li>
            <AnimationCard
              name="magic-sky"
              title="Magic Sky"
              description="Trailhead homepage hero animation"
              src="./magic-sky.png"
            ></AnimationCard>
          </li>
          <li>
            <AnimationCard
              name="san-francisco"
              title="San Francisco"
              description="SF fun"
            >
              <SanFrancisco></SanFrancisco>
            </AnimationCard>
          </li>
          <li>
            <AnimationCard
              name="undersea-socials"
              title="Undersea Socials"
              description="Idea for underwater social links"
            >
              <SharkSub></SharkSub>
            </AnimationCard>
          </li>
          <li>
            <AnimationCard name="liquid" title="Liquid" description="Blub blub">
              <Liquid alignment="BottomCenter" fit="Cover"></Liquid>
            </AnimationCard>
          </li>
          <li>
            <AnimationCard
              name="bubbling-pot"
              title="Bubbling Pot"
              description="Boil boil"
            >
              <Pot fit={"Cover"}></Pot>
            </AnimationCard>
          </li>
        </ul>
      </div>
      <Wave></Wave>
      <Background2></Background2>
      <FooterWave></FooterWave>
    </div>
  );
};
