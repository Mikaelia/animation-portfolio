import { AnimationCard } from "@components/Cards/AnimationCard";
import { CssCard } from "@components/Cards/CssCard";
import Pot from "@rive/Pot";
import Liquid from "@rive/Liquid.jsx";
import { useState } from "react";

export const HomePage = () => {
  const [playHero, setPlayHero] = useState(false);

  const test = () => {
    setPlayHero(!playHero);
    console.log("ping");
  };

  return (
    <div className="home flex flex-col items-center">
      <div className=" mb-20 flex w-full place-content-center bg-gray4">
        <div className="rive-projects relative h-[282px] w-full pb-20 pt-20 text-center text-white">
          <h2 className=" text-7xl">Mikaela Gurney</h2>
          <p className=" pt-6">Let's learn fun web sheeeyit.</p>
          {/* <div className="rive-projects absolute bottom-0 h-full w-full  text-white"> */}
          {/* <Liquid
              shouldPlay={playHero}
              alignment="BottomCenter"
              fit="Cover"
            ></Liquid> */}
          {/* </div> */}
        </div>
      </div>

      <div className="flex w-full justify-center p-12">
        <ul className="relative grid w-full max-w-7xl auto-rows-min grid-cols-projects grid-rows-projects justify-center gap-8 overflow-visible">
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
        </ul>
      </div>
    </div>
  );
};
