import { MultipleLinesVictoryLine } from "../Charts/VictoryLine/coytIncommVictoryLine";
import { mobileDevice } from "../Data/bool";
import { Headline } from "../Lable/HeadLines";
import { bgColor3e } from "../Styles/backGroundColor";

export function TrippleLineChart(props){

    if (!mobileDevice){
        const {bgColor=bgColor3e, headLine="No Headline", headlineTop=10, headlineLeft=150, 
            borderRadius="10px", cHeight="300px", cWidth="600px", cTop=-540, cLeft="53%"} = props

        return (
            <div className="Trplle-Line-Chart" style={{position: "relative", transform:"flex",
                width:cWidth,  height:cHeight, borderRadius:borderRadius, backgroundColor:bgColor, top:cTop, left:cLeft}}>

                <Headline text={headLine} width={300} top={headlineTop} left={headlineLeft}/>

                <MultipleLinesVictoryLine data={props.data} />

            </div>
        )
    }
    else{
        const {bgColor=bgColor3e, headLine="No Headline", headlineTop=10, headlineLeft="5%", 
            borderRadius="10px", cHeight=250, cWidth="95%", cTop=100, cLeft=10} = props

        return(
            <div className="Trplle-Line-Chart" style={{position: "relative", transform:"flex",
                    width:cWidth,  height:cHeight, borderRadius:borderRadius, backgroundColor:bgColor, top:cTop, left:cLeft}}>

                    <Headline text={headLine} width={300} top={headlineTop} left={headlineLeft} fontSize={22}/>

                    <MultipleLinesVictoryLine data={props.data} fontSize={15}/>

                </div>)
    }
}