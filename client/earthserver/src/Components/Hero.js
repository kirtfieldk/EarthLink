import React, { Component, useState } from 'react'
import Model from './Model'

const Hero = ({page, title, subTitle, btnText}) =>{
    return (
      <div className = {page}>
        <Model title = {title} subTitle = {subTitle} btnText = {btnText}/>
      </div>
    )
}

export default Hero
