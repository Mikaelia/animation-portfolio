import {
  useRive,
  Layout,
  Alignment,
  Fit,
  useStateMachineInput,
} from "@rive-app/react-canvas";
import { useEffect } from "react";

const STATE_MACHINE = "State Machine 1";
const Blackbird = ({ stateNumber }: { stateNumber: number }) => {
  const { RiveComponent, rive } = useRive({
    src: `/bird.riv`,
    stateMachines: STATE_MACHINE,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
    autoplay: true,
  });

  const animationState = useStateMachineInput(
    rive,
    "State Machine 1",
    "Number 1",
    0,
  );

  useEffect(() => {
    if (rive && animationState) animationState.value = stateNumber;
  }, [rive, stateNumber, animationState]);

  return <RiveComponent />;
};

export default Blackbird;
