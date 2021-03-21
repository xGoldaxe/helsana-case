import React from 'react'
import bellNotif from '../images/bell.svg'

export default function SearchBar() {
    return (
        <div className="searchBar">
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
