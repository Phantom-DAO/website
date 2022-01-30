import React from "react";
import './styles.scss';

const Auction = () => {
    return <div className="auction-container">
        <h5 className="medium-f30">
        Live Now
        </h5>
        <h1 className="semiBold-f52">
        Dutch Auction
        </h1>
        <p className="medium-f20g">Ends February 1st, 2022 at 1:00PM (PST) </p>
        <p className="medium-f20GItalic">or when tokens are sold out, whichever comes first</p>
    </div>
}

export default Auction;