import React, { useEffect} from 'react';
import './App.css';
import { Initialization } from './Functions/StartFunction';
import { BankBalanceLableUdate } from './Functions/UpdateKomponentsUpArear';
import { Laptop, Mobile } from './Components/Appjs-Components';
import { GetAspectRatio } from './Functions/sreen';

function App() {
  useEffect(() => { 
    document.title = `Money Support`; 
    BankBalanceLableUdate()});
  
    Initialization()

  if (GetAspectRatio() >= 1) return <Laptop/> 
  else return <Mobile/> 
}

export default App;