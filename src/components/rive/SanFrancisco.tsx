// import { useState, useEffect, useRef } from 'react';
import { useRive, Layout, Alignment, Fit } from "@rive-app/react-canvas";
// import useMediaQuery from "@/utils/useMediaBreakpoint";

const STATE_MACHINE = "State Machine 1";

const SanFrancisco = ({ fit = "Cover" }: { fit?: "Cover" | "Contain" }) => {
  const { RiveComponent } = useRive(
    {
      src: `/san-francisco.riv`,
      stateMachines: STATE_MACHINE,
      layout: new Layout({
        fit: Fit[fit],
        alignment: Alignment.Center,
      }),
      autoplay: true,
    },
    {
      // shouldResizeCanvasToContainer: false
    },
  );

  // const elementRef = useRef(null);
  // const lgQuery = useMediaQuery("only screen and (min-width: 1025px)");

  // const onRiveEventReceived = (riveEvent) => {
  //   const eventData = riveEvent.data;
  //   const root = document.getElementById("root");
  //   if (eventData.name === "hovered") {
  //     root!.style.cursor = "pointer";
  //   } else if (eventData.name === "not-hovered") {
  //     root!.style.cursor = "default";
  //   } else {
  //     root!.style.cursor = "default";
  //   }
  //   if (eventData.name === "github") {
  //     window.open('https://github.com/Mikaelia', '_blank');
  //   }
  //   if (eventData.name === "linkedin") {
  //     window.open('https://www.linkedin.com/in/mikaela-gurney/', '_blank');
  //   }
  // };

  // Wait until the rive object is instantiated before adding the Rive
  // event listener

  // useEffect(() => {
  //   if (rive) {
  //     rive.on(EventType.RiveEvent, onRiveEventReceived);
  //   }
  // }, [rive]);

  /////////

  // On larger viewports, display the entire artboard while maintaining aspect ratio
  // On smaller viewports, cover the viewport with the artboard while maintaining aspect ratio
  // which may crop certain parts of the artboard
  // useEffect(() => {
  //   if (rive) {
  //     if (lgQuery) {
  //       rive!.layout = new Layout({
  //         fit: Fit.Contain,
  //         alignment: Alignment.Center,
  //       });
  //     } else {
  //       rive!.layout = new Layout({
  //         fit: Fit.Cover,
  //         alignment: Alignment.Center,
  //       });
  //     }
  //   }
  // }, [rive, lgQuery]);

  return (
    // <div className="san-francisco-section lg:h-[250vh] max-w-[1450px] w-full md:h-[200vh] sm:display:none" ref={elementRef}>
    // <div className="san-francisco-section lg:h-[250vh] max-w-[1450px] w-full" ref={elementRef}>
    <RiveComponent style={{ display: "flex", justifyContent: "center" }} />
    // </div>
  );
};

export default SanFrancisco;
