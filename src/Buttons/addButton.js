import React from "react";
import { centering } from "../Styles/Look.js";
import { DefaultButton } from "./defaultButton.js";

export function AddButton(props){
    return <DefaultButton name="+" color="#2f9f1f" click={props.click} borderRadius="10px" width="35px" height="35px" top={props.top} left={props.left} fontSize="20px" add={centering}/>
} 
