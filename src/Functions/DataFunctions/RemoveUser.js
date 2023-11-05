import { ClearData, GetCurrentChoice, SetCurrentChoice } from "./Datadealer";

export function RemoveUser(){
    if (window.confirm("Möchtest du wirklich unwiederruflich diesen Nutzer löschen?")){
        ClearData() // remove current User

        var allUser = []
        allUser = Object.keys(localStorage); // get every existed key
        // remove "choice" and other not usable, before set
        allUser = allUser.filter(item => item !== "choice")
        allUser = allUser.filter(item => item !== "menu")
        allUser = allUser.filter(item => item !== "bg")
        allUser = allUser.filter(item => item !== "color")
        allUser = allUser.filter(item => item !== "bookMarks")
        allUser = allUser.filter(item => item !== "bookMarkColor")
        allUser = allUser.filter(item => item !== "searchBarColor")
        allUser = allUser.filter(item => item !== "defaultInterpolation")
        allUser = allUser.filter(item => item !== GetCurrentChoice()) // remove the 'currentChoice' key out of list
        if (allUser.length === 0) SetCurrentChoice("NewUser")  // check if there is any other user left
        else SetCurrentChoice(allUser[0])  // else set new currentChoice
        console.log(allUser)
        window.location.reload()  // reload page
    }
}