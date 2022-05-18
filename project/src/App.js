import React, { useEffect, useState } from "react";
import CommentContainer from "./components/Comment/CommentContainer";
import CommentForm from "./components/CommentForm/CommentForm";
import initialData from "./data.json";

const App = () => {
    const [comments, setComments] = useState([]);
    const [currentUser, setCurrentUser] = useState();
    useEffect(() => {
        const _comments = localStorage.getItem("comments");
        if (_comments === null) {
            localStorage.setItem(
                "comments",
                JSON.stringify(initialData.comments)
            );
            return setComments(initialData.comments);
        }
        setComments(JSON.parse(_comments));
    }, []);

    useEffect(() => {
        const _currentUser = localStorage.getItem("currentUser");
        if (_currentUser === null) {
            localStorage.setItem(
                "currentUser",
                JSON.stringify(initialData.currentUser)
            );
            return setCurrentUser(initialData.currentUser);
        }
        setCurrentUser(JSON.parse(_currentUser));
    }, []);

    const reloadComments = (updatedComments) => {
        setComments(updatedComments);
    };

    const onPostComment = (e, content) => {
        e.preventDefault();
        const createNew = {
            id: Number(Math.random() * 10000),
            content,
            score: 0,
            createdAt: "now",
            user: currentUser,
            replies: [],
        };

        const updatedComments = [...comments, createNew];
        localStorage.setItem("comments", JSON.stringify(updatedComments));
        reloadComments(updatedComments);
    };

    if (!currentUser || !comments) {
        return <div>Loading...</div>;
    }

    return (
        <main>
            <div>
                {comments.map((comment) => (
                    <CommentContainer
                        key={comment.id}
                        comment={comment}
                        currentUser={currentUser}
                        reloadComments={reloadComments}
                    />
                ))}
            </div>
            <CommentForm currentUser={currentUser} onSubmit={onPostComment} />
            <div class="attribution">
                Challenge by{" "}
                <a
                    href="https://www.frontendmentor.io/challenges/interactive-comments-section-iG1RugEG9/hub/interactive-comments-section-ptzAeai0Cd"
                    target="_blank"
                    rel="noreferrer"
                >
                    Frontend Mentor
                </a>
                .<br /> Coded by{" "}
                <a
                    href="https://github.com/Kaasfeetje"
                    target="_blank"
                    rel="noreferrer"
                >
                    Kaasfeetje
                </a>
                .
            </div>
        </main>
    );
};

export default App;
