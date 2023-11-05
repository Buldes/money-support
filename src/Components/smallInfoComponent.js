import React from "react";
import { Headline } from "../Lable/HeadLines";
import { TextLable } from "../Lable/textLable";
import { bgColor5e } from "../Styles/backGroundColor";
import { mobileDevice } from "../Data/bool";

export function SmallInfoComponent(props){
    if (!mobileDevice){
        const {bgColor=bgColor5e, headLine="Ausgaben", componentX="65%", componentY=-110, componentWidth="300px", textLableTop=15, textLableLeft=20,
               lable1Text="Durchschnitt: " + props.avarge + "€", lable2Text="Diesen Monat: " + props.cost + "€", lableHight=100, borderRadius="10px", fontSize="24px"} = props

        return (
            <div style={{position:"relative"}}>
                <Headline text={headLine} top={componentY} left={componentX} width={componentWidth}/>
                <div style={{position:"relative", height:lableHight, width:componentWidth, left:componentX, top:(componentY+10), backgroundColor:bgColor, borderRadius:borderRadius}}>
                    <TextLable id="MonthCostAvarge" top={textLableTop} left={textLableLeft} text={lable1Text} fontsize={fontSize} add={{whiteSpace:"nowrap", transform: "flex"}}/>
                    <TextLable id="MonthCost" top={textLableTop*2} left={textLableLeft} text={lable2Text} fontsize={fontSize} add={{whiteSpace:"nowrap", transform: "flex"}}/>
                </div>
            </div>
        )}
    
    else{
        const {bgColor=bgColor5e, headLine="Ausgaben", componentX="10px", componentY=50, componentWidth="calc(100% - 20px)", textLableTop=15,
        lable1Text="Durchschnitt\n" + props.avarge + "€", lable2Text="Diesen Monat\n" + props.cost + "€", lableHight=70, borderRadius="10px", fontSize="18px"} = props

        return (
            <div style={{position:"relative"}}>
                <Headline text={headLine} top={componentY} left={componentX} width={componentWidth} fontSize="22px"/>
                <div style={{position:"relative", height:lableHight, width:componentWidth, left:componentX, top:(componentY+10), backgroundColor:bgColor, borderRadius:borderRadius, display:"flex", flexDirection:"column"}}>
                    <TextLable id="MonthCostAvarge" top={textLableTop} marginLeft={"15%"} text={lable1Text} fontsize={fontSize} add={{whiteSpace:"pre-wrap", transform: "flex"}}/>
                    <TextLable id="MonthCost" top={textLableTop * -1 * 1.8} marginLeft={"55%"} text={lable2Text} fontsize={fontSize} add={{whiteSpace:"pre-wrap", transform: "flex"}}/>
                </div>
            </div>
            )}
}