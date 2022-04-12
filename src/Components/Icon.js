import React from 'react';
import * as FontAwesome from 'react-icons/fa';
import * as Ionicons5 from "react-icons/io5";
import * as CSSGG from "react-icons/cg";
import * as AiOutline from "react-icons/ai";
import * as Gr from "react-icons/gr";
import * as Hi   from "react-icons/hi";
import * as Ai  from "react-icons/ai";
import * as Fi from "react-icons/fi";
import * as Ri from "react-icons/ri";

const Icon = (props)=>{
    const { iconName, size, color, tipo, classNameProps } = props;
    let icon = "";
    if(tipo === "fa"){
       icon = React.createElement(FontAwesome[iconName],{className: classNameProps});
    }else if(tipo === "io5"){
        icon = React.createElement(Ionicons5[iconName],{className: classNameProps});
    }else if(tipo === "cg"){
        icon = React.createElement(CSSGG[iconName],{className: classNameProps});
    }else if(tipo === "ai"){
        icon = React.createElement(AiOutline[iconName],{className: classNameProps});
    }else if(tipo === "gr"){
        icon = React.createElement(Gr[iconName],{className: classNameProps});
    }else if(tipo === "hi"){
        icon = React.createElement(Hi[iconName],{className: classNameProps});
    }else if(tipo === "ai"){
        icon = React.createElement(Ai[iconName],{className: classNameProps});
    }else if(tipo === "fi"){
        icon = React.createElement(Fi[iconName],{className: classNameProps});
    }else if(tipo === "ri"){
        icon = React.createElement(Ri[iconName],{className: classNameProps});
    }
    return (
        <div style={{ fontSize: size, color: color, marginRight: '9px' }}>{icon}</div>
    )

}

export default Icon;
