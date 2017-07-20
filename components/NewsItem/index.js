import React from 'react'
import Style from  './styled.js'

export default ({ title, photos }) => <div className="item" >
    <h1>{title}</h1>
    <img className="cover" src={photos[0]} alt=""/>
    <Style></Style>
</div>