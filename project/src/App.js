import React from "react";
import CommentContainer from "./components/Comment/CommentContainer";
import CommentForm from "./components/CommentForm/CommentForm";
import initialData from "./data.json";

const App = () => {
    return (
        <main>
            <div>
                {initialData.comments.map((comment) => (
                    <CommentContainer key={comment.id} comment={comment} />
                ))}
            </div>
            <CommentForm currentUser={initialData.currentUser} />
        </main>
    );
};

export default App;
