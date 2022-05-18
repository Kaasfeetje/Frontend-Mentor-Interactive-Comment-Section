import React, { useState } from "react";
import DeleteModal from "../DeleteModal/DeleteModal";
import DeleteIcon from "../Icons/DeleteIcon";
import EditIcon from "../Icons/EditIcon";

const AuthorActions = ({
    className,
    isEditing,
    onUpdate,
    setIsEditing,
    reloadComments,
    id,
}) => {
    const [deleteOpen, setDeleteOpen] = useState(false);

    return (
        <div className={`${className} author-actions`}>
            {deleteOpen && (
                <DeleteModal
                    reloadComments={reloadComments}
                    id={id}
                    onCancel={() => setDeleteOpen(false)}
                />
            )}
            <div className="delete" onClick={(e) => setDeleteOpen(true)}>
                <DeleteIcon />
                <span>Delete</span>
            </div>
            {isEditing ? (
                <div className="update" onClick={onUpdate}>
                    Update
                </div>
            ) : (
                <div className="edit" onClick={() => setIsEditing(!isEditing)}>
                    <EditIcon />
                    <span>Edit</span>
                </div>
            )}
        </div>
    );
};

export default AuthorActions;
