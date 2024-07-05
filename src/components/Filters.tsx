import { Pill } from "@components/WorkCard.tsx";
export const Filters = ({
  className,
  callback,
}: {
  className: string;
  callback: (val: string) => void;
}) => {
  return (
    <div className={`filters ${className} flex flex-col items-start`}>
      <h3 className="text-l mb-4 font-display font-medium">CATEGORIES</h3>
      <div className="pill-container flex flex-wrap gap-2">
        <Pill
          isButton
          callback={() => callback("JS Animation")}
          text="JS Animation"
        />
        <Pill isButton callback={() => callback("CSS Art")} text="CSS Art" />
        <Pill
          isButton
          callback={() => callback("UI Elements")}
          text="UI Elements"
        />
        <Pill
          isButton
          callback={() => callback("Rive Animation")}
          text="Rive Animation"
        />
      </div>
    </div>
  );
};
