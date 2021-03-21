import sleepSvg from '../images/sleep.svg'
import eatSvg from '../images/eat.svg'
import sportSvg from '../images/muscle.svg'

const DATA = {food: 100, sport: 17, sleep: 42}

export default function BarCharts() {
    return (
        <div className="barCharts">
            <div className="barCharts__bar">
                <img src={eatSvg}/>
                <div style={{ 
                    background: 'rgb(133, 167, 133)',
                    width: `${DATA.food}%`
                }}></div>
            </div>
            <div className="barCharts__bar">
                <img src={sportSvg}/>
                <div style={{ 
                    background: 'rgb(163, 129, 129)',
                    width: `${DATA.sport}%`
                }}></div>
            </div>            
            <div className="barCharts__bar">
                <img src={sleepSvg}/>
                <div style={{ 
                    background: 'rgb(131, 131, 187)',
                    width: `${DATA.sleep}%`
                }}></div>
            </div>
        </div>
    )
}
