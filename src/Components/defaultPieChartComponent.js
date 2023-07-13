import React from "react";
import { bgColor2e, bgColor5e , bgColorR2, bgColorGreen } from "../Styles/backGroundColor";
import { Headline } from "../Lable/HeadLines";
import { MonthlyPieChart } from "../Charts/PieCharts/monthlyPieChart";

export function PieChartComponent(props){

    const {bgColor=bgColor2e, lableBGColor=bgColor5e, piChartSize="300px", lableX="12%", lableY="10px", divWidth=400, divHeight=300,
           divBorderRadius="25px", data=[{x: "Ausgaben", y: parseFloat(props.cost) + 0.001}, {x: "Einkommen", y: parseFloat(props.incomm) + 0.001}],
            piChartColors=[bgColorR2, bgColorGreen]}  = props

    return (
        <div className="Pi Chart" style={{position: "relative", transform:"flex", top:props.top, left:props.left, width:divWidth, 
                     height:divHeight, borderRadius:divBorderRadius, backgroundColor:bgColor}}>
            <div>
                <Headline width={piChartSize} left={lableX} top={lableY} text="Diesen Monat" color={lableBGColor}/>
            </div>
          <MonthlyPieChart data={data} colors={piChartColors} borderColor={bgColor}/>
        </div>
    )}