import React from "react";
import BasicsCard from "../BasicsCard/BasicsCard";
import "./styles.scss";

const ProtocolBasics = () => {
  return (
    <div className="container">
      <h3 className="medium-f30">Protocol Basics</h3>
      <div className="cards-container">
        <BasicsCard
          title={"BASICS"}
          subtitle={"Supply"}
          desc={
            "New PHM is minted through bonding temporarily as the protocol bootstrapsfunds for the treasury."
          }
          link={
            "https://ancient-hat-323.notion.site/Protocol-Mechanics-Basics-3325e3d3e9a34a0c85d9ee1cfbd0a461"
          }
        />
        <BasicsCard
          title={"GOVERNANCE"}
          subtitle={"Fully on-chain governed"}
          link={
            "https://ancient-hat-323.notion.site/Phantom-Governance-01afd36a7b3c4d838d7456b84724e34e"
          }
          desc={
            "Phantom uses Commonwealth.im toenable on-chain governance to ensureunadulterated community ownership"
          }
        />
        <BasicsCard
          title={"REWARDS"}
          subtitle={"Early Holder Rewards"}
          link={
            "https://ancient-hat-323.notion.site/Staking-Bonding-Dilution-05313fb88eac4b94b903366a82020c26"
          }
          desc={
            "sPHM holders are rewarded with compounded returns, increasing their sPHM balance"
          }
        />
      </div>
    </div>
  );
};

export default ProtocolBasics;
