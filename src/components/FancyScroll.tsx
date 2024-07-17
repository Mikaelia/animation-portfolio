import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const FancyScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      // Your configuration options
    });

    const recalibrateLenis = () => {
      // Perform necessary recalibration steps for Lenis
      lenis.resize(); // or any other method Lenis provides
    };

    const handleResize = () => {
      recalibrateLenis();
    };

    window.addEventListener("resize", handleResize);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach(() => {
        recalibrateLenis();
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true,
    });

    // The main animation loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
      lenis.destroy(); // Destroy Lenis instance if there's a destroy method
    };
  }, []);

  return <div>{/* Your scrollable content here */}</div>;
};

export default FancyScroll;
