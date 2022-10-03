import React from 'react';
import '../css/Button.css';

function Button({ text, btn, onClick }) {
    return (
        <button className={btn ? 'btnClick' : 'btnRestart'} onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;