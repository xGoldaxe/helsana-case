import React, {useState, useEffect} from 'react'
export default function Timeline() {
    const [todayStep, setTodayStep] = useState(null)

    useEffect(() => {
        setTodayStep([
            {
                name: 'wake up',
                time: 6,
                type: 'sleep'
            },
            {
                name: 'arms workout',
                time: 11,
                type: 'sport'
            }, {
                name: 'healthy eat',
                time: 12,
                type: 'food'
            }, {
                name: 'bed time',
                time: 22,
                type: 'sleep'
            },
        ])
    }, [])

    return (
        <>
        <div className="timeline">
            <h3 className="timeline__title">Recommandations for today</h3>

            {todayStep ?
            <div className="timeline__blocks">
                {
                    todayStep.map((step, i) => {
                        return <div key={i} className={`timeline__step timeline__step__${step.type}`}>
                            <p className="timeline__step__name">{step.name}</p>
                            <p className="timeline__step__time">{step.time}h</p>
                        </div>
                    })
                }
            </div>
            :
            <p>Loading...</p>
            }
        </div>
        </>
    )
}
