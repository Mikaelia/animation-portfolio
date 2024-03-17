import { useRive, Layout, Alignment, Fit } from "@rive-app/react-canvas";

const STATE_MACHINE = "State Machine 1"
const Plane = () => {
  const { RiveComponent } = useRive({
    src: `/shark-sub.riv`,
    stateMachines: STATE_MACHINE,
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center,
    }),
    autoplay: true,

  });

  return <RiveComponent />;
};

export default Plane;
