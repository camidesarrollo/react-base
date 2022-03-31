import React from 'react';
import { useState } from "react";

const Input = (props)=>{
    let onChange;
    let disabled = false;

    if(props.onChange != null){
        onChange = props.onChange; 
    }else{
        onChange = "";
    }
    return (
        
        <input id={props.id} type={props.type} name={props.name} placeholder={props.placeholder} autoComplete={props.autoComplete}
        className={props.className}
        required = {props.required} 
        value={props.value}
        onChange={onChange}
        disabled={disabled}/>
    )

}

export default Input;