import { exampleData, lineChartInterpolation, setExistedKeys } from "../../Data/list";
import { defaultInterpolation, setDefaultInterpolation } from "../../Data/str";

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
    keys = keys.filter(item => item !== "bookMarkColor")
    keys = keys.filter(item => item !== "searchBarColor")
    keys = keys.filter(item => item !== "defaultInterpolation")
    // check if none
    if (keys.length === 0) keys = ["NewUser"]
    // set current choice at the beginning
    const index = keys.indexOf(GetCurrentChoice())
    if (index === -1) keys.push(GetCurrentChoice()) // add Get current choice, if its not existing jet
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

export function GetDefaultInterpolation(){
    setDefaultInterpolation(localStorage.getItem("defaultInterpolation"))

    if (defaultInterpolation === null){
        setDefaultInterpolation("basis")
        localStorage.setItem("defaultInterpolation", defaultInterpolation)
    }

    // sort list amde out of al interpolation variants for the drop box
    const index = lineChartInterpolation.indexOf(defaultInterpolation)
    lineChartInterpolation.splice(index, 1)
    lineChartInterpolation.unshift(defaultInterpolation)
}

export function SaveDefaultInterpolation(){
    localStorage.setItem("defaultInterpolation", defaultInterpolation)
}