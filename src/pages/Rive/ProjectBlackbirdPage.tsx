import { ProjectPage } from "../ProjectPage";
import Blackbird from "@rive/Blackbird";
import { useState } from "react";

const buttonsConfig = [
  { id: 0, label: "Happy Step", color: "red" },
  { id: 1, label: "Shuffle", color: "blue" },
  { id: 2, label: "Peck", color: "blue" },
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
      <div className="buttons items-left mt-10 flex flex-col">
        {buttonsConfig.map(({ id, label, color }) => (
          <button
            key={id}
            className={`${
              isActive === id && "active"
            } select-button relative mt-6 w-full max-w-60 grow cursor-pointer whitespace-nowrap rounded-xl border pr-12 border-l${color}  p-2 pl-4`}
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
      instructions="Morning challenge: make a bird shuffle. Created using Rive and React."
      instructionControls={buildInstructionControls()}
    >
      <Blackbird stateNumber={animationState}></Blackbird>
    </ProjectPage>
  );
};
