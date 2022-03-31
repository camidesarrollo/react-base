import * as React from 'react';
import Select from 'react-select'
import { useState } from "react";
import ReactSelect from "react-select";


const MySelect = (props)=>{

  
  return (    
    <Select
    options={props.options}
    value={props.value}
    onChange={props.onChange}
    defaultValue={{ label: 'Elija una opción', value: "" }}
    />
  )

}

export default MySelect;