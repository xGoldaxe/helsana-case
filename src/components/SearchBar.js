import React from 'react'
import bellNotif from '../images/bell.svg'
import menu from '../images/menu.svg'

export default function SearchBar({openMenu}) {
    return (
        <div className="searchBar">
            <img className="searchBar__menu" src={menu} alt="" onClick={openMenu}/>
            <p className="searchBar__logo">Vigor<span>Go</span></p>
            <input className="searchBar__bar" placeholder="Search"></input>
            <div className="searchBar__notif">
                <img src={bellNotif} alt=""/>
            </div>
            <div className="searchBar__profile">
                <p>Jhon Doe</p>
                <div></div>
            </div>
        </div>
    )
}

