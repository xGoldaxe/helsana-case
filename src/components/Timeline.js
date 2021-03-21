import React, {useState, useEffect} from 'react'
import ModalWrapper from './modalWrapper'

export default function Timeline() {
    const [todayStep, setTodayStep] = useState(null)
    const [modalActivate, setModalActivate] = useState(false)

    useEffect(() => {
        setTodayStep([
            {
                name: 'wake up',
                time: 6,
                type: 'sleep',
                modal: {
                    title: 'Wake up at 6am',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet, lorem nec blandit ornare, leo neque sagittis metus, sed consequat nisi magna eget ipsum. Cras.'
                }
            },
            {
                name: 'arms workout',
                time: 11,
                type: 'sport',
                modal: {
                    title: 'Arms training day',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet, lorem nec blandit ornare, leo neque sagittis metus, sed consequat nisi magna eget ipsum. Cras.'
                }
            }, {
                name: 'healthy meal',
                time: 12,
                type: 'food',
                modal: {
                    title: 'Prepare youreself a good meal',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat ex et accumsan vestibulum. Donec purus velit, eleifend volutpat lacinia non, rutrum eget lorem. Mauris ac mattis turpis. Vivamus rutrum hendrerit diam. Sed at tempus mi, et ullamcorper eros. Fusce tincidunt rhoncus commodo. Donec egestas, massa id interdum iaculis, felis risus viverra lorem, sed volutpat risus ligula vitae ipsum. Duis lobortis erat quis interdum congue. Donec malesuada sollicitudin aliquam. Ut ultrices commodo hendrerit. Donec id euismod diam. Suspendisse in ornare ex, eget tincidunt nisi. Aliquam erat volutpat. Phasellus a efficitur felis, et fermentum nisl. Donec porttitor ante ut tempus volutpatSed ut turpis metus. Vestibulum vitae dignissim sem. Nulla non ligula dignissim, aliquam nisl a, elementum diam. Integer malesuada nisl et urna rhoncus tempor. Nullam auctor risus et purus ultrices dignissim. In ante nisi, vestibulum ut orci in, tincidunt posuere ipsum. Donec molestie dictum arcu, sed vehicula velit porttitor eu.'
                }
            }, {
                name: 'bed time',
                time: 22,
                type: 'sleep',
                modal: {
                    title: 'Go to bed at 10pm',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet, lorem nec blandit ornare, leo neque sagittis metus, sed consequat nisi magna eget ipsum. Cras.'
                }
            },
        ])
    }, [])

    function createActivityModal(data) {
        setModalActivate({
            title: data.modal.title,
            content: data.modal.content
        })
    }

    function destroyModal() {
        setModalActivate(false)
    }

    return (
        <>
        {modalActivate && 
        <ModalWrapper outClick={destroyModal}>
            <h3>{modalActivate.title}</h3>
            <p>{modalActivate.content}</p>
            <button onClick={destroyModal}>Got it</button>

        </ModalWrapper>
        }
        <div className="timeline">
            <h3 className="timeline__title">Recommendations for today</h3>

            {todayStep ?
            <div className="timeline__blocks">
                {
                    todayStep.map((step, i) => {
                        return <div key={i} className={`timeline__step timeline__step__${step.type}`} onClick={() => createActivityModal(step)}>
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
