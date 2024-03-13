import { useRive, Layout, Alignment, Fit, useStateMachineInput } from "@rive-app/react-canvas";
import { useEffect, useState } from "react"; 

const STATE_MACHINE = "State Machine 1"
const Cat = ({handleWakeUp}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const { RiveComponent, rive } = useRive({
    src: `/cat.riv`,
    stateMachines: STATE_MACHINE,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.TopCenter,
    }),
    autoplay: true,
    onStateChange: (event) => {
      const names = event.data;
      names.forEach((name) => {
        // change this to one that's only triggered once
        console.log(name)
       if (name === "exit") {
        setIsLoaded(true)
        handleWakeUp()
       }
      });
    },
  });
  
  const isLoadedInput = useStateMachineInput(rive, STATE_MACHINE, 'loaded')


  useEffect(() => {
    console.log(isLoadedInput);
    if (rive && isLoaded) isLoadedInput.value = true
  }, [rive, isLoaded])

  return <RiveComponent />;
};

export default Cat;
