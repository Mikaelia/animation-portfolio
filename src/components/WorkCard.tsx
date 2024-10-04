import { RefObject, useEffect, useRef } from "react";
import { AngleArrowIcon } from "@components/AngleArrowIcon.tsx";

export const Pill = ({
  text,
  callback,
  isButton,
}: {
  text: string;
  callback?: () => void;
  isButton?: boolean;
}) => {
  return (
    <>
      {isButton ? (
        <button
          onClick={callback}
          className="w-auto rounded-3xl bg-white px-4 py-1 text-xs text-black"
        >
          {text}
        </button>
      ) : (
        <span className="w-auto rounded-3xl bg-black px-4 py-1 text-xs font-normal text-white">
          {text}
        </span>
      )}
    </>
  );
};

export const WorkCard = ({
  date,
  title,
  details,
  skills,
  url,
  backgroundRef,
}: {
  date: string;
  title: string;
  details: string;
  skills: string[];
  className?: string;
  url?: string;
  backgroundRef: RefObject<SVGSVGElement>;
}) => {
  const rectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rect = rectRef.current;
    const overlay = backgroundRef.current;

    if (rect && overlay) {
      const handleMouseEnter = () => {
        const rectMeasurements = rect.getBoundingClientRect();
        const parentMeasurements = overlay.getBoundingClientRect();

        if (parentMeasurements) {
          const top = rectMeasurements.top - parentMeasurements.top;
          const left = rectMeasurements.left - parentMeasurements.left - 12;
          const bottom = parentMeasurements.bottom - rectMeasurements.bottom;
          const right = parentMeasurements.right - rectMeasurements.right;

          overlay.style.clipPath = `inset(${top}px ${right}px ${bottom}px ${left}px round 10px)`;
        }
      };

      const handleMouseLeave = () => {
        overlay.style.clipPath = "inset(100%)";
      };

      rect.addEventListener("mouseenter", handleMouseEnter);
      rect.addEventListener("mouseleave", handleMouseLeave);

      // Cleanup event listeners on component unmount
      return () => {
        rect.removeEventListener("mouseenter", handleMouseEnter);
        rect.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [backgroundRef]);

  return (
    <>
      {url ? (
        <a href={url} target="_blank" className="work-card no-underline">
          <div
            ref={rectRef}
            className="link-non flex max-w-4xl flex-col rounded-b-sm py-6 text-sm text-black md:flex-row"
          >
            <div className="date mr-4 whitespace-nowrap font-display font-semibold">
              <span>{date}</span>
            </div>
            <div className="detail">
              <h3 className="mb-2 mt-[-3.5px] flex font-display text-lg">
                <span>{title}</span>
                <span>
                  <AngleArrowIcon className={"arrow-icon ml-1 mt-[2px] h-4"} />
                </span>
              </h3>
              <p className="mb-2 font-normal">{details}</p>
              <div className="pill-container flex flex-wrap gap-2">
                {skills.map((v: string) => (
                  <Pill key={v} text={v} />
                ))}
              </div>
            </div>
          </div>
        </a>
      ) : (
        <div
          ref={rectRef}
          className="flex max-w-4xl flex-col rounded-b-sm py-6 text-sm text-black md:flex-row"
        >
          <div className="date mr-4 whitespace-nowrap font-display font-semibold">
            <span>{date}</span>
          </div>
          <div className="detail">
            <h3 className="text-l mb-2 mt-[-3.5px] font-display text-lg">
              {title}
            </h3>
            <p className="mb-2">{details}</p>
            <div className="pill-container flex flex-wrap gap-2">
              {skills.map((v: string) => (
                <Pill key={v} text={v} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
