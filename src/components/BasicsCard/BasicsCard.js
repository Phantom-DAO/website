import React from "react";
import './styles.scss';
import { ReactComponent as  ArrowRight} from '../../assets/icons/arrow-right.svg'
import { ReactComponent as  Waves} from '../../assets/icons/waves.svg'


const BasicsCard = ({title, subtitle, desc, isPurple}) => {
    return <div className={isPurple? "purple-container" : "card-container"}>
        <div className="content">
            <p className={isPurple && "regular-f20"}>{title}</p>
            <h3 className="medium-f30">{subtitle}</h3>
            <p className={isPurple && "regular-f20"}>{desc}</p>
        </div>
        <div className="learn-container">
            <h4 className="medium-f20">Learn more</h4>
            <ArrowRight />
        </div>
        <div className="waves-container">
            <Waves /> 
        </div>
    </div>
}

export default BasicsCard;