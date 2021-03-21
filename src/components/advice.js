import React, {useState, useEffect} from 'react'
import articleImage from '../images/articleDefault.jpg'
import ModalWrapper from './modalWrapper'
import defaultImage from '../images/articleDefault.jpg'


export default function Advices({data}) {
    const [dataAdvices, setDataAdvices] = useState(null)
    const [modalActivate, setModalActivate] = useState(false)
    
    useEffect(() => {
        setDataAdvices([{
            title: "It's time to level up your push up!",
            img: "",
            modal: {
                title: 'Add push up to your routines',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet, lorem nec blandit ornare, leo neque sagittis metus, sed consequat nisi magna eget ipsum. Cras.'
            }
        },{
            title: "It's time to level up your muscle up!",
            img: "",
            modal: {
                title: 'Add muscle up to your routines',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat ex et accumsan vestibulum. Donec purus velit, eleifend volutpat lacinia non, rutrum eget lorem. Mauris ac mattis turpis. Vivamus rutrum hendrerit diam. Sed at tempus mi, et ullamcorper eros. Fusce tincidunt rhoncus commodo. Donec egestas, massa id interdum iaculis, felis risus viverra lorem, sed volutpat risus ligula vitae ipsum. Duis lobortis erat quis interdum congue. Donec malesuada sollicitudin aliquam. Ut ultrices commodo hendrerit. Donec id euismod diam. Suspendisse in ornare ex, eget tincidunt nisi. Aliquam erat volutpat. Phasellus a efficitur felis, et fermentum nisl. Donec porttitor ante ut tempus volutpatSed ut turpis metus. Vestibulum vitae dignissim sem. Nulla non ligula dignissim, aliquam nisl a, elementum diam. Integer malesuada nisl et urna rhoncus tempor. Nullam auctor risus et purus ultrices dignissim. In ante nisi, vestibulum ut orci in, tincidunt posuere ipsum. Donec molestie dictum arcu, sed vehicula velit porttitor eu.'
            }
        }])
    }, [])

    function createAdviceModal(data) {
        console.log('yuo')
        setModalActivate({
            title: data.modal.title,
            content: data.modal.content
        })
    }

    function destroyModal() {
        setModalActivate(false)
    }

    if(dataAdvices) {
        return <>   
            {modalActivate && 
                <ModalWrapper outClick={destroyModal}>
                    <h3>{modalActivate.title}</h3>
                    
                    <p>{modalActivate.content}</p>
                    <button onClick={destroyModal}>Im in !</button>
                    <button className='subButton' onClick={destroyModal}>No, thanks</button>
                </ModalWrapper>
            }
            {dataAdvices.map((advice,i) => {
                return <Advice data={advice} key={i} onClick={() => createAdviceModal(advice)}></Advice>
            })}              
        </>
    } else {
        return <p>Loading...</p>
    }
}

function Advice({data, onClick}) {
    return <div className="advice" onClick={onClick}>
        <h3>{data.title}</h3>
        <hr></hr>
        <div></div>
    </div>
}
 