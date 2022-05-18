import React from "react";
import MinusIcon from "../Icons/MinusIcon";
import PlusIcon from "../Icons/PlusIcon";

const Rating = ({ score, className, id, reloadComments }) => {
    const onUpdate = (dx) => {
        const comments = JSON.parse(localStorage.getItem("comments"));

        const updatedComments = comments.map((_comment) => {
            if (_comment.id === id) {
                let newscore = score + dx;
                if (newscore < 0) {
                    newscore = 0;
                }
                return {
                    ..._comment,
                    score: newscore,
                };
            }
            _comment.replies = _comment.replies.map((reply) => {
                if (reply.id === id) {
                    let newscore = score + dx;
                    if (newscore < 0) {
                        newscore = 0;
                    }
                    return {
                        ...reply,
                        score: newscore,
                    };
                }
                return reply;
            });
            return _comment;
        });
        localStorage.setItem("comments", JSON.stringify(updatedComments));
        reloadComments(updatedComments);
    };

    return (
        <div className={`${className} rating`}>
            <div onClick={() => onUpdate(1)}>
                <PlusIcon />
            </div>
            <span>{score}</span>
            <div onClick={() => onUpdate(-1)}>
                <MinusIcon />
            </div>
        </div>
    );
};

export default Rating;
