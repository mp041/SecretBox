import React from "react";
import ReactDOM from "react-dom";





function Footer(){

    const y = new Date();
    const year = y.getFullYear();


    return <footer>
        <p>copyright &copy; {year}</p> 
    </footer>
}

export default Footer;