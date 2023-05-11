import { setExampleData } from "../Data/list";
import { CalculateMonthAvarge } from "./Analyse/calculateMonth";
import { GetData } from "./DataFunctions/Datadealer";

export function Initialization(){
    // get data
    var storageData = GetData()

    if (storageData === "no data"){
        storageData = [{id: 0, state: "Initialization", date: {day: 1, month: 5, year: 2023}, amount: 0, bankBalance:0}]
    }
    

    setExampleData(storageData)

    //calculate month Avarge
    CalculateMonthAvarge()
}