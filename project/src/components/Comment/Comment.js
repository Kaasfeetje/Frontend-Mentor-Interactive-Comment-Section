import React from "react";
import Avatar from "../Avatar/Avatar";
import DeleteIcon from "../Icons/DeleteIcon";
import EditIcon from "../Icons/EditIcon";
import ReplyIcon from "../Icons/ReplyIcon";
import Rating from "../Rating/Rating";

const Comment = ({ comment, onReply, currentUser }) => {
    return (
        <div className={`comment`}>
            <div className="comment-head">
                <Avatar
                    image={comment.user.image.png}
                    alt={comment.user.username}
                />
                <h5>{comment.user.username}</h5>
                {comment.user.username === currentUser.username && (
                    <div className="you">you</div>
                )}
                <span>{comment.createdAt}</span>
            </div>
            <p>{comment.content}</p>
            <div className="comment-actions">
                <Rating score={comment.score} />
                {comment.user.username === currentUser.username ? (
                    <div className="author-actions">
                        <div className="delete">
                            <DeleteIcon />
                            <span>Delete</span>
                        </div>
                        <div className="edit">
                            <EditIcon />
                            <span>Edit</span>
                        </div>
                    </div>
                ) : (
                    <div className="reply" onClick={onReply}>
                        <ReplyIcon />
                        Reply
                    </div>
                )}
            </div>
        </div>
    );
};

export default Comment;
