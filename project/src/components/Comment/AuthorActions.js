import React from "react";
import DeleteIcon from "../Icons/DeleteIcon";
import EditIcon from "../Icons/EditIcon";

const AuthorActions = ({ className, isEditing, onUpdate, setIsEditing }) => {
    return (
        <div className={`${className} author-actions`}>
            <div className="delete">
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
