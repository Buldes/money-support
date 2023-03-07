import React from "react";
import { bgColorGreen, bgColorR2 } from "../../Styles/backGroundColor";
import { DefaultPieChart } from "./defaultPieChart";

export function MonthlyPieChart(props){
    const {colors=[bgColorR2, bgColorGreen], borderColor="#2e2e2e", borderWidth=3, innerRadius=80} = props 

    return <DefaultPieChart data={props.data} innerRadius={innerRadius} cornerRadius={10} colors={colors} transperents={1} borderColor={borderColor} borderWidth={borderWidth}/>
}