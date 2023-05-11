import { setExampleData } from "../../Data/list";
import { UpdateElemets } from "../UpdateElements";
import { SaveData } from "./Datadealer";

export function HardDataReset(){

    // safty check
    if (window.confirm("Möchtest du wirklich alle Daten löschen(unwiederrufbar)?")){
        //clear data
        setExampleData([{id: 0, state: "Initialization", date: {day: 1, month: 5, year: 2023}, amount: 0, bankBalance:0}])
        SaveData()
        UpdateElemets()
    }
}