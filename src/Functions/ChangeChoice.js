import { SetCurrentChoice } from "./DataFunctions/Datadealer"

export function ChangeChoice(){
    // get new choice
    const choiceElement = document.getElementById("ChoiceBox")
    const newChoice = choiceElement.options[choiceElement.selectedIndex].value
    
    // set new Choice
    SetCurrentChoice(newChoice)

    // reload website
    window.location.reload()
}