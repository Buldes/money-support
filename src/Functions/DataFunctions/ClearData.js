import { UpdateElemets } from "../UpdateElements";
import { ClearData } from "./Datadealer";

export function HardDataReset(){

    // safty check
    if (window.confirm("Möchtest du wirklich alle Daten löschen(unwiederrufbar)?")){
        //clear data
        ClearData()
        UpdateElemets()
    }
}