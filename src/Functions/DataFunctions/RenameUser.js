import { inputRenameUser } from "../getInput";
import { Rename } from "./Datadealer";

export function RenameUser(){
    if (inputRenameUser === "choice" || inputRenameUser === "color"  || inputRenameUser === "bg"  || inputRenameUser === "bookMarks"  || inputRenameUser === "menu" || inputRenameUser === "searchBarColor" || inputRenameUser === "bookMarkColor" || inputRenameUser === "defaultInterpolation"){
        alert("Nutzer darf nicht in 'choice', 'color', 'bg', 'bookMarks', 'searchBarColor', 'bookMarkColor', 'defaultInterpolation' ober 'menu' unbenannt werden!")
        return
    }
    else if (inputRenameUser === undefined){
        alert("Bitte gebe einen neuen Namen ein.")
        return
    }
    Rename(inputRenameUser)
}