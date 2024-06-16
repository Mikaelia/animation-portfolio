import { useRive, Layout, Alignment, Fit } from "@rive-app/react-canvas";

const STATE_MACHINE = "State Machine 1";
const Plane = () => {
  const { RiveComponent } = useRive({
    src: `/plane-test.riv`,
    stateMachines: STATE_MACHINE,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
    autoplay: true,
  });

  return <RiveComponent />;
};

export default Plane;
