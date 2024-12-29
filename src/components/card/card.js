import React from "react";
import "./card.css";

const Card = (props) => {
    const {
        text,
        link
    } = props;

    return (
        <a href={link} target="_blank" rel="noreferrer">
            {text}
        </a>
    )
};

export default Card;