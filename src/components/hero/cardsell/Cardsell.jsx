import style from './Cardsell.module.css'
import fivestar from '../../../assets/fivestar.png'
import fourstar from '../../../assets/fourstar.png'
import React, { useState } from 'react';

function Cardsell({imgSrc,alt,free,price,pricedel,title,numberstar}){
    let img = ''
    let group = ''
    if(numberstar>75){
        img = fivestar
    }else{
        img = fourstar
    }
    const className = free ? 'group' : 'empty-class';
    return(
        <div>
            <p className={style.free}>{free}</p>
            <div className={style.image}>
                <img src={imgSrc} alt={alt}></img>
            </div>
            <h1 className={style.title}>{title}</h1>
            <div className={style.className}>
                <div className={style.prices}>
                    <h1 className={style.pricee}>{price}</h1>
                    <del className={style.dell}>{pricedel}</del>
                </div>
                <div className={style.stars}>
                    <img src={img} alt="cinco estrelas" />
                    <p>({numberstar})</p>
                </div>
            </div>
        </div>
    )
}
export default Cardsell;