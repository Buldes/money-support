import { exampleData } from "../../Data/list";
import { ResetSorting } from "./sort";

export function GetMonthData(){
    //Sorting
    ResetSorting()
    exampleData.reverse()

    var monthData = []
    
    exampleData.forEach(element => {
        if (element.date.month !== new Date().getMonth() + 1) return
        else if (element.date.year !== new Date().getFullYear()) return
        else monthData.push(element)
    });

    return monthData
}