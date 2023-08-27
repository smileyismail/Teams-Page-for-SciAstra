import React from "react";

const Advisors = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8 my-16">
      <div className="rounded-lg overflow-hidden p-1 bg-gradient-to-r from-darkPurple to-customPurple">
        <div className="p-2 bg-white rounded-lg overflow-hidden text-center">
          <img
            src="https://www.sciastra.com/teams/dr_omkar.jpg"
            alt="DR Omkar"
            className="rounded-full w-[220px] h-[220px] border-2 mb-4"
          />
          <h2 className="text-lg font-semibold">Dr Omkar</h2>
          <h3>Principal Project Scientist</h3>
          <p className="text-sm">IIT-Madras</p>
        </div>
      </div>
      <div className="rounded-lg overflow-hidden p-1 bg-gradient-to-r from-customPurple to-lightPurple">
        <div className="p-2 bg-white rounded-lg overflow-hidden text-center">
          <img
            src="https://www.sciastra.com/teams/vivek_dwivedi_niser.jpg"
            alt="Vivek Dwivedi"
            className="rounded-full w-[200px] h-[200px] border-2 mb-4 object-cover"
          />
          <h2 className="text-lg font-semibold">Vivek Dwivedi</h2>
          <div className="overflow-hidden p-0.5 bg-gradient-to-r from-darkPurple to-customPurple mt-2">
            <button className="bg-white w-full p-1">Message Him</button>
          </div>
        </div>
      </div>

      <div className="rounded-lg overflow-hidden p-1 bg-gradient-to-r from-customPurple to-lightPurple">
        <div className="p-2 bg-white rounded-lg overflow-hidden text-center">
          <img
            src="https://www.sciastra.com/teams/akhil_tripathi_niser.jpg"
            alt="Vivek Dwivedi"
            className="rounded-full w-[200px] h-[200px] mb-4 object-cover"
          />
          <h2 className="text-lg font-semibold">Akhil Tirphati</h2>
          <div className="overflow-hidden p-0.5 bg-gradient-to-r from-darkPurple to-customPurple mt-2">
            <button className="bg-white w-full p-1">Message Him</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advisors;
