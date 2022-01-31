import React from "react";
import './treasury.scss'

const Allocation = ({value, allocatedTo, addSeparator, color}) => {
    return (<div className={"allocation-container "+(addSeparator?"separator":"")}>
        <h1 className="medium-f70">
            {value}
        </h1>
        <p className={"allocated-to "+color}>{allocatedTo}</p>
    </div>);
}

const TreasuryMakeup = () => {
    return (<div className="makeup-container">
        <h3 className="semiBold-f36">Treasury Makeup</h3>
        <div className="allocations">
            <Allocation value={'50%'} allocatedTo={'Stable Assets'} color='medium-f20p'/> 
            <Allocation value={'33%'} allocatedTo={'Accelerator'} addSeparator color='medium-f20g'/> 
            <Allocation value={'17%'} allocatedTo={'Fantom Governance'} color='medium-f20c'/> 
        </div>
    </div>);
}

export default TreasuryMakeup;