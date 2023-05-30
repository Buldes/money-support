import { VictoryChart, VictoryLine, VictoryAxis } from "victory";
import { bgColorGreen, bgColorR1 } from "../../Styles/backGroundColor";
import React from "react";

export function MultipleLinesVictoryLine(props){
    var {border="10px solid #ccc",  interpolation="basis", bg="none", lableX="", lableY="", width=500, height=250, 
        lineColors=["transperente", bgColorGreen, bgColorR1]} = props

    const { data } = props;

    // everything, thats in defaultVictoryLines has to be here because of sysntax
    return (
        <VictoryChart minDomain={{ y: 0 }} width={width} height={height} style={{background: { fill:bg}}}>
        
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

        {data.map((lineData, index) => (
            <VictoryLine 
            animate={{
                duration: 2000,
                onLoad: { duration: 2000 }}}
            style={{data: {stroke:lineColors[index], parent: { border:{border}}}}}
            interpolation={interpolation}
            data={lineData}
            key={index}/>
        ))}

    </VictoryChart>
    )
}