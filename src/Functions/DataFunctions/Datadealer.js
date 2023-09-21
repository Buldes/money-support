import { exampleData, setExistedKeys } from "../../Data/list";

export function SaveData(data_key){
    localStorage.setItem(data_key, JSON.stringify(exampleData))
}

export function ClearData(){
    localStorage.removeItem(GetCurrentChoice());
}

export function GetCurrentChoice(){
    const key = localStorage.getItem("choice")

    if (key === null) {
        SetCurrentChoice("NewUser")
        return "NewUser"
    }
    else return key 
}

export function SetCurrentChoice(key){
    localStorage.setItem("choice", key)
}

export function GetData(data_key){
    // set existed Keys
    var keys = Object.keys(localStorage);
    // remove "choice" and other not usable, before set
    keys = keys.filter(item => item !== "choice")
    keys = keys.filter(item => item !== "menu")
    keys = keys.filter(item => item !== "bg")
    keys = keys.filter(item => item !== "color")
    keys = keys.filter(item => item !== "bookMarks")
    // check if none
    if (keys.length === 0) keys = ["NewUser"]
    // set current choice at the beginning
    const index = keys.indexOf(GetCurrentChoice())
    if (index === -1) keys.push(GetCurrentChoice()) // add Get corrent choice, if its not existing jet
    keys.splice(index, 1)  // delete the choice of the list
    keys.unshift(GetCurrentChoice())
    // set existed key
    setExistedKeys(keys)

    // data
    const dataGet = JSON.parse(localStorage.getItem(data_key))
    
    if (dataGet === null){
        return "no data"
    }
    else return dataGet
}

export function Rename(newName){
    // remove key
    localStorage.removeItem(GetCurrentChoice())
    // make new key
    localStorage.setItem(newName, JSON.stringify(exampleData))
    // set current choice new
    SetCurrentChoice(newName)
    // reload
    window.location.reload()
}