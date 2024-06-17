import { RefObject, useEffect, useRef } from "react";
import { AngleArrowIcon } from "@components/AngleArrowIcon.tsx";

export const Pill = ({ text }: { text: string }) => {
  return (
    <span className="w-auto rounded-3xl bg-black px-4 py-1 text-xs text-white">
      {text}
    </span>
  );
};

export const WorkCard = ({
  date,
  title,
  details,
  skills,
  url,
  bgRef,
}: {
  date: string;
  title: string;
  details: string;
  skills: string[];
  className: string;
  url?: string;
  bgRef: RefObject<HTMLDivElement>;
}) => {
  const rectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rect = rectRef.current;
    const overlay = bgRef.current;

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
  }, [bgRef]);

  return (
    <>
      {url ? (
        <a href={url} target="_blank" className="no-underline">
          <div
            ref={rectRef}
            className="link-non flex max-w-4xl rounded-b-sm py-8 text-sm text-black"
          >
            <div className="date text-l mr-4 whitespace-nowrap font-display font-semibold">
              <span>{date}</span>
            </div>
            <div className="detail">
              <h3 className="mb-2 flex font-bold">
                <span>{title}</span>
                <span>
                  <AngleArrowIcon className={"ml-1 mt-[2px] h-4"} />
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
          className="flex max-w-4xl rounded-b-sm py-8 text-sm text-black"
        >
          <div className="date text-l mr-4 whitespace-nowrap font-display font-semibold">
            <span>{date}</span>
          </div>
          <div className="detail">
            <h3 className="mb-2 font-bold">{title}</h3>
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
