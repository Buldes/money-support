import { setExampleData } from "../Data/list";
import { CalculateMonthAvarge } from "./Analyse/calculateMonth";
import { CalculateChartData } from "./DataFunctions/ChartData";
import { GetData } from "./DataFunctions/Datadealer";

export function Initialization(){
    // get data
    var storageData = GetData()

    if (storageData === "no data"){
        storageData = [{id: 0, state: "Initialization", date: {day: 1, month: 5, year: 2023}, amount: 0, bankBalance:0},
                        {id: 1, state: "Ausgaben", date: {day: 1, month: 5, year: 2023}, amount: 12.56, bankBalance:85.36},
                        {id: 2, state: "Einkommen", date: {day: 3, month: 5, year: 2023}, amount: 20, bankBalance:85.36}]
    }
    

    setExampleData(storageData)

    //calculate
    CalculateMonthAvarge()
    CalculateChartData()
}