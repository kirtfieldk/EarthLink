import React from 'react'
const Model = ({title, subTitle,  btnText}) =>{
    console.log(btnText)
    return (
        <div className = 'model '>
        <h2>{title}</h2>
        <h6>{subTitle}</h6>
        {isButton(btnText)}
        </div>
    )
}
const isButton = (btnText) =>{ 
    if(!btnText){
         return <div></div>
     } else
        return <button type = 'submit'>{btnText}</button>}
export default Model;