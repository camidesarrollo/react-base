import React from 'react';

const Button = (props)=>{
    let funcionOnclikc;
    if(props.onClick !=null){
        funcionOnclikc = props.onClick;
    }
    return (
        <button type={props.type}
                        className={props.className}     onClick={funcionOnclikc}>
                       {props.text}
                   
                    </button>
    )

}

export default Button;