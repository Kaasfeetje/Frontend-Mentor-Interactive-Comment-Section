import React from "react";

const Avatar = ({ image, alt }) => {
    return (
        <img
            className="avatar"
            src={`${process.env.PUBLIC_URL}${image}`}
            alt={alt}
        />
    );
};

export default Avatar;
