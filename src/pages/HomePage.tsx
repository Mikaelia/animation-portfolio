import { useState } from "react"
import { AnimationCard } from "@components/Cards/AnimationCard";
import { CssCard } from "@components/Cards/CssCard";
import Pot from "@rive/Pot";
import Cat from "@rive/Cat";
import Liquid from "@rive/Liquid.jsx";
import SharkSub from "@rive/SharkSub";
import SanFrancisco from "@rive/SanFrancisco";
import Plane from "@rive/Plane";
import Socials from "@/components/rive/Socials";

export const HomePage = () => {
  const [catLoaded, setCatLoaded] = useState(false)
  return (
    <div className="homepage flex flex-col items-center overflow-x-hidden">
      <div className={`header flex w-full h-screen items-center duration-1000 ${catLoaded ? "bg-gray3 border-b border-gray2" : " border-b border-black bg-black"}`}>
        <div className={`rive-projects w-full relative pb-20 pt-20 flex items-center flex-col duration-1000 text-center ${catLoaded ? "text-white" : "text-black"}`}>
          <h1 className="font-handwriting mt-[-15rem] sm:mt-[-10rem] lg:text-9xl sm:text-8xl text-7xl">MIKAELA GURNEY</h1>
          <p className="font-handwriting lg:text-2xl md:text-xl pt-6 mb-20">Let's do fun web stuff.</p>
          <div className="w-full xl:left-[-18rem] xl:top-[-16rem] left-[-1.75rem] sm:bottom-[-18rem] absolute items-center flex h-[500px] overflow-hidden" >
            <div className="cat xl:pr-[17rem] w-full h-[500px] w-full ">
              <Cat handleWakeUp={() => setCatLoaded(true)}></Cat>
            </div>
          </div>
        </div>
      </div>

      <div className="plane-section flex xl:flex-row xl:mt-20 lg:mt-16 flex-col w-full items-center xl:justify-space-between justify-center pl-20 pr-20">
        <div className=" max-w-3xl lg:mt-0 xl:mt-[5rem] mt-[10rem] md:w-[45vw] md:h-[20rem] w-[100vw] h-[20rem] xl:w-9rem sm:display-block display-none">
          <Plane />
        </div>
        <div className="xl:pl-20 xl:mt-56 lg:w-[45vw] flex flex-col text-center xl:text-left items-center max-w-5xl">
          <p className="text-xl mb-[4rem]"> My name's Mikaela. <br></br><br></br> I'm a frontend developer living and working in San Francisco, CA. On this page you'll find some of my CSS and animation experiments and mini-projects. <br></br><br></br> I'm excited by building interactions that are fun, intuitive, and have a personality of their own. Over the past four years, I've enjoyed working closely with designers and developers to bring ideas to life; building out new products and enhancing existing features, creating design and layout systems, architecting UI component libraries, and developing tools to make other engineers' lives easier. <br></br><br></br>My mission is to create virtual experiences that'll brighten your day.
          </p>
          <Socials></Socials>
        </div>
      </div>

      {/* <h2 className="font-handwriting mt-0 mb-32 text-5xl ">Mini Projects</h2> */}
      <div className="flex w-full justify-center p-12 mt-32">
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
    </div>
  );
};
