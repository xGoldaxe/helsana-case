import React from 'react'
import EventBox from './components/EventBox'
import Feed from './components/Feed'
import Nav from './components/Nav'
import ProfilSummary from './components/ProfilSummary'
import SearchBar from './components/SearchBar'
import SortingBar from './components/SortingBar'

export default function Home() {
    return (
        <>
            <div className="home">
                <Nav/>
                <SearchBar/>
                <div className="mainBlock">
                    <ProfilSummary/>
                    <SortingBar/>
                    <Feed/>
                </div>
            </div>

        </>
    )
}
