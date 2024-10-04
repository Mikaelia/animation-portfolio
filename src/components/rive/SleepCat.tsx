import { useRive, Layout, Alignment, Fit } from "@rive-app/react-canvas";

const STATE_MACHINE = "Lying Cat";
const SleepCat = () => {
  const { RiveComponent } = useRive({
    src: `/sleepcat-1.riv`,
    stateMachines: STATE_MACHINE,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
    autoplay: true,
  });

  return <RiveComponent />;
};

export default SleepCat;
