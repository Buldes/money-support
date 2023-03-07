import { DefaultButton } from "./defaultButton";
import React from "react";
import { bgColor2e } from "../Styles/backGroundColor";
import { centeringX } from "../Styles/TextStyles";

export function SortButton(props){
    const {fontColor="#8f8f8f"} = props
    return <DefaultButton name={props.text} click={props.click} color={bgColor2e} width={props.width} height={35} borderRadius="0px" 
                          top={props.top} left={props.left} fontSize="20px" fontColor={fontColor} add={centeringX} id={props.id}/>
}