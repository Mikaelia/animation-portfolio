import {useState} from "react"
import { AnimationCard } from "@components/Cards/AnimationCard";
import { CssCard } from "@components/Cards/CssCard";
import Pot from "@rive/Pot";
import Cat from "@rive/Cat";
import Liquid from "@rive/Liquid.jsx";
import SanFrancisco from "@rive/SanFrancisco";

export const HomePage = () => {
  const [catLoaded, setCatLoaded] = useState(false)
  return (
    <div className="home flex flex-col items-center">
      <div className="mb-20 flex w-full place-content-center">
        <div className={`rive-projects  border-gray2 relative w-full pb-20 pt-20 border-b flex items-center flex-col duration-500 text-center ${catLoaded ? "text-white bg-gray3 bg-opacity-50 border-opacity-65" : "text-black bg-black border-opacity-0"}`}>
          <h1 className="font-handwriting text-7xl">MIKAELA GURNEY</h1>
          <p className="font-handwriting text-xl pt-6 mb-20">Let's learn fun web sheeeyit.</p>
          <div className="w-full left-[-18rem] top-[-6rem] absolute items-center flex h-[500px] overflow-hidden" >
          <div className="cat w-full h-[500px] w-full ">
            <Cat handleWakeUp={() => setCatLoaded(true)}></Cat>
          </div>
          </div>
        </div>
      </div>
      <h1 className="font-handwriting text-5xl ">About Me:</h1>

      <div className="san-francisco-section h-[1200px] w-full">
        <SanFrancisco/>
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
