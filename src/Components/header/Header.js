import React,{ useState } from "react";
import Slider from "./Slider";
import useWindowScrollPosition from "@rehooks/window-scroll-position";
import Hamburger from "./Hamburger";


function Header(props) {
    const [change, setChange] = useState(false);
    const changePosition = 500;
    
    
    
    let position = useWindowScrollPosition();
    
    if (position.y > changePosition && !change) {
        setChange(true);
    }
    
    if (position.y <= changePosition && change) {
        setChange(false);
    }
    
    let navStyle={
        backgroundColor: change ? "#FFFF2B" : "transparent",
        transition: "background-color .3s ease-in-out",
    }
    
    let headerStyle={
        marginTop: props.phone ?  0 : window.innerHeight,
    }
  
    let scrolledNav=props.phone ? null : "scrolledNav";
    
    let burger;
    if(props.phone){
        burger = <Hamburger drawerToggle={props.drawerToggle} hamburgerClick={props.hamburgerClick}/>
    }
    let navigationBar;
    if(!props.phone){
        navigationBar = <nav className={change ? scrolledNav : null} >
        <ul>
            <li  onClick={props.scrollToTop}><a href="#Home">Ballina</a></li>
            <li onClick={props.scrollToAbout}><a href="#About">Rreth Nesh</a></li>
            <li onClick={props.handleOnClick}><a href="#Services">Sherbimet</a></li>
            <li onClick={props.scrollToContact}><a href="#Contact">Kontakti</a></li>
        </ul>
    </nav>
    }
    return (
        <header ref={props.myDiv} style={headerStyle}>
            <div className="sliderContainer">
                <Slider phone={props.phone}/> 
            </div>
            <div className="yellowSpace" style={props.phone ? null : navStyle}></div>
            <div className={props.phone ? "navBarContainer-phone" : "navBarContainer"}>
            {burger}
            {navigationBar}
            </div> 
        </header>
    )
}

export default Header;