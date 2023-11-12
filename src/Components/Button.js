import React, { Component } from "react";

class Button extends Component {
    render() {
        const { onclick } = this.props;

            return (
                <div className="todo-input-item">
                    <button className="primary-btn" type="button" onClick={onclick}>
                        Add
                    </button>
                </div>
        );
    }
}

export default Button;
