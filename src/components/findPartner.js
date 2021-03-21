import React, {useState, useEffect} from 'react'
import BarCharts from './barCharts'
import CircleScore from './CircleScore'

export default function Partners({data}) {
    const [dataPartner, setDataPartner] = useState(null)

    useEffect(() => {
        setDataPartner([{
            name: "Jane Ode",
            age: "21",
            description: 'Hey im Jane Ode and im a random user of the helsana health social app, i like doing sport, eating healthy food and sleep well. And the best is that i earn money for that! Isnt it incredible? Please connect with me im very friendly!',
            healthScore: '42',
            preferences: ['swimming', 'running', 'horsing']
        },
        {
            name: "Randome",
            age: "44",
            description: 'Hey im Jane Ode and now i will say some random things ar,aoer,paorpoae,fpkla,e ok,fgaeok,fdoika,fok ,aeokf,aokpef, pa',
            healthScore: '63',
            preferences: ['judo','mma','boxe']
        }])
    }, [])

    if(dataPartner) {
        return <>   
            {dataPartner.map((partner,i) => {
                return <Partner data={partner} key={i} />
            })}              
        </>
    } else {
        return <p>Loading...</p>
    }
}

function Partner({data}) {
    return <div className="partner">
        <button className="partner__nope">Nope</button>
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
        <button>Connect</button>
    </div>
}
 