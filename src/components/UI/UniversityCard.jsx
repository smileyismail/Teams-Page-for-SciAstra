import React from "react";
import { TiLocationOutline } from "react-icons/ti";

const UniversityCard = ({ university }) => {
  return (
    <div className="relative w-[220px] sm:w-[260px] h-[260px] sm:h-[300px] rounded-lg overflow-hidden">
      <img
        src={university.image}
        alt={university.name}
        className="w-full h-full"
      />

      <div className="absolute z-10 bottom-0 p-2 text-white text-center w-full">
        <h1 className="font-semibold text-xl">
          {university.name.length > 30
            ? university.name.slice(0, 30) + "..."
            : university.name}
        </h1>
        <p className="flex items-center justify-center gap-2 text-sm">
          <TiLocationOutline className="text-white" color="white" />
          <span>
            {university.location.length > 22
              ? university.location.slice(0, 22) + "..."
              : university.location}
          </span>
        </p>
      </div>

      <div className="absolute inset-0 rounded-lg">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-45% to-neutral-900"></div>
      </div>
    </div>
  );
};

export default UniversityCard;
