import React, { useEffect} from 'react';
import './App.css';
import { BankBalanceLable } from './Lable/bankBalanceLable';
import { PieChartComponent } from './Components/defaultPieChartComponent';
import { SmallInfoComponent } from './Components/smallInfoComponent';
import { CILComponent } from './Components/cost-incommListComponent';
import { downArearStyle, upArearStyle } from './Styles/arearStyles';
import { monthCostAvarge, monthCost, monthIncomm } from './Data/float';
import { GenerateCIL } from './Functions/generateCILItem';
import { CILAddBar } from './Components/CILaddKomponent';
import { CILSortBar } from './Components/CILSortComponent';
import { GenerateData } from './Functions/DataFunctions/generateData';
import { Initialization } from './Functions/StartFunction';
import { HardDataReset } from './Functions/DataFunctions/ClearData';
import { BankBalanceLableUdate } from './Functions/UpdateKomponentsUpArear';
import { TrippleLineChart } from './Components/Month-YearlyLineChhart';
import { victoryLineData } from './Data/list';

function App() {
  useEffect(() => { 
    document.title = `Money Support`; 
    BankBalanceLableUdate()});
  
    Initialization()

  return (
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

      </div>
    </div>
  );
}

export default App;