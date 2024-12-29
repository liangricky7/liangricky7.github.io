import React from "react";
import "./button.css";

const Button = (props) => {
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

export default Button;