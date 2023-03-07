import React from "react";
import { StatusDropBox } from "../DropBox/statusDropBox";
import { AddButton } from "../Buttons/addButton";
import { AmoutInput } from "../InputField/amoutInputField";
import { dropBoxColor } from "../Functions/dropBoxColorChange";
import { inputAmout } from "../Functions/getInput";
import { getInputAmout } from "../Functions/getInput";
import { manuelAddData } from "../Functions/DataFunctions/manuelAddData";

export function CILAddBar(){
    return ( <div style={{display:"flex", flexDirection:"row", justifyContent:"flex-start", position:"relative", top:53, left:-475}}>
                <StatusDropBox id="ListDropBox" onChange={dropBoxColor}/>
                <AmoutInput value={inputAmout} onChange={getInputAmout} width={650-245} left={5}/>
                <AddButton left={10} click={manuelAddData}/>
            </div>)
}