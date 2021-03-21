import ProfilSummary from '../components/ProfilSummary'
import React, {useState, useEffect} from 'react'
import Tag from '../components/tag'
import ModalWrapper from '../components/modalWrapper'

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
    const [modalActivate, setModalActivate] = useState(false)
    const [data, setData] = useState(null)

    function createModal(data) {
        setModalActivate({
            desc: data.desc
        })
    }

    function destroyModal() {
        setModalActivate(false)
    }

    function applyModal() {
        data.desc = modalActivate.desc
        destroyModal()
    }
    function onChange(event) {
        setModalActivate({desc: event.target.value})
    }
    
    useEffect(() => {
        setData({
            name: 'John Doe',
            age: '24',
            tags: ['Judo', 'Boxe', 'MMA'],
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque, erat eu hendrerit luctus, augue leo vehicula metus, et dapibus justo nunc non tellus. C'
        })
    }, [])


    return <div className="profilBox"> {
        data ?    
        <>     
            {modalActivate && 
                <ModalWrapper outClick={destroyModal}>
                    <h2>Profile modification</h2>
                    <textarea value={modalActivate.desc} onChange={(e) => onChange(e)}></textarea>
                    <button onClick={applyModal}>Apply the modifications</button>
                    <button className="subButton" onClick={destroyModal}>Cancel</button>
                </ModalWrapper>
            }     
            <div className="profilBox--text">
                <div style={{display: 'flex'}}>
                    <div className="profilBox__picture"></div>
                    <div>
                        <h3 className="profilBox__name">{data.name}, {data.age}</h3>
                        <Tag tags={data.tags} />
                    </div>
                </div>

                <div className="profilBox__desc">{data.desc}</div>
            </div>
            <button onClick={() => createModal(data)}>Modify</button>
        </>
        : <p>loading...</p>
    }
    </div>
}

function ProfilGraph() {
    return <div className="profilGraph">
        <h2>Today's summary</h2>
        <p>Number of activities: 5</p>
        <p>Steps: 14030</p>
        <p>Calories burned: 2603kcal</p>
    </div>
}