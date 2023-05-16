import { exampleData } from "../../Data/list";
import { UpdateCIL } from "../updateCIL";

export function GenerateData(){
    for (let Month = 0; Month !== 12; Month++){
        for (let Day = 0; Day !== 2; Day++){

            var newState = 0
            if (Math.random() > 0.5) newState="Einkommen"
            else newState="Ausgaben"

            var newAmout = (Math.random() * 100).toFixed(2)

            var newBankBalance = 0
            if (newState === "Einkommen") newBankBalance = parseFloat(exampleData[exampleData.length-1].bankBalance) + parseFloat(newAmout)
            else newBankBalance = parseFloat(exampleData[exampleData.length-1].bankBalance) - newAmout

            var newData = {id:exampleData.length, state:newState, date:{day:(Math.random()*31).toFixed(0), month:Month+1, year:"2022"}, amount:parseFloat(newAmout), bankBalance:newBankBalance.toFixed(2)}

            exampleData.push(newData)
        }
    }


    for (let Month = 0; Month !== 1; Month++){
        for (let Day = 0; Day !== 2; Day++){

            if (Math.random() > 0.5) newState="Einkommen"
            else newState="Ausgaben"

            newAmout = (Math.random() * 100).toFixed(2)

            if (newState === "Einkommen") newBankBalance = parseFloat(exampleData[exampleData.length-1].bankBalance) + parseFloat(newAmout)
            else newBankBalance = parseFloat(exampleData[exampleData.length-1].bankBalance) - newAmout

            newData = {id:exampleData.length, state:newState, date:{day:(Math.random()*31).toFixed(0), month:Month+1, year:"2023"}, amount:newAmout, bankBalance:newBankBalance.toFixed(2)}

            exampleData.push(newData)
        }
    }


    UpdateCIL()
}