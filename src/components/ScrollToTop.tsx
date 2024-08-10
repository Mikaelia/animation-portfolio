import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "@studio-freight/lenis";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Adjust duration to your needs
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenis.scrollTo(0, { immediate: true });

    return () => lenis.destroy();
  }, [pathname]);

  return null;
};

export default ScrollToTop;
