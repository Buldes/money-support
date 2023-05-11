import { exampleData } from "../../Data/list";

export function SaveData(){
    localStorage.setItem("data", JSON.stringify(exampleData))
}

export function GetData(){
    const dataGet = JSON.parse(localStorage.getItem("data"))
    
    if (dataGet === null){
        return "no data"
    }
    else return dataGet
}