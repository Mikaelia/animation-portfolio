
import { useEffect } from 'react';
import { useRive, Layout, Alignment, Fit, EventType } from "@rive-app/react-canvas";

const STATE_MACHINE = "State Machine 1"

const Socials = () => {
  const { RiveComponent, rive } = useRive({
    src: `/socials.riv`,
    stateMachines: STATE_MACHINE,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
    autoplay: true,
  });

  // @ts-expect-error
  const onRiveEventReceived = (riveEvent) => {
    const eventData = riveEvent.data;
    const root = document.getElementById("root");
    if (eventData.name === "hovered") {
      root!.style.cursor = "pointer";
    } else if (eventData.name === "not-hovered") {
      root!.style.cursor = "default";
    } else {
      root!.style.cursor = "default";
    }
    if (eventData.name === "github") {
      window.open('https://github.com/Mikaelia', '_blank');
    }
    if (eventData.name === "linkedin") {
      window.open('https://www.linkedin.com/in/mikaela-gurney/', '_blank');
    }
    if (eventData.name === "blog") {
      window.open('https://www.pixelsips.dev', '_blank');
    }
  };


  useEffect(() => {
    if (rive) {
      rive.on(EventType.RiveEvent, onRiveEventReceived);
    }
  }, [rive]);

  return (
    <RiveComponent style={{ width: "20rem", height: "7rem" }} />
  );
};

export default Socials;
