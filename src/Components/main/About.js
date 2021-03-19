import React from "react";
import './about.css';
import aboutlogo from './about2.svg';

function About(props){
    if(props.phone){
        return (
            <div className="about-text-phone" ref={props.focus}>
                    <img alt="Nita dhe Tritani" src={aboutlogo}/>
                <div style={{textAlign: "center", maxWidth: "300px"}}>
                    <h4>Inmotion është e fokusuar në trajtimin e lëndimeve dhe sëmundjeve muskulo-skeletale duke iu përmbajtur standardeve më të larta të praktikës klinike</h4>
                    <h4>Inmotion Fizioterapia është ordinancë fizioterapeutike, me vendndodhje në Gjilan, Kosovë. </h4>
                    <div className="about-text-bot-phone">
                        <div style={{marginRight: "30px"}}>
                            <h4 style={{paddingBottom: 0}}>PT. Nita Gjikolli</h4>
                            <h4 style={{color: "#FFFF2B"}}>Fizioterapeute</h4>
                        </div>
                        <div>
                            <h4 style={{paddingBottom: 0}}>PT. Tritan Maliqi</h4>
                            <h4 style={{color: "#FFFF2B"}}>Fizioterapeut</h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return (
            <div className="about-text" ref={props.focus}>
                    <img alt="Nita dhe Tritani" src={aboutlogo}/>
                <div>
                    <h3>Inmotion është e fokusuar në trajtimin e lëndimeve dhe sëmundjeve muskulo-skeletale duke iu përmbajtur standardeve më të larta të praktikës klinike.</h3>
                    <h3>Inmotion Fizioterapia është ordinancë fizioterapeutike, me vendndodhje në Gjilan, Kosovë. </h3>
                    <div className={props.phone ? "about-text-bot-phone" : "about-text-bot"}>
                        <div style={{marginRight: "30px"}}>
                            <h3 style={{paddingBottom: 0}}>PT. Nita Gjikolli</h3>
                            <h3 style={{color: "#FFFF2B"}}>Fizioterapeute</h3>
                        </div>
                        <div>
                            <h3 style={{paddingBottom: 0}}>PT. Tritan Maliqi</h3>
                            <h3 style={{color: "#FFFF2B"}}>Fizioterapeut</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default About;