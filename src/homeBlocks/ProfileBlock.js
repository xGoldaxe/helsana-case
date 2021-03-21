import ProfilSummary from '../components/ProfilSummary'
import Tag from '../components/tag'

export default function ProfileBlock() {
    return <>
        <ProfilSummary/>
        <div className="profilPage">
            <ProfilBox />
            <ProfilGraph />
        </div>
    </>
}

function ProfilBox() {
    const data = {
        name: 'John Doe',
        age: '24',
        tags: ['Judo', 'Boxe', 'MMA']
    }

    return <div className="profilBox">
        <div className="profilBox--text">
            <div style={{display: 'flex'}}>
                <div className="profilBox__picture"></div>
                <div>
                    <h3 className="profilBox__name">{data.name}, {data.age}</h3>
                    <Tag tags={data.tags} />
                </div>
            </div>

            <div className="profilBox__desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque, erat eu hendrerit luctus, augue leo vehicula metus, et dapibus justo nunc non tellus. C
            </div>
        </div>
        <button>Modify!</button>
    </div>
}

function ProfilGraph() {
    return <div className="profilGraph">
        <h2>Today summary</h2>
        <p>Number of activities: 5</p>
        <p>Step: 14030</p>
        <p>Calories burn: 2603kcal</p>
    </div>
}