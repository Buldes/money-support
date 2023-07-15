import React from "react";
import { StatusDropBox } from "../DropBox/statusDropBox";
import { AddButton } from "../Buttons/addButton";
import { AmoutInput } from "../InputField/amoutInputField";
import { dropBoxColor } from "../Functions/dropBoxColorChange";
import { inputAmout } from "../Functions/getInput";
import { getInputAmout } from "../Functions/getInput";
import { manuelAddData } from "../Functions/DataFunctions/manuelAddData";
import { mobileDevice } from "../Data/bool";

export function CILAddBar(){
    if (!mobileDevice){
        return ( <div style={{display:"flex", flexDirection:"row", justifyContent:"flex-start", position:"relative", top:53, left:-380}}>
                    <StatusDropBox id="ListDropBox" onChange={dropBoxColor}/>
                    <AmoutInput value={inputAmout} onChange={getInputAmout} width={550-245} left={5}/>
                    <AddButton left={10} click={manuelAddData}/>
                </div>)}
    
    else{
        return ( <div style={{display:"flex", flexDirection:"row", justifyContent:"flex-start", position:"relative", top:53, left:-290}}>
                <StatusDropBox id="ListDropBox" onChange={dropBoxColor} height={30} width={100} fontSize={15}/>
                <AmoutInput value={inputAmout} onChange={getInputAmout} width={325-170} height={25} left={5} fontSize={15}/>
                <AddButton left={10} click={manuelAddData} width={30} height={30}/>
            </div>)
    }
}