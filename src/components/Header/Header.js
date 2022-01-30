import React from "react";
import './header.scss';
import { ReactComponent as Logo} from '../../assets/icons/logo.svg'
import { ReactComponent as HamBurger} from '../../assets/icons/hamburger.svg'

const Header = ({onMenuClick}) => {
    return <div className="header-container">
        <HamBurger className="ham" onClick={onMenuClick}/>
        <Logo className="logo" />
        <div className="nav-tabs">
            <p>Buy</p>
            <p>Bond</p>
            <p>Stake</p>
            <p className="white clickable">Learn</p>
        </div>
        <div className="enter-app-container">
            <p className="white">En</p>
            <div className="button-container purp-card">
                <p className="white16" style={{textAlign : 'center'}}>
                    Enter app
                </p>
            </div>
        </div>
    </div>
}

export default Header;