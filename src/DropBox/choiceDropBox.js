import { ChangeChoice } from "../Functions/ChangeChoice"
import { bgColor5e } from "../Styles/backGroundColor"
import { DefaultDropBox } from "./defaultDropBox"

export function InfoDropBox(props){
    const {width="90%", height=45, fontSize=25, id="ChoiceBox", backgroundColor=bgColor5e, borderColor="black",
           borderRadius=20, text={textAlign:"center"}} = props

    return (
        <DefaultDropBox width={width} height={height} fontSize={fontSize} add={text}
                        backgroundColor={backgroundColor} borderColor={borderColor} borderRadius={borderRadius}
                        options={props.options}
                        id={id}
                        top={props.top} left={props.left}
                        onChange={ChangeChoice}/>
    )
}