import { ProjectPage } from "./ProjectPage";
import Blackbird from "@rive/Blackbird";
import { useState } from "react";

const buttonsConfig = [
  { id: 0, label: "Happy Step", color: "blue" },
  { id: 1, label: "Shuffle", color: "pink" },
  { id: 2, label: "Peck", color: "green" },
];

export const ProjectBlackbirdPage = () => {
  const [animationState, setAnimationState] = useState<number>(0);
  const [isActive, setIsActive] = useState<number>(0);

  const handleClick = (id: number) => {
    setAnimationState(id);
    setIsActive(id);
  };

  const buildInstructionControls = () => {
    return (
      <div className="buttons mt-12 flex flex-col items-center">
        {buttonsConfig.map(({ id, label, color }) => (
          <button
            key={id}
            className={`${
              isActive === id && "active"
            } select-button relative mt-6 w-full max-w-60 grow cursor-pointer rounded-xl border border-l${color} bg-${color} p-2 pl-4`}
            onClick={() => handleClick(id)}
          >
            {label}
          </button>
        ))}
      </div>
    );
  };

  return (
    <ProjectPage
      title="Blackbird"
      instructions="Morning challenge -- make a bird shuffle"
      instructionControls={buildInstructionControls()}
    >
      <Blackbird stateNumber={animationState}></Blackbird>
    </ProjectPage>
  );
};
