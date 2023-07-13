import React, { useEffect} from 'react';
import './App.css';
import { Initialization } from './Functions/StartFunction';
import { BankBalanceLableUdate } from './Functions/UpdateKomponentsUpArear';
import { Laptop, Mobile, Tablet } from './Components/Appjs-Components';
import { GetAspectRatio } from './Functions/sreen';
import { setMobileDevice } from './Data/bool';

function App() {
  useEffect(() => { 
    document.title = `Money Support`; 
    BankBalanceLableUdate()});
  
    Initialization()

  if (GetAspectRatio() <= 1) {
    setMobileDevice(true)
    return <Mobile/>
  }
  else if (GetAspectRatio() <= 1.6) return <Tablet/>
  else{ 
    return <Laptop/> 
  }
}

export default App;