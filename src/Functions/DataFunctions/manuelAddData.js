import { addData } from "./addData";
import { inputAmout } from "../getInput";
import { ResetSorting } from "./sort";

export function manuelAddData(){
    //reset the sorting
    ResetSorting()

    // get datas
    const select = document.getElementById("ListDropBox")
    const selectedValue = select.options[select.selectedIndex].value;
    const amoutInput = parseFloat(inputAmout).toFixed(2)
    const currentDate = new Date();

    // check if input is ok
    if (isNaN(amoutInput)){
      console.log('[Ein Fehler ist aufgetreten:] Es wurde keine Zahl eingegeben');
      alert("[Ungültige Eingabe] Bitte gebe eine Zahl ein.")
    }
    else if (amoutInput.length > 13)
    {
      alert("Zahl ist zu groß! \nMaximale im einstelligen Milliardenbereich ")
      console.log("Warnung: Zahl zu groß")
    }
    // add data
    else{
      addData({newState:selectedValue, newDay:currentDate.getDate(), newMonth:currentDate.getMonth() + 1, newYear:currentDate.getFullYear(), newAmount:amoutInput})
    } 
  }