import React, {useState} from 'react'
import yogaImg from '../images/yoga.svg'
import menu from '../images/cross2.svg'


export default function NavMobile({onClick, blocksPage, actualBlock, openMenu={openMenu}}) {

    return (
        <nav className="nav nav--mobile">
            <img className="nav__menu" src={menu} alt="" onClick={openMenu}/>
            <ul>
                {blocksPage.map((block,i) => {
                    if(i == actualBlock) {
                        return <li key={i} className="selected" key={i} onClick={() => {onClick(i)}}>{block}</li>
                    }
                    return <li key={i} onClick={() => {onClick(i)}}>{block}</li>
                })}
            </ul>
            <div className="nav__helsanaLink">
                <img src={yogaImg} alt=""/>
                <div className="nav__helsanaLink__ball"></div>
            </div>
            <p>Helsana - team 2021 - START Hack</p>
        </nav>
    )
}
