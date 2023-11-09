import React from "react";

const Switcher = ({ switchToTodo, switchToCompleted, viewMode }) => {
    return (
        <div className="btn-area">
            <button
                className={`secondaryBtn ${viewMode === "todo" ? "active" : ""}`}
                onClick={switchToTodo}
            >
                To Do
            </button>
            <button
                className={`secondaryBtn ${viewMode === "completed" ? "active" : ""}`}
                onClick={switchToCompleted}
            >
                Completed
            </button>
        </div>
    );
};

export default Switcher;