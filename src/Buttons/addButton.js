import React from "react";
import { centering } from "../Styles/Look.js";
import { DefaultButton } from "./defaultButton.js";

export function AddButton(props){
    const {width=35, height=35, borderRadius=10} = props
    return <DefaultButton name="+" color="#2f9f1f" click={props.click} borderRadius={borderRadius} width={width} height={height} top={props.top} left={props.left} fontSize="20px" add={centering}/>
} 
