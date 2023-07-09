import React from "react";
import { centering } from "../Styles/Look.js";
import { DefaultButton } from "./defaultButton.js";

export function AddButton(props){
    const {width=35, height=35, borderRadius=10, text="+", fontSize="20px"} = props
    return <DefaultButton name={text} color="#2f9f1f" click={props.click} borderRadius={borderRadius} width={width} height={height} top={props.top} left={props.left} fontSize={fontSize} add={centering}/>
} 
