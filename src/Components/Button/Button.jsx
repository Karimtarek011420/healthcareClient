import './Button.css';
import {Link} from 'react-router-dom';
import React from 'react';

const STYLES = ["btn--primary", "btn--outline", "btn--outline2", "btn--white", "btn--navy", "btn--white2", "btn--green", "btn--circular", "btn--orange", "btn--circular2", "btn--circular-line"]
const SIZES = ["btn--medium", "btn--large"]

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) 
        ? buttonStyle 
        : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) 
        ? buttonStyle 
        : SIZES[0];

    return (
            <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}>
                {children}
            </button>
    )
}