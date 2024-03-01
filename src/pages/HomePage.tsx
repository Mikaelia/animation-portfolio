import ProjectCard from "../components/ProjectCard";
import PlaceholderCard from "../components/PlaceholderCard.tsx";
import Pot from "@rive/Pot.tsx";

export const HomePage = () => {
  return (
    <div className="home  flex flex-col items-center">
      <div className=" mb-20 flex w-full place-content-center bg-gray4">
        <div className="rive-projects pb-20 pt-20 text-white">
          <h2 className=" text-7xl">Code-y Bits</h2>
          <p className=" pt-6">Let's learn fun web animation stuff.</p>
        </div>
      </div>

      <div className="flex w-full justify-center p-12">
        <ul className="relative grid w-full max-w-7xl auto-rows-min grid-cols-projects grid-rows-projects justify-center gap-8 overflow-visible">
          <li>
            <ProjectCard
              name="bubbling-pot"
              title="Bubbling Pot"
              description="Boil boil"
            >
              <Pot fit={"Cover"}></Pot>
            </ProjectCard>
          </li>
          <PlaceholderCard></PlaceholderCard>
          <PlaceholderCard></PlaceholderCard>
        </ul>
      </div>
    </div>
  );
};
