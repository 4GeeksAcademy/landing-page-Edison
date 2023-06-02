import React from "react";

let Jumbotron = (props) =>{
    return(
        <div className="card" >
            <div className="card-body d-flex align-items-center justify-content-center flex-column"  style={ {height:"450px" }}>
                <h1 className="card-title mb-4">{props.title}</h1>
                <p className="card-text m-5">{props.description}</p>
                <a href="#" className="btn btn-primary mt-4">{props.btnTitle}</a>
            </div>
        </div>
    )
}

export default Jumbotron;