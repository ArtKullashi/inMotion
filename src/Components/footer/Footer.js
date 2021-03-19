import React from "react";
import './footer.css';
import facebookSvg from './facebook.svg';
import instagramSvg from './instagram.svg';

function Footer(props) {
    return (
        <footer className={props.phone ? "footer-phone" : "footer"} ref={props.focusContact}>
                <div style={props.phone ? {display: "none"} : {maxWidth: "200px", paddingRight: "70px"}}>
                    <h2>inmotion fizioterapia</h2>
            </div>
            <div className={props.phone ? "footerText-phone" : "footerText"}>
                <div style={{paddingRight: "50px"}}>
                    <h2 style={props.phone ? {maxWidth: "200px", paddingBottom: "50px"} : {display: "none"}}>inmotion fizioterapia</h2>
                    <hr/>
                    <h4>Ballina</h4>
                    <h4>Rreth nesh</h4>
                    <h4>Shërbimet</h4>
                </div>
                <div style={{paddingRight: "50px"}}>
                    <hr/>
                    <h4>info@inmotionfizioterapia.com</h4>
                    <h4>rruga Prishtinës, 6 (afër tunelave) 60000</h4>
                    <h4>Gjilan, Kosovë</h4>
                </div>
                <div>
                    <a href="https://www.facebook.com/inmotionfizioterapia"><img src={facebookSvg} alt="facebook logo"/> </a>
                    <a href="https://www.instagram.com/inmotionfizioterapia/"><img src={instagramSvg} alt="instagram logo"/> </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;