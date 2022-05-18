import React, { useState } from "react";
import CommentForm from "../CommentForm/CommentForm";
import Comment from "./Comment";
import "./Comment.css";

const CommentContainer = ({ comment, currentUser }) => {
    const [replyId, setReplyId] = useState(null);

    return (
        <div className="commentContainer">
            <Comment
                comment={comment}
                onReply={() => setReplyId(comment.id)}
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
                            onReply={() => setReplyId(reply.id)}
                            currentUser={currentUser}
                        />
                        {replyId === reply.id && (
                            <CommentForm currentUser={currentUser} />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default CommentContainer;
