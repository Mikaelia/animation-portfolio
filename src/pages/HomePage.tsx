import ProjectCard from "../components/ProjectCard";
import PlaceholderCard from "../components/PlaceholderCard.tsx";
import Pot from "@rive/Pot";

export const HomePage = () => {
  return (
    <div className="home  flex flex-col items-center">
      <div className=" mb-20 flex w-full place-content-center bg-gray4">
        <div className="rive-projects pb-20 pt-20 text-white">
          <h2 className=" text-7xl">Rive Projects</h2>
          <p className=" pt-6">
            Let's learn some fun web animation.
          </p>
        </div>
      </div>

      <div className="flex w-full justify-center p-12">
        <ul className="relative grid w-full max-w-7xl auto-rows-min grid-cols-projects grid-rows-projects justify-center gap-8 overflow-visible">
          <li>
            <ProjectCard
              name="Pot"
              title="Bubbling Pot"
              description="Boil boil"
            >
              <Pot></Pot>
            </ProjectCard>
          </li>
          <PlaceholderCard></PlaceholderCard>
          <PlaceholderCard></PlaceholderCard>
          <PlaceholderCard></PlaceholderCard>
        </ul>
      </div>
    </div>
  );
};
