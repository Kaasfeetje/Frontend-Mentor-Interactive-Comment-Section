import React from "react";
import MinusIcon from "../Icons/MinusIcon";
import PlusIcon from "../Icons/PlusIcon";

const Rating = ({ score }) => {
    return (
        <div className="rating">
            <PlusIcon />
            <span>{score}</span>
            <MinusIcon />
        </div>
    );
};

export default Rating;
