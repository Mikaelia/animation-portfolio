import { useEffect, useRef, useCallback } from "react";
import Lenis from "lenis";

export const useLenis = () => {
  const lenisRef = useRef(null);

  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      direction: "vertical",
      gestureDirection: "vertical",
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenisRef.current.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
    };
  }, []);

  const handleScrollTo = useCallback((selector) => {
    console.log("ping");
    const element = document.querySelector(selector);
    if (element && lenisRef.current) {
      lenisRef.current.scrollTo(element);
    }
  }, []);

  return handleScrollTo;
};
