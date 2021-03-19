import React,{ useState } from "react";
import './services.css';


function ServicesItem(props){
    const [clicked, setClicked] = useState(false);
    let cardClass;
    let cardText;
    let cardSubText1;
    let cardSubText2;
    if(props.card===1){
        cardClass=props.phone ?  "services-card1-phone" :"services-card1"
        cardText="TRAJTIMI I PROBLEMEVE TË FUND SHPINËS"
        cardSubText1="Dhembjet dhe shtangimet e fund-shpinës."
        cardSubText2="Radikulopatia lumbale, Hernia diskale, Ishiasi etj"
    }
    else if(props.card===2){
        cardClass=props.phone ?  "services-card2-phone" :"services-card2"
        cardText="TRAJTIMI I LËNDIMEVE SPORTIVE"
        cardSubText1="Tërheqjet dhe këputjet parciale te ligamenteve dhe tendinave. Tendosjet dhe lëndimet e muskujve."
        cardSubText2="Përdredhjet e shputës, traumat ne minisqe etj."
    }
    else if(props.card===3){
        cardClass=props.phone ?  "services-card3-phone" :"services-card3"
        cardText="TRAJTIMET POST OPERATIVE"
        cardSubText1="Tortikolisi (Qafa e shtrembër). Paraliza Cerebrale."
        cardSubText2="Paraliza e nervit Facial, Hemiplegjia apo Hemipareza etj."
    }
    function handleOnClick(){
        setClicked(prevClicked => !prevClicked)
    }
  
    return (
        <div className={cardClass}>
            <h3 className="font">{cardText}</h3>
            <button onClick={handleOnClick}>+</button>
            <div className={clicked ? "h5StyleClicked" : "h5StyleNotClicked"}>
                <h5>{cardSubText1}</h5>
                <h5>{cardSubText2}</h5>
            </div>
        </div>
    )
}
export default ServicesItem;