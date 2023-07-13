import { SortButton } from "../Buttons/sortButton";
import React from "react";
import { AmoutSortClick, DateSortClick, StateSortClick } from "../Functions/DataFunctions/CILSortBarSorting";

export function CILSortBar(){
    return (<div style={{width:545, justifyContent:"flex-start", flexDirection:"row", position:"relative", left:25, direction:"ltr"}}>
                <SortButton id="StateButton" text="Status" width="170px" click={StateSortClick}/>
                <SortButton id="DateButton" text="Datum" width="150px" fontColor="#ffffff" click={DateSortClick}/>
                <SortButton id="AmountButton" text="Betrag" width="185px" click={AmoutSortClick}/>
            </div>)
}

export function MobileCILSortBar(){
    return (<div style={{width:310, justifyContent:"flex-start", flexDirection:"row", position:"relative", left:5, direction:"ltr"}}>
                <SortButton id="StateButton" text="Status" width="102px" click={StateSortClick} fontSize={15}/>
                <SortButton id="DateButton" text="Datum" width="102px" fontColor="#ffffff" click={DateSortClick} fontSize={15}/>
                <SortButton id="AmountButton" text="Betrag" width="100px" click={AmoutSortClick} fontSize={15}/>
            </div>)
}