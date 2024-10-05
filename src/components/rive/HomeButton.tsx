import { useRive, Layout, Alignment, Fit } from "@rive-app/react-canvas";

const STATE_MACHINE = "State Machine 1";
const HomeButton = () => {
  const { RiveComponent } = useRive({
    src: `/home-button.riv`,
    stateMachines: STATE_MACHINE,
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center,
    }),
    autoplay: true,
  });

  return <RiveComponent style={{ width: "50px", height: "25px" }} />;
};

export default HomeButton;
