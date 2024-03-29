import { PieChartComponent } from "../Components/defaultPieChartComponent";
import { mobileDevice } from "../Data/bool";
import { monthCost, monthCostAvarge, monthIncomm } from "../Data/float";
import { exampleData } from "../Data/list";
import { CalculateMonthAvarge } from "./Analyse/calculateMonth";
import { ResetSorting } from "./DataFunctions/sort";

export function BankBalanceLableUdate(){
    ResetSorting()
    const dataCopie = exampleData

    dataCopie.sort(function(a, b){
    if (a.date.year < b.date.year) return -1;
    if (a.date.year > b.date.year) return 1;
    if (a.date.month < b.date.month) return -1;
    if (a.date.month > b.date.month) return 1;
    if (parseInt(a.date.day) < parseInt(b.date.day)) return -1;
    if (parseInt(a.date.day) > parseInt(b.date.day)) return 1;
    return 0
    })
    document.getElementById("BankBalance").textContent = parseFloat(dataCopie[dataCopie.length-1].bankBalance).toLocaleString('de-DE', {minimumFractionDigits: 2, maximumFractionDigits: 2, style: 'currency', currency: 'EUR'})
}

export function SmallInfoUpdate(){
    CalculateMonthAvarge()

    if (!mobileDevice){
        document.getElementById("MonthCostAvarge").textContent = "Durchschnitt: " + parseFloat(monthCostAvarge).toLocaleString('de-DE', {minimumFractionDigits: 2, maximumFractionDigits: 2, style: 'currency', currency: 'EUR'})
        document.getElementById("MonthCost").textContent = "Diesen Monat: " + parseFloat(monthCost).toLocaleString('de-DE', {minimumFractionDigits: 2, maximumFractionDigits: 2, style: 'currency', currency: 'EUR'})
    }

    else
    {
        document.getElementById("MonthCostAvarge").textContent = "Durchschnitt\n" + parseFloat(monthCostAvarge).toLocaleString('de-DE', {minimumFractionDigits: 2, maximumFractionDigits: 2, style: 'currency', currency: 'EUR'})
        document.getElementById("MonthCost").textContent = "Diesen Monat\n" + parseFloat(monthCost).toLocaleString('de-DE', {minimumFractionDigits: 2, maximumFractionDigits: 2, style: 'currency', currency: 'EUR'})
    }
}
export function PieChartUpdate(){
    return <PieChartComponent cost={parseFloat(monthCost)} incomm={monthIncomm} top="-340px" left="10%"/>
}