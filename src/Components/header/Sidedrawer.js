import React from "react";
import "./sidedrawer.css";

function Sidedrawer(props){
    let drawerClass= "side-drawer";
    if(props.show){
        drawerClass ="side-drawer open";
    }
    return(
        <nav className={drawerClass}>
            <ul>
                <li  onClick={props.scrollToTop}><a href="#Home">Ballina</a></li>
                <li onClick={props.scrollToAbout}><a href="#About">Rreth Nesh</a></li>
                <li onClick={props.handleOnClick}><a href="#Services">Sherbimet</a></li>
                <li onClick={props.scrollToContact}><a href="#Contact">Kontakti</a></li>
            </ul>
        </nav>
    )
}

export default Sidedrawer;