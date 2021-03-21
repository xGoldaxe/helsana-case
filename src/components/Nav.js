import React from 'react'
import yogaImg from '../images/yoga.svg'

export default function Nav({onClick, blocksPage, actualBlock}) {
    return (
        <div className="nav">
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
        </div>
    )
}
