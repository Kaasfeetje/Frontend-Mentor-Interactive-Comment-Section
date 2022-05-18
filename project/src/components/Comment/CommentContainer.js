import React from "react";
import Comment from "./Comment";

const CommentContainer = ({ comment }) => {
    return (
        <div>
            <Comment comment={comment} />
            <div>
                {comment.replies.map((reply) => (
                    <Comment key={reply.id} comment={reply} isReply />
                ))}
            </div>
        </div>
    );
};

export default CommentContainer;
