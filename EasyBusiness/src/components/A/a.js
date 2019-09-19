import React from 'react';
import './a.css';



const A = props => {
    return(
        <a class="a" href={props.href}>{props.value}</a>
    )
}
export default A;