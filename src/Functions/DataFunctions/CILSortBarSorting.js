import { sortDataByAmout, sortDataByDate, sortDataByStatus } from "./sort"

var clickId = null
const allIDs = ["StateButton", "DateButton", "AmountButton"]

export function StateSortClick(){
    clickId="StateButton"
    sortDataByStatus()
    CILSortBarButton()
}

export function DateSortClick(){
    clickId="DateButton"
    sortDataByDate()
    CILSortBarButton()
}


export function AmoutSortClick(){
    clickId="AmountButton"
    sortDataByAmout()
    CILSortBarButton()
}



export function CILSortBarButton(){
    allIDs.forEach((item) => {
        document.getElementById(item).style.color = "#8f8f8f"
    })

    document.getElementById(clickId).style.color = "#ffffff"
}

//Hier:TextFarbe ändern