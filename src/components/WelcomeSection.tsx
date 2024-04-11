import Plane from "@rive/Plane";
import "../assets/styles/custom.css";
import Socials from "@rive/Socials.tsx";
import { Element } from "react-scroll";

export const WelcomeSection = () => {
  return (
    <div className="plane-section xl:justify-space-between flex w-full flex-col items-center justify-center pl-20 pr-20 lg:mt-16 xl:mt-20 xl:flex-row">
      <div className=" xl:w-9rem sm:display-block display-none mt-[10rem] h-[20rem] w-[100vw] max-w-3xl md:h-[20rem] md:w-[45vw] lg:mt-0 xl:mt-[5rem]">
        <Element name="section1"></Element>
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
            users to enjoy. I've had the pleasure of collaborating with
            designers and developers to launch new products and reimagine
            existing features. I've also worked on design systems and component
            libraries to streamline development across engineering teams.
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
          I also have a{" "}
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
  );
};
