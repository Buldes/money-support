import React from "react"
import { BankBalanceLable } from "../Lable/bankBalanceLable"
import { downArearStyle, upArearStyle } from "../Styles/arearStyles"
import { monthCostAvarge, monthCost, monthIncomm } from "../Data/float"
import { PieChartComponent } from "./defaultPieChartComponent"
import { GenerateData } from "../Functions/DataFunctions/generateData"
import { HardDataReset } from "../Functions/DataFunctions/ClearData"
import { SmallInfoComponent } from "./smallInfoComponent"
import { CILAddBar } from "./CILaddKomponent"
import { CILSortBar, MobileCILSortBar } from "./CILSortComponent"
import { CILComponent, MobileCILComponent } from './cost-incommListComponent';
import { GenerateCIL } from "../Functions/generateCILItem"
import { TrippleLineChart } from "./Month-YearlyLineChhart"
import { victoryLineData } from "../Data/list"
import { Headline } from "../Lable/HeadLines"
import { GetAspectRatio } from "../Functions/sreen"

export function Laptop(){
    return( 
        <div className='App'>

          <div className='up-area' style={upArearStyle}>

            <BankBalanceLable text={"Loading..."}/>

            <SmallInfoComponent cost={monthCost} avarge={monthCostAvarge}/>

            <PieChartComponent cost={parseFloat(monthCost)} incomm={monthIncomm} top="-340px" left="10%"/>

         </div>
          <button onClick={GenerateData}>GenerateData</button>
          <button onClick={HardDataReset} style={{color:"red"}}>Hard Rest</button>

          <div className='down-arear' style={downArearStyle}>

            <CILComponent addBar={CILAddBar()} generateList={GenerateCIL()} sortBar={CILSortBar()}/> 

            <TrippleLineChart headLine="Monatlich" data={victoryLineData[0]}/>
            <TrippleLineChart headLine="Jährlich" data={victoryLineData[1]} cTop="-480px"/>
            <Headline text={"Aspect-Ratio: " + GetAspectRatio()}/>

          </div>
        
        </div>
    )
}

export function Mobile(){
    return( 
        <div className='App'>

          <div className='up-area' style={Object.assign({}, upArearStyle, {height:"430px"})}>

            <BankBalanceLable text={"Loading..."} top={20} size="250px" fontSize="50px"/>

            <SmallInfoComponent cost={monthCost} avarge={monthCostAvarge}/>

           {/* <PieChartComponent cost={parseFloat(monthCost)} incomm={monthIncomm} top="-340px" left="10%"/> */}

         </div>
          {/*<button onClick={GenerateData}>GenerateData</button>
          <button onClick={HardDataReset} style={{color:"red"}}>Hard Rest</button>*/}

          <div className='down-arear' style={Object.assign({}, downArearStyle, {height:"700px"})}>

            <MobileCILComponent addBar={CILAddBar()} generateList={GenerateCIL()} sortBar={MobileCILSortBar()}/> 

            {/*<TrippleLineChart headLine="Monatlich" data={victoryLineData[0]}/>
            <TrippleLineChart headLine="Jährlich" data={victoryLineData[1]} cTop="-480px"/>*/}
            

          </div>
          <Headline text={"Aspect-Ratio: " + GetAspectRatio()}/>
        
        </div>
    )
}