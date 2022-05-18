import React from "react";
import Avatar from "../Avatar/Avatar";

const CommentForm = ({ currentUser }) => {
    return (
        <form>
            <textarea />
            <div>
                <Avatar
                    image={currentUser.image.png}
                    alt={currentUser.username}
                />
                <button>Send</button>
            </div>
        </form>
    );
};

export default CommentForm;
