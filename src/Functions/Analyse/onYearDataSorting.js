import { exampleData } from "../../Data/list"

export var yearMonthData = {1:[], 2:[], 3:[], 4:[], 5:[], 6:[], 7:[], 8:[], 9:[], 10:[], 11:[], 12:[], current:[]}

export function DataSorting(){

    const dataCopie = exampleData
    const oneYearData = []
    yearMonthData = {1:[], 2:[], 3:[], 4:[], 5:[], 6:[], 7:[], 8:[], 9:[], 10:[], 11:[], 12:[], current:[]}

    // Kopie neu anordnen
    dataCopie.sort(function(a, b) {
        if (a.date.year < b.date.year) return 1;
        if (a.date.year > b.date.year) return -1;
        if (a.date.month < b.date.month) return 1;
        if (a.date.month > b.date.month) return -1;
        if (parseInt(a.date.day) < parseInt(b.date.day)) return -1;
        if (parseInt(a.date.day) > parseInt(b.date.day)) return 1;
        return 0;
      })

    //Alle daten, die maximal 1 Jahhr her sind speichern
    for (let i = 0; i < dataCopie.length; i++) {
        if (parseInt(dataCopie[i].date.year) < parseInt(new Date().getFullYear())){
            if (parseInt(dataCopie[i].date.month) <= parseInt(new Date().getMonth())) {
                break
            }}

        oneYearData.push(exampleData[i])
    }
    
    //Gespeicherte Daten zu dazugehörigem Monat sortieren
    oneYearData.forEach((item) => {
        if (parseInt(item.date.year) === new Date().getFullYear()){
            if (parseInt(item.date.month) === new Date().getMonth() + 1) yearMonthData.current.push(item)
            else yearMonthData[item.date.month].push(item)}
        else yearMonthData[item.date.month].push(item)
    })

}