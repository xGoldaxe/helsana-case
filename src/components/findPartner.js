import React, {useState, useEffect} from 'react'
import BarCharts from './barCharts'
import CircleScore from './CircleScore'
import ModalWrapper from './modalWrapper'

export default function Partners({data}) {
    const [dataPartner, setDataPartner] = useState(null)
    const [modalActivate, setModalActivate] = useState(false)

    useEffect(() => {
        setDataPartner([{
            name: "Jane Ode",
            id:"004",
            age: "21",
            description: 'Hey im Jane Ode and im a random user of the helsana health social app, i like doing sport, eating healthy food and sleep well. And the best is that i earn money for that! Isnt it incredible? Please connect with me im very friendly!',
            healthScore: '42',
            preferences: ['swimming', 'running', 'horsing']
        },
        {
            name: "Randome",
            id:"002",
            age: "44",
            description: 'Hey im Jane Ode and now i will say some random things ar,aoer,paorpoae,fpkla,e ok,fgaeok,fdoika,fok ,aeokf,aokpef, pa',
            healthScore: '63',
            preferences: ['judo','mma','boxe']
        }])
    }, [])

    function createModal(data) {
        setModalActivate({
            name: data.name,
        })
        removeData(data.id)
    }

    function destroyModal() {
        setModalActivate(false)
    }

    function removeData(id) {
        setDataPartner(function removedData() {
            var newData = []
            dataPartner.forEach((data)=> {
                if(!(data.id == id)) {
                    newData.push(data)
                }
            })
            return newData
        })
    }

    if(dataPartner) {
        return <>   
            {modalActivate && 
                <ModalWrapper outClick={destroyModal}>
                    <h2>You add {modalActivate.name}, you will be able to chat with this user when he will add you back.</h2>
                    <button onClick={destroyModal}>Got it</button>
                </ModalWrapper>
            }
            {dataPartner.map((partner,i) => {
                return <Partner data={partner} key={i} onClick={() => createModal(partner)} deleteClick={() => removeData(partner.id)}/>
            })}              
        </>
    } else {
        return <p>Loading...</p>
    }
}


function Partner({data, onClick, deleteClick}) {
    return <>   {data &&
    <div className="partner">
        <button className="partner__nope" onClick={deleteClick}>Nope</button>
        <div className="partner--inside">
            <div className="partner__profile">
                <h3>{data.name + ', ' + data.age}</h3>
            </div>
            <ul className="partner__tags">
                {data.preferences.map((preference) => {
                    return <li key={preference}>{preference}</li>
                })}
            </ul>
            <p className="partner__desc">{data.description}</p>
            <div className="partner__graph">
                    <CircleScore score={data.healthScore} />
                    <BarCharts/>
            </div>
        </div>
        <button onClick={onClick}>Connect</button>
    </div>}
    </>
}
 