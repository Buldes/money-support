import { MultipleLinesVictoryLine } from "../Charts/VictoryLine/coytIncommVictoryLine";
import { Headline } from "../Lable/HeadLines";
import { bgColor3e } from "../Styles/backGroundColor";

export function TrippleLineChart(props){
    const {bgColor=bgColor3e, headLine="No Headline", headlineTop=10, headlineLeft=250, 
            borderRadius="10px", cHeight="400px", cWidth="800px", cTop=-540, cLeft="53%"} = props

    return (
        <div className="Trplle-Line-Chart" style={{position: "relative", transform:"flex",
            width:cWidth,  height:cHeight, borderRadius:borderRadius, backgroundColor:bgColor, top:cTop, left:cLeft}}>

            <Headline text={headLine} width={300} top={headlineTop} left={headlineLeft}/>

            <MultipleLinesVictoryLine data={props.data} />

        </div>
    )
}