import React from "react";
import ServicesItem from "./ServicesItem"
import './services.css';


function Services(props) {
    return (
        <div className={props.phone ? "services-container-phone" : "services-container"} ref={props.focus}>
            <ServicesItem card={1} phone={props.phone} />
            <ServicesItem card={2} phone={props.phone} />
            <ServicesItem card={3} phone={props.phone} />
        </div>
    )
}

export default Services;