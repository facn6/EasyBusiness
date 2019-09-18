import React from 'react';
import './button.css';



const Button = props => {
    return(
        <button type="submit" class="btn" href={props.href}>{props.value}</button>
    )
}
export default Button;