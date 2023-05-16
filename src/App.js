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
import { exampleData } from './Data/list';
import { Initialization } from './Functions/StartFunction';
import { HardDataReset } from './Functions/DataFunctions/ClearData';
import { BankBalanceLableUdate } from './Functions/UpdateKomponentsUpArear';

function App() {
  useEffect(() => { 
    document.title = `Kontostand`; 
    BankBalanceLableUdate()});
  
    Initialization()

    console.log(exampleData)

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
      </div>

    </div>
  );
}

export default App;