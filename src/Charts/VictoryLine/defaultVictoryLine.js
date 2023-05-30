import { VictoryLine, VictoryChart, VictoryAxis } from "victory";
import { bgColor3e } from "../../Styles/backGroundColor";

export function DefaultLineChart(props){
    var {border="10px solid #ccc", data=[ { x: 1, y: 2 }, { x: 2, y: 3 }, { x: 3, y: 5 }, { x: 4, y: 4 }, { x: 5, y: 7 } ],
            interpolation="basis", bg=bgColor3e, lableX="", lableY="", width=500, height=250, lineColor="red", transperente=false} = props

    if (transperente){
      bg = "none"
    }
    return (
    <VictoryChart minDomain={{ y: 0 }} width={width} height={height} style={{background: { fill:bg}}} id={props.ke}>
        
        <VictoryAxis
        // headline for X
        label={lableX}
        // style
        style={{
          axisLabel: { padding: 30},
          tickLabels: { fontSize: 10, fill:"white"}
        }}
      />
      <VictoryAxis
        dependentAxis
        // headline for y
        label={lableY}
        // style
        style={{
          axisLabel: { padding: 40 },
          tickLabels: { fontSize: 10, fill:"white"}
        }}
      />

        <VictoryLine 
            animate={{
                duration: 2000,
                onLoad: { duration: 2000 }}}
            style={{data: {stroke:lineColor, parent: { border:{border}}}}}
            interpolation={interpolation}
            data={data}/>
    </VictoryChart>)
}




