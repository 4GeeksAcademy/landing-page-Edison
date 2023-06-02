import React from "react";

let Footer = (props) =>{
    return(
        <div className="bg-dark text-white d-flex align-items-center justify-content-center mt-4" style={ {height:"200px" }}>
           <p><i>{props.description}</i></p>
        </div>
    )
}

export default Footer;