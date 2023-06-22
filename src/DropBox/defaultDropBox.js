import React from "react";
import { defaultTextSytle } from "../Styles/TextStyles";

export function DefaultDropBox(props){
    const {fontSize=20} = props
    var propsValue = props.options;
    let PropsOptions = []

    for (let i = 0; i < propsValue.length; i++){
        PropsOptions.push(<option key={propsValue[i]} value={propsValue[i]}>{propsValue[i]}</option>)
    }

    return <select onChange={props.onChange} id={props.id} style={{backgroundColor:props.backgroundColor, borderColor:props.borderColor, borderRadius:props.borderRadius,
                                                                   width:props.width, height:props.height, top:props.top, left:props.left, 
                                                                   position:"relative", fontSize:fontSize, ...Object.assign({}, defaultTextSytle, props.add)}}>
                {PropsOptions}
          </select>
}
