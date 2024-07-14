import { forwardRef } from "react";

export const AnchorLinks = forwardRef(
  (
    {
      handleScrollTo,
    }: {
      handleScrollTo: (arg: string) => void;
    },
    ref: React.Ref<HTMLDivElement>,
  ) => {
    return (
      <div
        ref={ref}
        className="anchor-links fixed right-0 top-0 z-[1000] flex translate-x-full gap-4 rounded-bl border-b border-l border-black bg-white p-1 font-display font-semibold text-black duration-300 ease-in-out hover:text-pink"
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
