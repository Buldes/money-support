import { exampleData } from "../../Data/list"
import { UpdateElemets } from "../UpdateElements"
import { SaveData } from "./Datadealer"

export function addData(props){

  var newBankBalance = 0

  //calculate new bank balance
  if (props.newState === "Einkommen") newBankBalance =  parseFloat(exampleData[exampleData.length-1].bankBalance) + parseFloat(props.newAmount)
  else newBankBalance = parseFloat(exampleData[exampleData.length-1].bankBalance) - props.newAmount

  // adding data
  var newData = {id: exampleData.length, state:props.newState, 
                date: {day: props.newDay, month: props.newMonth, year: props.newYear}, amount: props.newAmount, bankBalance:newBankBalance}
  exampleData.push(newData)

  // save data
  SaveData()
  // Update elements
  UpdateElemets()
} 