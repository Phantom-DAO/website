import React from "react";
import "./header.scss";
import { Link } from "@material-ui/core";

import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as HamBurger } from "../../assets/icons/hamburger.svg";

const Header = ({ onMenuClick }) => {
  return (
    <div className="header-container">
      <HamBurger className="ham" onClick={onMenuClick} />
      <Logo className="logo" />
      <div className="nav-tabs">
        <p>Buy</p>
        <p>Bond</p>
        <p>Stake</p>
        <Link
          href="https://www.notion.so/Phantom-Governance-01afd36a7b3c4d838d7456b84724e34e"
          target="_blank"
        >
          <p className="white clickable">Learn</p>
        </Link>
      </div>
      <div className="enter-app-container">
        <p className="white" id="en">
          En
        </p>
        <Link href="https://app.phantomdao.xyz/" target="_blank">
          <div className="button-container purp-card">
            <p className="white16" style={{ textAlign: "center" }}>
              Enter app
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
