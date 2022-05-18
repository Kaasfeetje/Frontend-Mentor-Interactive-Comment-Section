import React from "react";
import MinusIcon from "../Icons/MinusIcon";
import PlusIcon from "../Icons/PlusIcon";

const Rating = ({ score, className }) => {
    return (
        <div className={`${className} rating`}>
            <PlusIcon />
            <span>{score}</span>
            <MinusIcon />
        </div>
    );
};

export default Rating;
