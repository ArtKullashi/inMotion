import React from "react";

function Backdrop(props){

    let backdropStyle={
        position: "fixed",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        background: "rgba(0,0,0,0.3)",
        zIndex: 35
    }
    return(
        <div style={backdropStyle} onClick={props.drawerToggle}/>
    )
}

export default Backdrop;