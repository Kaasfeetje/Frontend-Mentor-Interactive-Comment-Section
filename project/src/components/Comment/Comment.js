import React from "react";
import Avatar from "../Avatar/Avatar";
import ReplyIcon from "../Icons/ReplyIcon";
import Rating from "../Rating/Rating";

const Comment = ({ comment, isReply }) => {
    return (
        <div>
            <div>
                <Avatar
                    image={comment.user.image.png}
                    alt={comment.user.username}
                />
                <h5>{comment.user.username}</h5>
                <span>{comment.createdAt}</span>
            </div>
            <p>{comment.content}</p>
            <div>
                <Rating score={comment.score} />
                <div>
                    <ReplyIcon />
                    Reply
                </div>
            </div>
        </div>
    );
};

export default Comment;
