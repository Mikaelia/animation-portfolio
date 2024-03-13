import { useRive, Layout, Alignment, Fit } from "@rive-app/react-canvas";

const STATE_MACHINE = "State Machine 1"
const SanFrancisco = () => {
  const { RiveComponent } = useRive({
    src: `/san-francisco.riv`,
    stateMachines: STATE_MACHINE,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.TopCenter,
    }),
    autoplay: false,
   
  });
  
  return <RiveComponent />;
};

export default SanFrancisco;
