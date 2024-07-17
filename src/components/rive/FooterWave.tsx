import { useRive, Layout, Alignment, Fit } from "@rive-app/react-canvas";
import useMediaQuery from "@/utils/useMediaBreakpoint";
import { useEffect, useState } from "react";

const STATE_MACHINE = "State Machine 1";

const RiveFooter = () => {
  const [isScreenLarge, setIsScreenLarge] = useState(true);
  const lgQuery = useMediaQuery("only screen and (min-width: 1500px)");

  const { RiveComponent } = useRive({
    src: `/footer.riv`,
    stateMachines: STATE_MACHINE,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.BottomCenter,
    }),
    autoplay: true,
  });

  useEffect(() => {
    if (lgQuery) {
      setIsScreenLarge(true);
    } else {
      setIsScreenLarge(false);
    }
  }, [lgQuery]);

  return (
    <RiveComponent
      style={{
        width: isScreenLarge ? "2000px" : "1500px",
        height: isScreenLarge ? "1200px" : "1000px",
      }}
    />
  );
};

export default RiveFooter;
