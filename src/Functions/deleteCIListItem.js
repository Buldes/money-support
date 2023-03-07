export function DeleteAllCIListItems(){
    var cILReference = document.getElementById("CostIncomList")

    while (cILReference.firstChild) {
        cILReference.removeChild(cILReference.firstChild);
      }
}