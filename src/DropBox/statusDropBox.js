import React from "react";
import { bgColorGreen } from "../Styles/backGroundColor";
import { DefaultDropBox } from "./defaultDropBox";

export function StatusDropBox(props){
    const {width=140, height=35, fontSize=20} = props
    return <DefaultDropBox options={["Einkommen", "Ausgaben"]} onChange={props.onChange} id={props.id} 
                            backgroundColor={bgColorGreen} borderColor={bgColorGreen} borderRadius="10px" width={width} height={height}
                            top={props.top} left={props.left} fontSize={fontSize}/> 
}