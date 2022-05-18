import React, { useState } from "react";
import Avatar from "../Avatar/Avatar";
import "./CommentForm.css";

const CommentForm = ({ currentUser, isReply, onSubmit }) => {
    const [content, setContent] = useState("");

    return (
        <form
            className="commentForm"
            onSubmit={(e) => {
                setContent("");
                onSubmit(e, content, isReply);
            }}
        >
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
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
