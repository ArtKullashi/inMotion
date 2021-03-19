import React from "react";
import "./hamburger.css";

function Hamburger(props){
    const lineStyling = props.hamburgerClick ? "toggle-button__line-clicked" : "toggle-button__line";
    const buttonStyling = props.hamburgerClick ? "toggle-button" : "toggle-button-notclicked";
    return(
        <button className={buttonStyling} onClick={props.drawerToggle}>
            <div className={lineStyling}></div>
            <div className={lineStyling}></div>
            <div className={lineStyling}></div>
        </button>
    )
}
export default Hamburger;