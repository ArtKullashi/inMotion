import React from "react";
import About from "./About"
import Services from "./Services"

function Main(props) {
    return (
        <main>
           <About phone={props.phone} focus={props.focusAbout}/>
           <Services phone={props.phone} focus={props.focusServices}/>
        </main>
    )
}

export default Main;