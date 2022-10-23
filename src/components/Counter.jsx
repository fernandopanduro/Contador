import React from "react";
import '../css/Counter.css';

function Counter({ numCounter }) {
    return (
        <div className="counter">
            {numCounter}
        </div>
    );
}

export default Counter;