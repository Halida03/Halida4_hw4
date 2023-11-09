import React from "react";

const Clear = ({clear}) => {
    return (
        <div className="clear-div">
            <button className="clear" onClick={clear}>Clear</button>
        </div>
    );
};

export default Clear;