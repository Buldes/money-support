import React from "react";
import { defaultTextSytle } from "../Styles/TextStyles.js";

export function DefaultButton(props){
    const {fontColor="#ffffff"} = props
    const styleTypB = Object.assign({},  defaultTextSytle, {color:fontColor}, props.add)

    return <button  id={props.id} onClick={props.click} style={{
                    backgroundColor: props.color, borderColor: props.color, borderRadius:props.borderRadius,
                    width: props.width, height: props.height, 
                    top:props.top, left:props.left, position: "relative", 
                    fontSize:props.fontSize,
                    display: "flex",
                     ...styleTypB}}>{props.name}</button>
}