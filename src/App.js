import React, { useEffect} from 'react';
import './App.css';
import { Initialization } from './Functions/StartFunction';
import { BankBalanceLableUdate } from './Functions/UpdateKomponentsUpArear';
import { Laptop, Mobile, Tablet } from './Components/Appjs-Components';
import { GetAspectRatio } from './Functions/sreen';
import { setMobileDevice } from './Data/bool';
import { Helmet } from 'react-helmet';


function App() {
  useEffect(() => { 
    document.title = `Money Support`; 
    BankBalanceLableUdate()});
  
    Initialization()
    
  if (GetAspectRatio() <= 1) {
    setMobileDevice(true)
    return (
      <div>

        <Helmet>
          <script 
            async 
            src="https://www.googletagmanager.com/gtag/js?id=G-BDSBMQWQ9R"/>
          <script 
            dangerouslySetInnerHTML={{ __html:`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
                
              gtag('config', 'G-BDSBMQWQ9R');`}}/>
        </Helmet>

        <Mobile/>
      </div>
      )
  }
  else if (GetAspectRatio() <= 1.7) {
    return (
      <div>
        
        <Helmet>
          <script 
            async 
            src="https://www.googletagmanager.com/gtag/js?id=G-BDSBMQWQ9R"/>
          <script 
            dangerouslySetInnerHTML={{ __html:`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
                
              gtag('config', 'G-BDSBMQWQ9R');`}}/>
        </Helmet>

        <Tablet/>
      </div>
      )
  }
  else{ 
    return (
      <div>
        
        <Helmet>
          <script 
            async 
            src="https://www.googletagmanager.com/gtag/js?id=G-BDSBMQWQ9R"/>
          <script 
            dangerouslySetInnerHTML={{ __html:`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
                
              gtag('config', 'G-BDSBMQWQ9R');`}}/>
        </Helmet>

        <Laptop/>
      </div>
      )
  }
}

export default App;