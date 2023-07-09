import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { IconButton } from "../Buttons/IconButton"
import { AddButton } from "../Buttons/addButton"
import { DefaultButton } from "../Buttons/defaultButton"
import { HardDataReset } from "../Functions/DataFunctions/ClearData"
import { DefaultInputField } from "../InputField/defaultInputField"
import { centering } from "../Styles/Look"
import { bgColor2e, bgColor5e } from "../Styles/backGroundColor"
import { AddNewUser } from "../Functions/AddNewUser"
import { getInputNewUser, getInputRenameUser, inputNewUser, inputRenameUser } from "../Functions/getInput"
import { RemoveUser } from "../Functions/DataFunctions/RemoveUser"
import { RenameUser } from "../Functions/DataFunctions/RenameUser"

export function SettingsModal({open, onClose}, props){
    const {fullWidth="530px", fulleHeight=150, borderRadius=20, buttonHeight=35, fontSize=19, left=20, top=15, between=10,
           componentLeft=10, componentTop=-10} = props
    // check if open
    if (!open) return

    return (
    <div style={{width:fullWidth, height:fulleHeight, backgroundColor:bgColor2e, borderRadius:borderRadius, 
                 left:componentLeft, top:componentTop, position:"relative", zIndex:12}}>
        <div style={{display:"flex"}}>
            <DefaultButton click={HardDataReset} name={"Daten von diesem Nutzer löschen"} borderRadius={10} 
                           height={buttonHeight} fontSize={fontSize} color={bgColor5e} top={top} left={left} 
                           borderColor={bgColor5e} add={centering}/>

            <DefaultButton click={RemoveUser} name={"Nutzer löschen"} borderRadius={10} 
                           height={buttonHeight} fontSize={fontSize} color={bgColor5e} top={top} left={30} 
                           borderColor={bgColor5e} add={centering}/>
                           
            <IconButton icon={faXmark} border="" size="xl" width={30} height={30} top={5} left={50} click={onClose}/>
        </div>

        <div style={{left:left, top:top + between, display:"flex", position:"relative"}}>
            <AddButton text="Neuer Nutzer" width={140} click={AddNewUser}/>
            <DefaultInputField width={300} left={5} value={inputNewUser} onChange={getInputNewUser}/>
        </div>

        <div style={{left:left, top:top + between * 2, display:"flex", position:"relative"}}>
            <AddButton text="Nutzer Unbenennen" width={200} click={RenameUser}/>
            <DefaultInputField width={240} left={5} value={inputRenameUser} onChange={getInputRenameUser}/>
        </div>

        {/*<DefaultButton name="close" fontSize="20px" color="red" click={onClose}/>*/}
    </div>)
}