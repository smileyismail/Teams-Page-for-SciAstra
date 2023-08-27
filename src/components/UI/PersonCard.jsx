import React from "react";

const PersonCard = ({ person }) => {
  return (
    <div className="flex max-w-[100px] flex-col justify-center items-center">
      <img
        src={person.image}
        alt={person.name}
        className="border-2 rounded-full w-20"
      />
      <h3>
        {person.name.length > 10
          ? person.name.slice(0, 10) + "..."
          : person.name}
      </h3>
      <p>
        {person.university.length > 10
          ? person.university.slice(0, 10) + "..."
          : person.university}
      </p>
    </div>
  );
};

export default PersonCard;
