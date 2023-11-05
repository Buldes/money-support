import { SetCurrentChoice } from "./DataFunctions/Datadealer";
import { inputNewUser } from "./getInput";

export function AddNewUser(){
    if (inputNewUser === "choice") alert("Dieser Nutzername darf nicht gewählt werden!")
    else if (inputNewUser === "menu") alert("Dieser Nutzername darf nicht gewählt werden!")
    else if (inputNewUser === "color") alert("Dieser Nutzername darf nicht gewählt werden!")
    else if (inputNewUser === "bg") alert("Dieser Nutzername darf nicht gewählt werden!")
    else if (inputNewUser === "bookMarks") alert("Dieser Nutzername darf nicht gewählt werden!")
    else if (inputNewUser === "bookMarkColor") alert("Dieser Nutzername darf nicht gewählt werden!")
    else if (inputNewUser === "searchBarColor") alert("Dieser Nutzername darf nicht gewählt werden!")
    else if (inputNewUser === "defaultInterpolation") alert("Dieser Nutzername darf nicht gewählt werden!")
    
    else if (inputNewUser === undefined){
        alert("Bitte gebe einen neuen Nutzer ein.")
    }else{
        SetCurrentChoice(inputNewUser)
        window.location.reload()
    }
}