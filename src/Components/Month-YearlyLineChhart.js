import { useState } from "react";
import { MultipleLinesVictoryLine } from "../Charts/VictoryLine/coytIncommVictoryLine";
import { mobileDevice } from "../Data/bool";
import { DefaultDropBox } from "../DropBox/defaultDropBox";
import { Headline } from "../Lable/HeadLines";
import { bgColor3e, bgColor5e } from "../Styles/backGroundColor";
import { lineChartInterpolation } from "../Data/list";
import { defaultInterpolation, setDefaultInterpolation } from "../Data/str";
import { SaveDefaultInterpolation } from "../Functions/DataFunctions/Datadealer";
import { centeringX } from "../Styles/TextStyles";

export function TrippleLineChart(props){

    const [interpolation, setInterpolation] = useState(defaultInterpolation)
    
    function handleChange(event){
        const selectedValue = event.target.value;
        console.log("Selected interpolation" + selectedValue);
        setInterpolation(selectedValue)
        setDefaultInterpolation(selectedValue)
        SaveDefaultInterpolation()
    }

    if (!mobileDevice){
        const {bgColor=bgColor3e, headLine="No Headline", headlineTop=0, headlineLeft=150, 
            borderRadius="10px", cHeight=300, cWidth=600, cTop=-540, cLeft="53%", dropBoxLeft=225} = props

        return (
            <div className="Trplle-Line-Chart" style={{position: "relative", transform:"flex",
                width:cWidth,  height:cHeight, borderRadius:borderRadius, backgroundColor:bgColor, top:cTop, left:cLeft}}>

                <div>
                    <DefaultDropBox onChange = {handleChange} options={lineChartInterpolation} backgroundColor={bgColor3e} borderColor={bgColor3e} top={headlineTop + 16} left={dropBoxLeft}/>
                </div>

                <Headline text={headLine} width={300} top={headlineTop - 10} left={headlineLeft}/>
                

                <MultipleLinesVictoryLine data={props.data} interpolation={interpolation}/>

            </div>
        )
    }
    else{
        const {bgColor=bgColor3e, headLine="No Headline", headlineTop=10,
            borderRadius="10px", cHeight=275, cWidth="95%", cTop=100, cLeft=10} = props

        return(
            <div className="Trplle-Line-Chart" style={{position: "relative", transform:"flex",
                    width:cWidth,  height:cHeight, borderRadius:borderRadius, backgroundColor:bgColor, top:cTop, left:cLeft}}>

                <div style={centeringX}>
                    <Headline text={headLine} width={300} top={headlineTop} fontSize={22}/>
                
                    <DefaultDropBox onChange = {handleChange} options={lineChartInterpolation} backgroundColor={bgColor5e} borderRadius={borderRadius} width={200} borderColor={bgColor3e} top={headlineTop + 5} add={{textAlign:"center"}}/>
                </div>
                <div style={{marginTop:30}}>
                    <MultipleLinesVictoryLine data={props.data} fontSize={15} interpolation={interpolation} height={250}/>
                </div>

            </div>)
    }
}