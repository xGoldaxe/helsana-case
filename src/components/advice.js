import React, {useState, useEffect} from 'react'
import articleImage from '../images/articleDefault.jpg'

export default function Advices({data}) {
    const [dataAdvices, setDataAdvices] = useState(null)

    useEffect(() => {
        setDataAdvices([{
            title: "It's time to level up your push up!",
            img: ""
        },{
            title: "It's time to level up your muscle up!",
            img: ""
        }])
    }, [])

    if(dataAdvices) {
        return <>   
            {dataAdvices.map((advice,i) => {
                return <Advice data={advice} key={i}></Advice>
            })}              
        </>
    } else {
        return <p>Loading...</p>
    }
}

function Advice({data}) {
    return <div className="advice">
        <h3>{data.title}</h3>
        <hr></hr>
        <div></div>
    </div>
}
 