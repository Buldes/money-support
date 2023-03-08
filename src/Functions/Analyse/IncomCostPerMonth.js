import { yearMonthData, DataSorting } from "./onYearDataSorting"

export var incomCostMonthly = {1:[], 2:[], 3:[], 4:[], 5:[], 6:[], 7:[], 8:[], 9:[], 10:[], 11:[], 12:[], current:[]}

export function IncomCostMonthlyGenerate(){

    DataSorting()
    incomCostMonthly = {1:[], 2:[], 3:[], 4:[], 5:[], 6:[], 7:[], 8:[], 9:[], 10:[], 11:[], 12:[], current:[]}

    for (let i = 1; i !== 13; i++){
        
        var totalCost = {amount:0, count:0}
        var totalIncom = {amount:0, count:0}

        for (let a = 0; a !== yearMonthData[i].length; a++){
            if (yearMonthData[i][a].state === "Einkommen"){
                totalIncom = {amount: totalIncom.amount + parseFloat(yearMonthData[i][a].amount), count: totalIncom.count + 1}
            }
            else{
                totalCost = {amount: totalCost.amount + parseFloat(yearMonthData[i][a].amount), count: totalCost.count + 1}
            }
        }

        incomCostMonthly[i].push(totalCost, totalIncom)
    }

    totalCost = {amount:0, count:0}
    totalIncom = {amount:0, count:0}

    for (let a = 0; a !== yearMonthData.current.length; a++){
        if (yearMonthData.current[a].state === "Einkommen"){
            totalIncom = {amount: totalIncom.amount + parseFloat(yearMonthData.current[a].amount), count: totalIncom.count + 1}
        }
        else{
            totalCost = {amount: totalCost.amount + parseFloat(yearMonthData.current[a].amount), count: totalCost.count + 1}
        }
    }
    incomCostMonthly.current.push(totalIncom, totalCost)
}