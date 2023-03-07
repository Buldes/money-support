import React from "react";
import { UpdateCIL } from "../Functions/updateCIL.js";
import { bgColorR1 } from "../Styles/backGroundColor.js";
import { centering } from "../Styles/Look.js";
import { DefaultButton } from "./defaultButton.js";


export function DeleteButton(props){
    return <DefaultButton name="X" color={bgColorR1} borderRadius="5px" width="25px" height="25px" top={props.top} left={props.left} id={props.id} add={Object.assign({}, centering,  {color:"black"})}/>
}