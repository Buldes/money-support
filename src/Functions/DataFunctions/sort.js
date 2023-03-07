import { exampleData, setSortUpDown, sortUpDown } from "../../Data/list";
import { UpdateCIL } from "../updateCIL";

export function sortDataByDate(){
    exampleData.sort(function(a, b) {
        // Vergleiche Jahr
        if (a.date.year < b.date.year) return 1 * sortUpDown[0]
        if (a.date.year > b.date.year) return -1 * sortUpDown[0]
        // Wenn die Jahre gleich sind, vergleiche Monat
        if (a.date.month < b.date.month) return 1 * sortUpDown[0]
        if (a.date.month > b.date.month) return -1 * sortUpDown[0]
        // Wenn die Jahre und Monate gleich sind, vergleiche Tag
        if (parseInt(a.date.day) < parseInt(b.date.day)) return 1 * sortUpDown[0]
        if (parseInt(a.date.day) > parseInt(b.date.day)) return -1 * sortUpDown[0]
        // Wenn alle gleich sind, bleibt die Reihenfolge unverändert
        return 0;
      })
      setSortUpDown([sortUpDown[0]*-1, 1, 1])
      UpdateCIL()
}

export function sortDataByAmout(){
    exampleData.sort(function(a, b){
        if (parseFloat(a.amount) < parseFloat(b.amount)) return 1 * sortUpDown[1]
        if (parseFloat(a.amount) > parseFloat(b.amount)) return -1 * sortUpDown[1]
        return 0
    })
    setSortUpDown([1, sortUpDown[1]*-1, 1])
    UpdateCIL()
}

export function sortDataByStatus(){
    exampleData.sort(function(a, b){
        if (a.state === b.state) return 0
        if (a.state === "Einkommen") return 1 * sortUpDown[2]
        return -1 * sortUpDown[2]
    })
    setSortUpDown([1, 1, sortUpDown[2]*-1])
    UpdateCIL()
}