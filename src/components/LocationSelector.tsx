import React from "react";

interface LocationSelectorProps {
  selectedState?: string;
  selectedDistrict?: string;
  onClick: () => void;
  className?: string;
}

export default function LocationSelector({
  selectedState = "All India",
  selectedDistrict = "All Districts",
  onClick,
  className = "",
}: LocationSelectorProps) {
  const displayText =
    !selectedState || selectedState === "All States" || selectedState === "All India"
      ? "All India"
      : !selectedDistrict || selectedDistrict === "All Districts"
      ? selectedState
      : `${selectedState} > ${selectedDistrict}`;

  return (
    <button
      onClick={onClick}
      type="button"
      id="header-location-picker-btn"
      title="Select Location"
      className={`h-8 inline-flex items-center justify-center px-3 rounded-full text-xs font-bold text-white bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700/80 transition-all cursor-pointer shadow-2xs active:scale-95 shrink-0 whitespace-nowrap ${className}`}
    >
      <span className="text-white text-[11px] font-bold tracking-wide whitespace-nowrap" id="selected-location-text">
        {displayText}
      </span>
    </button>
  );
}
