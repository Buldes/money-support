import React from "react";
import { centering } from "../Styles/Look";
import { DefaultLable } from "./defaultLable";
import { centeringX } from "../Styles/TextStyles";

export function BankBalanceLable(props){
    const Text = props.text.toLocaleString('de-DE', {minimumFractionDigits: 2, maximumFractionDigits: 2, style: 'currency', currency: 'EUR'})

    return( 
        <div style={{ position:"relative", top:100, ...centeringX}}>
            <DefaultLable id="BankBalance" text={Text} fontSize="60px" color="#3e3e3e" borderRadius="50%" height="300px" width="300px" add={centering}/>
        </div>
)}        