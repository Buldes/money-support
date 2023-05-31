import React from "react";
import { centering } from "../Styles/Look";
import { DefaultLable } from "./defaultLable";
import { centeringX } from "../Styles/TextStyles";

export function BankBalanceLable(props){
    const Text = props.text.toLocaleString('de-DE', {minimumFractionDigits: 2, maximumFractionDigits: 2, style: 'currency', currency: 'EUR'})
    const {top=100, fontSize="60px", size="300px"} = props
    return( 
        <div style={{ position:"relative", top:top, ...centeringX}}>
            <DefaultLable id="BankBalance" text={Text} fontSize={fontSize} color="#3e3e3e" borderRadius="50%" height={size} width={size} add={centering}/>
        </div>
)}        