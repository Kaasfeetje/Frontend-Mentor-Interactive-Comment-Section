import React, { useEffect, useState } from "react";
import Avatar from "../Avatar/Avatar";
import ReplyIcon from "../Icons/ReplyIcon";
import Rating from "../Rating/Rating";
import AuthorActions from "./AuthorActions";

const Comment = ({ comment, onReply, currentUser, reloadComments }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [content, setContent] = useState("");

    useEffect(() => {
        if (comment) setContent(comment.content);
    }, [comment]);

    const onUpdate = () => {
        setIsEditing(false);
        const comments = JSON.parse(localStorage.getItem("comments"));

        const updatedComments = comments.map((_comment) => {
            if (_comment.id === comment.id) {
                return {
                    ..._comment,
                    content,
                };
            }
            _comment.replies = _comment.replies.map((reply) => {
                if (reply.id === comment.id) {
                    console.log("AAAAAA");
                    return {
                        ...reply,
                        content,
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
        <div className={`comment`}>
            <Rating className="desktop-rating" score={comment.score} />
            <div className="full-width">
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
                    {comment.user.username === currentUser.username ? (
                        <AuthorActions
                            className="desktop"
                            isEditing={isEditing}
                            setIsEditing={setIsEditing}
                            onUpdate={onUpdate}
                        />
                    ) : (
                        <div className="desktop reply" onClick={onReply}>
                            <ReplyIcon />
                            Reply
                        </div>
                    )}
                </div>
                {isEditing ? (
                    <textarea
                        rows={3}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                ) : (
                    <p>
                        {comment.replyingTo && (
                            <span className="replyingTo">
                                @{comment.replyingTo}{" "}
                            </span>
                        )}
                        {comment.content}
                    </p>
                )}
                <div className="comment-actions">
                    <Rating score={comment.score} />
                    {comment.user.username === currentUser.username ? (
                        <AuthorActions
                            isEditing={isEditing}
                            setIsEditing={setIsEditing}
                            onUpdate={onUpdate}
                        />
                    ) : (
                        <div className="reply" onClick={onReply}>
                            <ReplyIcon />
                            Reply
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Comment;
