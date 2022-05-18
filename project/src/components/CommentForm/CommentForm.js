import React from "react";
import Avatar from "../Avatar/Avatar";
import "./CommentForm.css";

const CommentForm = ({ currentUser }) => {
    return (
        <form className="commentForm">
            <textarea rows={3} placeholder="Add a comment" />
            <div>
                <Avatar
                    image={currentUser.image.png}
                    alt={currentUser.username}
                />
                <button type="submit">Send</button>
            </div>
        </form>
    );
};

export default CommentForm;
