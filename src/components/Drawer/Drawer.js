import React from "react";
import {ReactComponent as PhantomLogo} from '../../assets/icons/Phantom-logo.svg'
import './styles.scss'

const PhantomDrawer = () => {
    return <>
    <PhantomLogo width={'6rem'} height={'6rem'}/>
        <p className="drawer-text">Buy</p>
        <p className="drawer-text">Bond</p>
        <p className="drawer-text">Stake</p>
        <p className="drawer-text white">Learn</p>
        </>
}

export default PhantomDrawer;