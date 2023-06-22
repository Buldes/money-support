import React from "react";
import { RegenertateCILItemList, listItem } from "./genertaeCILItemList";

export function GenerateCIL(){
    RegenertateCILItemList()

    return (<ul id="CostIncomList" style={{top:-10, left:-35, position:"relative"}}>
                {listItem} 
            </ul>)
    
}