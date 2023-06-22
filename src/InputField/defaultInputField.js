import React from "react";
import { bgColor5e } from "../Styles/backGroundColor";
import { defaultTextSytle } from "../Styles/TextStyles";

export function DefaultInputField(props){
    const {fontSize=20} = props
    return <input value={props.value} placeholder={props.placeholder} onChange={props.onChange}
                  style={{backgroundColor: bgColor5e, border: "3px solid #000000", borderRadius: "10px", fontSize:fontSize,
                  position: "relative", width:props.width, height:props.height, top:props.top, left:props.left, 
                  ...Object.assign({}, defaultTextSytle, props.add)}}></input>
}

          