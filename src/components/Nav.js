import React from 'react'
import yogaImg from '../images/yoga.svg'

export default function Nav() {
    return (
        <div className="nav">
            <ul>
                <li>My profile</li>
                <li>Home</li>
                <li>Messages</li>
                <li>Tutoriels</li>
                <li>Who are we?</li>
            </ul>
            <div className="nav__helsanaLink">
                <p>become a customer</p>
                <img src={yogaImg} alt=""/>
            </div>
        </div>
    )
}
