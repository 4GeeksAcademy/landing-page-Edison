import React from "react";

let Card = (props) =>{
    return(
        <div className="card mt-2">
            <img src={props.imgUrl} alt="..."/>
            <div className="card-body text-center">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href="#" className="btn btn-primary">{props.btnTitle}</a>
            </div>
        </div>
    )
}

export default Card;