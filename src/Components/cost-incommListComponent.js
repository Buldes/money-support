import React from "react";
import { Headline } from "../Lable/HeadLines";
import { bgColor3e, bgColor4e } from "../Styles/backGroundColor";

export function CILComponent(props){
    const {headlineWidth=500, headlineText="Ausgaben und Einkommen", headlineX=75, headlineY=10, bgColor1=bgColor3e, bgColor2=bgColor4e, componentX="6%", componentY=60, componentWidth=650,
           componenHeight=600, componentRadius="10px", listBorder="3px solid #1f1f1f", listBorderRadius="10px"} = props

    return (
        <div style={{display:"flex", position:"relative", justifyContent:"flex-start", backgroundColor:bgColor1, width:componentWidth, height:componenHeight,
                     top:componentY, left:componentX, borderRadius:componentRadius}}>

            <div>
                <Headline text={headlineText} width={headlineWidth} top={headlineY} left={headlineX}/>
            </div>

            

            <div>
              <div style={{display:"flex", flexDirection: "column", justifyContent:"flex-start", backgroundColor:bgColor2, width:(componentWidth-55), 
                           height:(componenHeight-100) ,border:listBorder, borderRadius:listBorderRadius, position:"relative", top:50, left:-475, 
                           overflowY:"auto", overflowX:"hidden", direction:"rtl"}}>
              <div>
                {props.sortBar}
              </div>

                {props.generateList}
              </div>

              {props.addBar}

            </div>

        </div>
    )
}


export function MobileCILComponent(props){
  const {headlineText="Ausgaben und Einkommen", headlineX=10, headlineY=10, bgColor1=bgColor3e, bgColor2=bgColor4e, componentX="3%", componentY=30, componentWidth=325,
         componenHeight=500, componentRadius="10px", listBorder="3px solid #1f1f1f", listBorderRadius="10px"} = props

  return (
      <div style={{display:"flex", position:"relative", justifyContent:"flex-start", backgroundColor:bgColor1, width:componentWidth, height:componenHeight,
                   top:componentY, left:componentX, borderRadius:componentRadius}}>

          <div>
              <Headline  text={headlineText} width={componentWidth-25} top={headlineY} left={headlineX} fontSize="20px"/>
          </div>

          

          <div>
            <div style={{display:"flex", flexDirection: "column", justifyContent:"flex-start", backgroundColor:bgColor2, width:(componentWidth-25), 
                         height:(componenHeight-55) ,border:listBorder, borderRadius:listBorderRadius, position:"relative", top:40, left:-290, 
                         overflowY:"auto", overflowX:"hidden", direction:"rtl"}}>
            <div>
              {props.sortBar}
            </div>

              {/*props.generateList*/}
            </div>

              {/*props.addBar*/}

          </div>

      </div>
  )
}