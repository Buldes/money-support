import { bgColorGreen } from "../Styles/backGroundColor";
import { bgColorR1 } from "../Styles/backGroundColor";

export function dropBoxColor(){
    const select = document.getElementById("ListDropBox")

    const selectedValue = select.options[select.selectedIndex].value;
    if (selectedValue === "Einkommen"){
      select.style.backgroundColor = bgColorGreen
      select.style.borderColor = bgColorGreen
    }
    else{
      select.style.backgroundColor = bgColorR1
      select.style.borderColor = bgColorR1
    }
  }