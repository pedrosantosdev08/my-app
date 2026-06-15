"use client"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface OverviewCardProps {
  id: number;
  title: string;
  value: string;
  description: string;
  icon: IconDefinition;
}

export function OverviewCard({
  id,
  title,
  value,
  description,
  icon,
}: OverviewCardProps) {

  const valueColor =
    id === 1 ? "text-(--accent-color)" : id === 3 ? "text-red-500" : "text-(--text-primary)";

    const borderColor = id === 1 ? "border-(--accent-color)" : "border-(--border-color)";

  return (
    <div className={`bg-(--background-primary) border ${borderColor} rounded-4xl p-6 shadow-sm text-(--text-primary)`}>
      <div className="flex justify-between items-center  mb-4 ">
        <span className="text-(--text-secondary)">{title}</span>
        <FontAwesomeIcon icon={icon} className="bg-(--accent-color)/70  text-white p-2 rounded-full" />
      </div>
      <div className="flex flex-col gap-1 ">
        <span className={valueColor}>{value}</span>
        <span>{description}</span>
      </div>
    </div>
  );
}
