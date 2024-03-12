import { AnimationCard } from "@components/Cards/AnimationCard";
import { CssCard } from "@components/Cards/CssCard";
import Pot from "@rive/Pot";
import Cat from "@rive/Cat";
import Liquid from "@rive/Liquid.jsx";
import { useState } from "react";

export const HomePage = () => {
  return (
    <div className="home flex flex-col items-center">
      <div className="mb-20 flex w-full place-content-center bg-gray4">
        <div className="rive-projects border-b border-gray2 border-opacity-65 bg-gray3 bg-opacity-50 relative w-full pb-20 pt-20 flex items-center flex-col text-center text-white">
          <h2 className="font-handwriting text-7xl">MIKAELA GURNEY</h2>
          <p className="font-handwriting text-xl pt-6 mb-20">Let's learn fun web sheeeyit.</p>
          <div className="w-full left-[-18rem] top-1 absolute items-center flex h-[300px] overflow-hidden" >
          <div className="cat w-full h-[500px] w-full ">
            <Cat fit="Contain"></Cat>
          </div>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-center p-12">
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
    </div>
  );
};
