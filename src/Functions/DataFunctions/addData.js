import { exampleData } from "../../Data/list"
import { UpdateElemets } from "../UpdateElements"

export function addData(props){
  var newBankBalance = 0

  if (props.newState === "Einkommen") newBankBalance =  parseFloat(exampleData[exampleData.length-1].bankBalance) + parseFloat(props.newAmount)
  else newBankBalance = parseFloat(exampleData[exampleData.length-1].bankBalance) - props.newAmount

  var newData = {id: (exampleData[exampleData.length-1].id + 1), state:props.newState, 
                date: {day: props.newDay, month: props.newMonth, year: props.newYear}, amount: props.newAmount, bankBalance:newBankBalance}
  exampleData.push(newData)

  UpdateElemets()
} 