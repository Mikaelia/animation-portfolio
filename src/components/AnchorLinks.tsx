import { forwardRef, useRef } from "react";
import { calculateVHPercentage } from "@/utils/viewportUtils.ts";
import { useScroll } from "@react-spring/web";

export const AnchorLinks = forwardRef(
  ({ handleScrollTo }: { handleScrollTo: (arg: string) => void }) => {
    const ref: React.Ref<HTMLDivElement> = useRef(null);

    const handleScroll = ({
      value: { scrollYProgress },
    }: {
      value: { scrollYProgress: number };
    }) => {
      const vhPercent = calculateVHPercentage();

      const handleAnchorLinks = () => {
        const linksStyle = ref.current?.style;
        if (!linksStyle) return;

        linksStyle.transform = "translateX(100%)";

        if (scrollYProgress > 4 * vhPercent) {
          linksStyle.transform = "translateX(0)";
        }
      };

      handleAnchorLinks();
    };

    useScroll({
      onChange: handleScroll,
      default: {
        immediate: true,
      },
    });

    return (
      <div
        ref={ref}
        className="anchor-links fixed right-0 top-0  z-[2000] flex translate-x-full gap-4 rounded-bl border-b border-l border-black bg-white p-1 font-display font-semibold text-black duration-300 ease-in-out hover:text-pink"
      >
        <a
          className="no-underline hover:text-black"
          onClick={() => handleScrollTo("#about")}
        >
          ABOUT
        </a>
        <a
          className="no-underline hover:text-black"
          onClick={() => handleScrollTo("#projects")}
        >
          PROJECTS
        </a>
        <a
          className="no-underline hover:text-black"
          onClick={() => handleScrollTo("#journal")}
        >
          JOURNAL
        </a>
      </div>
    );
  },
);
