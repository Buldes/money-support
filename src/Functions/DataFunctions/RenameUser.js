import { inputRenameUser } from "../getInput";
import { Rename } from "./Datadealer";

export function RenameUser(){
    if (inputRenameUser === "choice"){
        alert("Nutzer darf nicht in 'choice' unbenannt werden!")
        return
    }
    else if (inputRenameUser === undefined){
        alert("Bitte gebe einen neuen Namen ein.")
        return
    }
    Rename(inputRenameUser)
}