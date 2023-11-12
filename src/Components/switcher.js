import React, { Component } from "react";

class Switcher extends Component{
    render(){
        const { switchToTodo, switchToCompleted, viewMode } = this.props

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
    }
};

export default Switcher;