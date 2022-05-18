import React, { useState } from "react";
import CommentForm from "../CommentForm/CommentForm";
import Comment from "./Comment";
import "./Comment.css";

const CommentContainer = ({ comment, currentUser, reloadComments }) => {
    const [replyId, setReplyId] = useState(null);

    const onChangeReply = (id) => {
        if (id === replyId) {
            return setReplyId(null);
        }
        setReplyId(id);
    };

    const onSendReply = (e, content, replyId) => {
        e.preventDefault();
        const comments = JSON.parse(localStorage.getItem("comments"));
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));

        const _comment = getComment(comments, replyId);

        const createNew = {
            id: Number(Math.random() * 10000),
            content,
            score: 0,
            createdAt: "now",
            user: currentUser,
            replyingTo: _comment.user.username,
        };

        const updatedComments = comments.map((__coment) => {
            if (__coment.id === _comment.id) {
                const newReplies = [...__coment.replies, createNew];
                return {
                    ...__coment,
                    replies: newReplies,
                };
            }
            return __coment;
        });

        setReplyId(null);

        localStorage.setItem("comments", JSON.stringify(updatedComments));
        reloadComments(updatedComments);
    };

    const getComment = (comments, replyId) => {
        return comments.find((_comment) => {
            if (_comment.id === replyId) {
                return true;
            }
            const reply = _comment.replies.find((_reply) => {
                if (_reply.id === replyId) {
                    return true;
                }
                return false;
            });
            if (reply) {
                return true;
            }
            return false;
        });
    };

    return (
        <div className="commentContainer">
            <Comment
                comment={comment}
                onReply={() => onChangeReply(comment.id)}
                currentUser={currentUser}
                reloadComments={reloadComments}
            />
            {replyId === comment.id && (
                <CommentForm
                    currentUser={currentUser}
                    onSubmit={onSendReply}
                    isReply={replyId}
                />
            )}
            <div className="replyContainer">
                {comment.replies.map((reply) => (
                    <React.Fragment key={reply.id}>
                        <Comment
                            key={reply.id}
                            comment={reply}
                            onReply={() => onChangeReply(reply.id)}
                            currentUser={currentUser}
                            reloadComments={reloadComments}
                        />
                        {replyId === reply.id && (
                            <CommentForm
                                currentUser={currentUser}
                                isReply={reply.id}
                                onSubmit={onSendReply}
                            />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default CommentContainer;
