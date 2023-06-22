import React from "react";
import { exampleData } from "../Data/list";
import { CILItem, MobileCILItem } from "../Components/costIncomListItem";
import { showData } from "../Data/float";
import { mobileDevice } from "../Data/bool";


export var listItem = []


export function RegenertateCILItemList(){

    var listItems = []
    var counter = 0

    for (let i = 0; i < exampleData.length; i++){
        counter ++
        var dateDay = exampleData[i].date.day.toString()
        var dateMonth = exampleData[i].date.month.toString()
        
        // check if not mobile
        if (!mobileDevice){
            listItems.push(<li key={exampleData[i].id}> <CILItem state={exampleData[i].state} 
                                              date={dateDay.padStart(2, '0') + "." + dateMonth.padStart(2, '0') + "." + exampleData[i].date.year}
                                              amount={exampleData[i].amount} id={exampleData[i].id} x={5}/></li>)
        }
        // else mobile
        else{
            listItems.push(<li key={exampleData[i].id}> <MobileCILItem state={exampleData[i].state} 
                                              date={dateDay.padStart(2, '0') + "." + dateMonth.padStart(2, '0') + "." + exampleData[i].date.year}
                                              amount={exampleData[i].amount} id={exampleData[i].id} x={10}/></li>)
        }

        // stop genertae after 20 elements
        if (counter === showData) return
        listItem = listItems
    }

}