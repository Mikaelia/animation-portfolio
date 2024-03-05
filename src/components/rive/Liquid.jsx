import { useRive, Layout, Alignment, Fit } from "@rive-app/react-canvas";

const Liquid = ({fit, alignment="TopCenter", className=""}) => {
  const { RiveComponent } = useRive({
    src: `/liquid.riv`,
    stateMachines: "State Machine 1",
    // shouldDisableRiveListeners: true,
    layout: new Layout({
      fit: Fit[fit],
      alignment: Alignment[alignment],
    }),
    autoplay: true,
  });

  return <RiveComponent className={className} />;
};

export default Liquid;
