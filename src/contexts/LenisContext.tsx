import {
  createContext,
  ReactNode,
  useEffect,
  useRef,
  useCallback,
} from "react";
import Lenis from "lenis";
import { useLocation } from "react-router-dom";

// Define the context type
type LenisContextType = {
  handleScrollTo: (selector: string) => void;
  initializeLenis: () => void;
};

// Create the context with default undefined value
export const LenisContext = createContext<LenisContextType>({
  handleScrollTo: () => {},
  initializeLenis: () => {},
});

interface LenisProviderProps {
  children: ReactNode;
}

export const LenisProvider = ({ children }: LenisProviderProps) => {
  const lenisRef = useRef<Lenis | null>(null);

  const initializeLenis = useCallback(() => {
    if (lenisRef.current) {
      lenisRef.current.destroy();
    }

    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    initializeLenis();

    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
    };
  }, [initializeLenis]);

  const { pathname } = useLocation();

  useEffect(() => {
    initializeLenis();
  }, [pathname, initializeLenis]);

  const handleScrollTo = useCallback((selector: string) => {
    const element = document.querySelector(selector);
    if (element && lenisRef.current) {
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      const position = elementTop - 100;
      lenisRef.current.scrollTo(position);
    }
  }, []);

  return (
    <LenisContext.Provider value={{ handleScrollTo, initializeLenis }}>
      {children}
    </LenisContext.Provider>
  );
};
