import React from "react";
import EAM_Team from "../components/Team/Teams";
import CeoCo from "../components/Team/Ceo_Co";

const OurTeam = () => {
  return (
    <div>
        <h1 className="font-thin text-8xl justify-center mt-20 text-center">Meet Out Leaders</h1>
      <div>
        <CeoCo />
      </div>
      <div>
        <EAM_Team />
      </div>
    </div>
  );
};

export default OurTeam;
