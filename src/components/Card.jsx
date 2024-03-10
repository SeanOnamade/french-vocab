import React from "react";
import "./Card.css";

const Card = (props) => {

    return (

        <div className={`Card ${props.isFlipped ? "flipped" : ""}`} onClick={props.onCardClick}>
            <div className="Card-inner">
                <div className={`Card-front ${props.color}`}>
                    {props.imageUrl ? (
                        <div>
                            <img src={props.imageUrl} alt="Card Image" style={{ width: '120px', maxHeight: '300px' }} />
                            <h1>{props.front}</h1>
                        </div>
                    ) : (
                        <h1>{props.front}</h1>
                    )}
                </div>
                <div className={`Card-back light-${props.color}`}>
                    <h1>{props.back}</h1>
                </div>
            </div> 
        </div>
    )
}

export default Card;