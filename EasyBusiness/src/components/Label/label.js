import React from 'react';
import './label.css';



const Label = props => {
    return(
        <label  class="lbl">{props.value}</label>
    )
}
export default Label;