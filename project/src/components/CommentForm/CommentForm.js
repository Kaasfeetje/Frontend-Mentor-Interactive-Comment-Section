import React from "react";
import Avatar from "../Avatar/Avatar";
import "./CommentForm.css";

const CommentForm = ({ currentUser, isReply }) => {
    return (
        <form className="commentForm">
            <textarea
                rows={3}
                placeholder={`Add a ${isReply ? "reply" : "comment"}`}
            />
            <div>
                <Avatar
                    image={currentUser.image.png}
                    alt={currentUser.username}
                />
                <button type="submit">{isReply ? "Reply" : "Send"}</button>
            </div>
        </form>
    );
};

export default CommentForm;
