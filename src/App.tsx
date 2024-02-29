import { Pot } from "@rive/Pot";
import { ProjectCard } from "@layout/ProjectCard";

function App() {
  const fireModal = () => {
    console.log("ping");
  };

  return (
    <div className="home p-3">
      <div className="rive-projects">
        <h2 className="text-8xl">Rive Projects</h2>
      </div>
      <div className="rive-list flex p-6">
        <ProjectCard
          title="Bubbling Pot"
          number="01"
          description="Boil boil"
          action={fireModal}
          theme="Rive"
        >
          <Pot></Pot>
        </ProjectCard>
      </div>
    </div>
  );
}

export default App;
