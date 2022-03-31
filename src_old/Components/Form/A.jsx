import React from 'react';

const A = (props)=>{
    return (
        <a href={props.href} className={props.className}>
            {props.text}
        </a>
    )

}

export default A;