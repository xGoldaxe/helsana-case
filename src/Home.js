import React, {useState} from 'react'
import ModalWrapper from './components/modalWrapper'
import Nav from './components/Nav'
import NavMobile from './components/NavMobile'
import SearchBar from './components/SearchBar'
import HomeBlock from './homeBlocks/HomeBlock'
import MessageBlock from './homeBlocks/MessageBlock'
import ProfileBlock from './homeBlocks/ProfileBlock'

export default function Home() {
    const [homePlace, setHomePlace] = useState(0)
    const routes = [<HomeBlock />,<ProfileBlock />, <MessageBlock />]
    const blocksPage = ['Home', 'My Profile', 'Messages', 'Tutorials']
    const [menuOn, setMenuOn] = useState(true)


    var route = function createRoute() {
        return routes[homePlace]
    }

    function changeBlock(place) {
        setHomePlace(place)
        setMenuOn(false)
    }

    function openMenu() {
        setMenuOn(x => !x)
    }

    return (
        <>
            <div className="home">
                <Nav onClick={changeBlock} blocksPage={blocksPage} actualBlock={homePlace}/>
                {menuOn && <NavMobile onClick={changeBlock} blocksPage={blocksPage} actualBlock={homePlace}  openMenu={openMenu}/>}
                <SearchBar openMenu={openMenu}/>
                <div className="mainBlock">
                    {route()}
                </div>
            </div>
        </>
    )
}

