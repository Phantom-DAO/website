import React from "react";
import "./styles.scss";
import { ReactComponent as ArrowRight } from "../../assets/icons/arrow-right.svg";
import { ReactComponent as Waves } from "../../assets/icons/waves.svg";

const BasicsCard = ({ title, subtitle, desc, link }) => {
  return (
    <div className="card-container">
      <div className="content">
        <p>{title}</p>
        <h3 className="medium-f30">{subtitle}</h3>
        <p>{desc}</p>
      </div>
      <div className="learn-container">
        <a href={link}>
          <h4 className="medium-f20">Learn more</h4>
        </a>
        <ArrowRight />
      </div>
      <div className="waves-container">
        <Waves />
      </div>
    </div>
  );
};

export default BasicsCard;
