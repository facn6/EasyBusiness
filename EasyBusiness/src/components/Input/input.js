import React from 'react';
import './input.css';



const Input = props => {
    return(
        <input  class="input" placeholder={props.placeholder}/>
    )
}
export default Input;