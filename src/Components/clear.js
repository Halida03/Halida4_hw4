import React, { Component } from "react";

class Clear extends Component {
    render(){
        const {clear} = this.props

        return (
            <div className="clear-div">
                <button className="clear" onClick={clear}>Clear</button>
            </div>
        );
    }
};

export default Clear;