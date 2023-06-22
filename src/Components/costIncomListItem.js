import React from "react";
import { bgColor2e } from "../Styles/backGroundColor";
import { ListLable } from "../Lable/listLable";
//import { DeleteButton } from "../Buttons/deletButton";

export function CILItem(props){
    var textAmout = parseFloat(props.amount).toLocaleString('de-DE', {minimumFractionDigits: 2, maximumFractionDigits: 2, style: 'currency', currency: 'EUR'})

    // WITH delet button
    /*return (
        <div style={{margin: "5px -65px", height: 35, width: 580, borderRadius: "5px", backgroundColor:bgColor2e, display: 'flex', position: "relative", top: props.y, left:props.x, alignItems: "center", direction:"ltr"}} >
          
          <ListLable text={props.state} id={props.id} width="150px" left="5px"/>

          <ListLable text={props.date} id={props.id} width="180px" left="10px"/>

          <ListLable text={textAmout} id={props.id} width="200px" left="15px"/>

          <DeleteButton left="20px"/>

        </div>)} */
    
    // WITHOUT delet button
    return (
      <div style={{margin: "5px -65px", height: 35, width: 580, borderRadius: "5px", backgroundColor:bgColor2e, display: 'flex', position: "relative", top: props.y, left:props.x, alignItems: "center", direction:"ltr"}} >
        
        <ListLable text={props.state} id={props.id} width="150px" left="5px"/>

        <ListLable text={props.date} id={props.id} width="180px" left="10px"/>

        <ListLable text={textAmout} id={props.id} width="230px" left="15px"/>

      </div>)
    }

    export function MobileCILItem(props){
      var textAmout = parseFloat(props.amount).toLocaleString('de-DE', {minimumFractionDigits: 2, maximumFractionDigits: 2, style: 'currency', currency: 'EUR'})
      const fontSize = 17

      return (
        <div style={{margin: "5px -65px", height: 30, width: 300, borderRadius: "3px", backgroundColor:bgColor2e, display: 'flex', position: "relative", top: props.y, left:props.x, alignItems: "center", direction:"ltr"}} >
          
          <ListLable text={props.state} id={props.id} width="95px" left="3px" fontSize={fontSize}/>
  
          <ListLable text={props.date} id={props.id} width="95px" left="8px" fontSize={fontSize}/>
  
          <ListLable text={textAmout} id={props.id} width="95px" left="13px" fontSize={fontSize}/>
  
        </div>)
      }