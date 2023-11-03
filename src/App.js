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
    return (
      <div>

        <>
          <script 
            async 
            src="https://www.googletagmanager.com/gtag/js?id=G-BDSBMQWQ9R"/>
          <script 
            dangerouslySetInnerHTML={{ __html:`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
                
              gtag('config', 'G-BDSBMQWQ9R');`}}/>
        </>

        <Mobile/>
      </div>
      )
  }
  else if (GetAspectRatio() <= 1.7) {
    return (
      <div>
        
        <>
          <script 
            async 
            src="https://www.googletagmanager.com/gtag/js?id=G-BDSBMQWQ9R"/>
          <script 
            dangerouslySetInnerHTML={{ __html:`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
                
              gtag('config', 'G-BDSBMQWQ9R');`}}/>
        </>

        <Tablet/>
      </div>
      )
  }
  else{ 
    return (
      <div>
        
        <>
          <script 
            async 
            src="https://www.googletagmanager.com/gtag/js?id=G-BDSBMQWQ9R"/>
          <script 
            dangerouslySetInnerHTML={{ __html:`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
                
              gtag('config', 'G-BDSBMQWQ9R');`}}/>
        </>

        <Laptop/>
      </div>
      )
  }
}

export default App;