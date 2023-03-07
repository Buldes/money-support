import React from "react";
import { bgColorGreen } from "../Styles/backGroundColor";
import { DefaultDropBox } from "./defaultDropBox";

export function StatusDropBox(props){
    return <DefaultDropBox options={["Einkommen", "Ausgaben"]} onChange={props.onChange} id={props.id} 
                            backgroundColor={bgColorGreen} borderColor={bgColorGreen} borderRadius="10px" width="140px" height="35px"
                            top={props.top} left={props.left}/> 
}