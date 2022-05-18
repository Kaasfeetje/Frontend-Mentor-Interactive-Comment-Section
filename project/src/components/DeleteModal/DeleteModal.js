import React from "react";
import "./DeleteModal.css";

const DeleteModal = ({ onCancel, id, reloadComments }) => {
    const onDelete = () => {
        const comments = JSON.parse(localStorage.getItem("comments"));
        console.log(id);
        const isReply =
            comments.find((_comment) => _comment.id === id) === undefined;
        console.log(isReply);
        let updatedComments;
        if (!isReply) {
            updatedComments = comments.filter((_comment) => {
                if (_comment.id === id) {
                    return false;
                }
                return true;
            });
        } else {
            updatedComments = comments.map((_comment) => {
                const updatedReplies = _comment.replies.filter(
                    (reply) => reply.id !== id
                );
                return {
                    ..._comment,
                    replies: updatedReplies,
                };
            });
        }
        localStorage.setItem("comments", JSON.stringify(updatedComments));
        reloadComments(updatedComments);
    };

    return (
        <div className="modal-container">
            <div onClick={() => onCancel()} className="backdrop"></div>
            <div onClick={(e) => e.stopPropagation()} className="modal">
                <h2>Delete comment</h2>
                <p>
                    Are you sure you want to delete this comment? This action
                    cannot be undone.
                </p>
                <div className="actions">
                    <button onClick={() => onCancel()} className="cancel">
                        No, cancel
                    </button>
                    <button onClick={onDelete}>Yes, delete</button>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;
