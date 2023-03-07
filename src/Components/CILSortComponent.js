import { SortButton } from "../Buttons/sortButton";
import React from "react";
import { AmoutSortClick, DateSortClick, StateSortClick } from "../Functions/DataFunctions/CILSortBarSorting";

export function CILSortBar(){
    return (<div style={{width:605, justifyContent:"flex-start", flexDirection:"row", position:"relative", left:5, direction:"ltr"}}>
                <SortButton id="StateButton" text="Status" width="175px" click={StateSortClick}/>
                <SortButton id="DateButton" text="Datum" width="182px" fontColor="#ffffff" click={DateSortClick}/>
                <SortButton id="AmountButton" text="Betrag" width="248px" click={AmoutSortClick}/>
            </div>)
}