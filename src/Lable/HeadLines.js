import React from "react";
import { bgColor5e } from "../Styles/backGroundColor";
import { centering } from "../Styles/Look";
import { DefaultLable } from "./defaultLable";

export function Headline(props){
    const {color = bgColor5e, fontSize="25px"} = props
    return <DefaultLable fontSize={fontSize} text={props.text} top={props.top} left={props.left} color={color} width={props.width} borderRadius="20px" add={Object.assign({}, centering, props.add)}/>
}