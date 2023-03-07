import { DeleteAllCIListItems } from "./deleteCIListItem";
import { RegenertateCILItemList, listItem } from "./genertaeCILItemList";
import ReactDOM from 'react-dom';

export function UpdateCIL(){
    
    DeleteAllCIListItems()
    RegenertateCILItemList()

    var cILReference = document.getElementById("CostIncomList")


    listItem.forEach((item) => {
        const el = document.createElement('div');
        ReactDOM.render(item, el);
        cILReference.appendChild(el.firstChild);
      })
      

}