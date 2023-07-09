import { ClearData, GetCurrentChoice, SetCurrentChoice } from "./Datadealer";

export function RemoveUser(){
    if (window.confirm("Möchtest du wirklich unwiederruflich diesen Nutzer löschen?")){
        ClearData() // remove current User

        var allUser = []
        allUser = Object.keys(localStorage); // get every existed key
        allUser = allUser.filter(item => item !== "choice") // remove the 'choice' key out of list
        allUser = allUser.filter(item => item !== GetCurrentChoice()) // remove the 'currentChoice' key out of list
        if (allUser.length === 0) SetCurrentChoice("NewUser")  // check if there is any other user left
        else SetCurrentChoice(allUser[0])  // else set new currentChoice
        console.log(allUser)
        window.location.reload()  // reload page
    }
}