import React from "react";

const Button = ({onclick}) => {
    return (
        <div className="todo-input-item"> 
            <button className="primary-btn" type="button" onClick={onclick}>
                Add
            </button>
        </div>
    );
};

export default Button;