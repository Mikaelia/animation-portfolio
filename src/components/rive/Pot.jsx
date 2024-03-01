import React from "react";
import { useRive, Layout, Alignment, Fit, } from "@rive-app/react-canvas";

const Pot = () => {
  const { RiveComponent } = useRive({
    src: `/bubbling-pot.riv`,
    stateMachines: "State Machine 1",
    // shouldDisableRiveListeners: true,
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.TopCenter,
    }),
    autoplay: true,
    onStateChange: (event) => {
      const eventName = event.data[0];
      if (eventName === "HOVER") {
        document.body.style.cursor = "pointer";
      }
      if (eventName === "UNHOVER") {
        document.body.style.cursor = "";
      }
    },
  });

  return <RiveComponent />;
};

export default Pot