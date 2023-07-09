import React from "react";
import { DefaultLable } from "./defaultLable";

export function TextLable(props){
    const {fontsize = "20px"} = props

    return <DefaultLable fontSize={fontsize} textAlligen="left" borderRadius={props.borderRadius} width={props.width} height={props.height} 
                          top={props.top} left={props.left} add={props.add} text={props.text} id={props.id}/>
}