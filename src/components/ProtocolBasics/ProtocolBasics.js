import React from "react";
import BasicsCard from "../BasicsCard/BasicsCard";
import './styles.scss';

const ProtocolBasics = () => {
    return <div className="container">
        <h3 className="medium-f30">Protocol Basics</h3>
        <div className="cards-container">
            <BasicsCard 
                title={'BASICS'}
                subtitle={'Supply'}
                desc={'New PHM is minted through bonding temporarily as the protocol bootstrapsfunds for the treasury.'}
            />
            <BasicsCard 
                title={'GOVERNANCE'}
                subtitle={'Fully on-chain governed'}
                isPurple
                desc={'Phantom uses Commonwealth.im toenable on-chain governance to ensureunadulterated community ownership'}
            />
            <BasicsCard 
                title={'REWARDS'}
                subtitle={'Early Holder Rewards'}
                desc={'sPHM holders are rewarded with compounded returns, increasing their sPHM balance'}
            />
        </div>
    </div>
}

export default ProtocolBasics;