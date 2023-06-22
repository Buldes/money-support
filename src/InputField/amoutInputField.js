import React from "react";
import { DefaultInputField } from "./defaultInputField";

export function AmoutInput(props){
    const {height=30, fontSize=20} = props
    return <DefaultInputField value={props.value} width={props.width} height={height}
                              top={props.top} left={props.left} onChange={props.onChange}
                              placeholder="Bitte Betrag eingeben..." fontSize={fontSize}/>
}