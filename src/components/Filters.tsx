import { Pill } from "@components/WorkCard.tsx";
export const Filters = ({ className }: { className: string }) => {
  return (
    <div className={`filters ${className} flex flex-col items-start`}>
      <h3 className="text-l mb-4 font-display font-medium">CATEGORIES</h3>
      <div className="pill-container flex flex-wrap gap-2">
        <Pill isButton text="JS Animation" />
        <Pill isButton text="CSS Art" />
        <Pill isButton text="UI Elements" />
        <Pill isButton text="Rive Animation" />
      </div>
    </div>
  );
};
