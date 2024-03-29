import { exampleData, setExampleData } from "../Data/list";
import { CalculateMonthAvarge } from "./Analyse/calculateMonth";
import { CalculateChartData } from "./DataFunctions/ChartData";
import { GetCurrentChoice, GetData, GetDefaultInterpolation, SaveData } from "./DataFunctions/Datadealer";
import { GetAspectRatio } from "./sreen";

export function Initialization(){
    // get data
    var storageData = GetData(GetCurrentChoice())

    // add data for "welcome"
    var date = new Date()
    if (storageData === "no data"){
        storageData = [{id: 0, state: "Initialization", date: {day: date.getDate(), month: date.getMonth() + 1, year: date.getFullYear()}, amount: 0, bankBalance:0},
                        {id: 1, state: "Einkommen", date: {day: date.getDate(), month: date.getMonth() + 1, year: date.getFullYear()}, amount: 1, bankBalance:0},
                        {id: 2, state: "Ausgaben", date: {day: date.getDate(), month: date.getMonth() + 1, year: date.getFullYear()}, amount: 0.5, bankBalance:0}]
        
        // save data
        setExampleData(storageData)
        SaveData(GetCurrentChoice())
    }
    setExampleData(storageData)

    console.log(exampleData)

    //calculate
    CalculateMonthAvarge()
    CalculateChartData()

    // Aspect Ratio
    GetAspectRatio()

    // Interpolation
    GetDefaultInterpolation()
}