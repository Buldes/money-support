import { addData } from "./addData";
import { inputAmout } from "../getInput";

export function manuelAddData(){
    const select = document.getElementById("ListDropBox")
    const selectedValue = select.options[select.selectedIndex].value;
    const amoutInput = parseFloat(inputAmout).toFixed(2)
    const currentDate = new Date();

    if (isNaN(amoutInput)){
      console.log('[Ein Fehler ist aufgetreten:] Es wurde keine Zahl eingegeben');
    }
    else if (amoutInput.length > 13)
    {
      console.log("Warnung: Zahl zu groß")
    }
    else{
      addData({newState:selectedValue, newDay:currentDate.getDate(), newMonth:currentDate.getMonth() + 1, newYear:currentDate.getFullYear(), newAmount:amoutInput})
    } 
  }