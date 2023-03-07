import React from "react";
import { DefaultInputField } from "./defaultInputField";

export function AmoutInput(props){
    return <DefaultInputField value={props.value} width={props.width} height="30px" 
                              top={props.top} left={props.left} onChange={props.onChange}
                              placeholder="Bitte Betrag eingeben..."/>
}