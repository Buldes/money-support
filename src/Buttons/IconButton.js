import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { bgColor2e } from '../Styles/backGroundColor'
import { centering } from '../Styles/Look'

export function IconButton(props){
    const {width=45, height=45, color="white", bgColor=bgColor2e, size="2xl", border="3px solid #000000"} = props

    return (
    <div onClick={props.click} style={{width:width, height:height, backgroundColor:bgColor, borderRadius:5, 
                                       top:props.top, left:props.left, border:border,
                                       position:"relative", ...centering}}>
        <FontAwesomeIcon icon={props.icon} size={size} style={{color:color,}}/>
    </div>)
}