import React from "react";

import UniversityCard from "../UI/UniversityCard";
import PersonCard from "../UI/PersonCard";

import { universities } from "../../utils/universities";
import { mentors } from "../../utils/mentors";
import Advisors from "./Advisors";

const Teams = () => {
  return (
    <div className="pt-16">
      <div className=" px-[8%] text-center">
        <h1 className="font-black text-5xl text-transparent bg-clip-text bg-gradient-to-br from-customPurple to-darkPurple">
          Our Teams
        </h1>
        <h3 className="font-semibold text-3xl mt-3 text-transparent bg-clip-text bg-gradient-to-br from-customPurple to-darkPurple">
          Learn form Scientists, research scholars from tne top Institutes in
          the world.
        </h3>
      </div>

      <ul className="flex flex-wrap justify-center items-end gap-8 my-12 px-[4%]">
        {universities.map((item, idx) => (
          <li key={idx} className="flex-[1 1 33.33%]">
            <UniversityCard university={item} />
          </li>
        ))}
        <li className="flex-[1 1 33.33%]">
          <h3 className="font-semibold text-3xl mt-3 text-transparent bg-clip-text bg-gradient-to-br from-customPurple to-darkPurple text-center my-4">
            ...and so on.
          </h3>
        </li>
      </ul>

      <h1 className="font-black text-5xl text-transparent bg-clip-text bg-gradient-to-br from-customPurple to-darkPurple text-center mt-24">
        Meet your mentors
      </h1>

      <ul className="flex flex-wrap justify-center items-end gap-14 my-16 px-[4%]">
        {mentors.map((item, idx) => (
          <li key={idx}>
            <PersonCard person={item} />
          </li>
        ))}
      </ul>

      <h1 className="font-black text-5xl text-transparent bg-clip-text bg-gradient-to-br from-customPurple to-darkPurple text-center mt-24 pl-[5%]">
        Mentors and Advisors
      </h1>

      <Advisors />
    </div>
  );
};

export default Teams;
