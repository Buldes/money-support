import React from "react";
import { DefaultLable } from "./defaultLable";

export function TextLable(props){
    return <DefaultLable fontSize="24px" textAlligen="left" borderRadius={props.borderRadius} width={props.width} height={props.height} 
                          top={props.top} left={props.left} add={props.add} text={props.text} id={props.id}/>
}