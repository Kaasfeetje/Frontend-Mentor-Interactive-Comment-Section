import React, { useState } from "react";
import CommentForm from "../CommentForm/CommentForm";
import Comment from "./Comment";
import "./Comment.css";

const CommentContainer = ({ comment, currentUser }) => {
    const [replyId, setReplyId] = useState(null);

    const onChangeReply = (id) => {
        if (id === replyId) {
            return setReplyId(null);
        }
        setReplyId(id);
    };

    return (
        <div className="commentContainer">
            <Comment
                comment={comment}
                onReply={() => onChangeReply(comment.id)}
                currentUser={currentUser}
            />
            {replyId === comment.id && (
                <CommentForm currentUser={currentUser} />
            )}
            <div className="replyContainer">
                {comment.replies.map((reply) => (
                    <React.Fragment key={reply.id}>
                        <Comment
                            key={reply.id}
                            comment={reply}
                            onReply={() => onChangeReply(reply.id)}
                            currentUser={currentUser}
                        />
                        {replyId === reply.id && (
                            <CommentForm currentUser={currentUser} isReply />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default CommentContainer;
