import React from "react";
import "./card.css";

const Card = (props) => {
    const {
        title,
        text,
        link
    } = props;

    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    )
};

export default Card;