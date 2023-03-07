import React from "react";
import { defaultTextSytle } from "../Styles/TextStyles";

export function DefaultLable(props){

    const styleTypL = Object.assign({}, defaultTextSytle, props.add)

    return <label id={props.id} style={{
        width:props.width, height:props.height,
        top:props.top, left:props.left, position:"relative", 
        borderRadius:props.borderRadius, border:props.border, 
        fontSize:props.fontSize,
        backgroundColor:props.color,
        textAlign:props.textAlign,
        display:"flex", ...styleTypL}} >{props.text}</label>
}