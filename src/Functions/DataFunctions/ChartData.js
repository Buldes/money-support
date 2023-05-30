import {  victoryLineData } from "../../Data/list";
import { incomCostMonthly } from "../Analyse/IncomCostPerMonth";
import { GetMonthData } from "./MonthDataGenerate";

export function CalculateChartData(){
    //Get month data
    var monthData = GetMonthData()
    
    //set Variable
    var beforeDay = 0

    //'Month'
    monthData.forEach(element => {
        //check if day is the same
        if (beforeDay === element.date.day){

            //refresh old datas

            //check if element is cost or incomm
            if (element.state === "Einkommen"){
                victoryLineData[0][1][parseFloat(element.date.day - 1)].y = parseFloat(victoryLineData[0][1][parseFloat(element.date.day - 1)].y) + parseFloat(element.amount)
            }
            else if (element.state === "Ausgaben"){
                victoryLineData[0][2][parseFloat(element.date.day - 1)].y = parseFloat(victoryLineData[0][2][parseFloat(element.date.day - 1)].y) + parseFloat(element.amount)
            }
        
        }
        else{
            // set new data
            if (element.state !== "Initialization") victoryLineData[0][0][element.date.day - 1].y = element.bankBalance

            if (element.state === "Einkommen") victoryLineData[0][1][element.date.day - 1].y = element.amount
            else if (element.state === "Ausgaben") victoryLineData[0][2][element.date.day - 1].y = element.amount
        }

        //set day for next
        beforeDay = element.date.day
    });

    //'Year'

    var cachyear = []
    var cachLastYear = []


    for (let num = 1; num <= new Date().getMonth(); num++){
        // add data to cach year from january to know
        cachyear.push([incomCostMonthly[num][0].amount, incomCostMonthly[num][1].amount])
    }
    // add curent to cache
    cachyear.push([incomCostMonthly.current[0].amount, incomCostMonthly.current[1].amount])

    // add rest from last year
    for (let num = new Date().getMonth() + 1; num < 13; num ++){
        cachLastYear.push([incomCostMonthly[num][0].amount, incomCostMonthly[num][1].amount])
    }

    // mix together
    cachyear.forEach(element => {
        cachLastYear.push(element)
    });

    // add ro list
    var num = 0
    cachLastYear.forEach(element => {
        num++
        victoryLineData[1][1][num - 1].y = element[0]
        victoryLineData[1][2][num - 1].y = element[1]
    });

    console.log(victoryLineData)
}