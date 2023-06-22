import React from "react";
import { bgColorGreen, bgColorR1 } from "../Styles/backGroundColor";
import { centering } from "../Styles/Look";
import { DefaultLable } from "./defaultLable";

export function ListLable(props){
    const {fontSize=22} = props

    var bgColor = "#5e5e5e"
    if (props.text === "Ausgaben"){
        bgColor = bgColorR1
    }

    if (props.text === "Einkommen"){
        bgColor = bgColorGreen
    }

    return <DefaultLable text={props.text} borderRadius="3px" fontSize={fontSize} top={props.top} left={props.left} width={props.width} id={props.id} color={bgColor} add={centering}/>
}