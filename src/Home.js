import React, {useState} from 'react'
import Nav from './components/Nav'
import SearchBar from './components/SearchBar'
import HomeBlock from './homeBlocks/HomeBlock'
import MessageBlock from './homeBlocks/MessageBlock'
import ProfileBlock from './homeBlocks/ProfileBlock'

export default function Home() {
    const [homePlace, setHomePlace] = useState(0)
    const routes = [<HomeBlock />,<ProfileBlock />, <MessageBlock />]
    const blocksPage = ['Home', 'My Profile', 'Messages', 'Tutoriels']

    var route = function createRoute() {
        return routes[homePlace]
    }

    function changeBlock(place) {
        setHomePlace(place)
    }

    return (
        <>
            <div className="home">
                <Nav onClick={changeBlock} blocksPage={blocksPage} actualBlock={homePlace}/>
                <SearchBar/>
                <div className="mainBlock">
                    {route()}
                </div>
            </div>

        </>
    )
}

