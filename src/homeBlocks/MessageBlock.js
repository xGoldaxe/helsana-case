import React,{useState, useEffect} from 'react'
import paperPlane from '../images/paperPlane.svg'

export default function MessageBlock() {
    return <div className="message">
        <Chat />
        <FriendList />
    </div>
}


function FriendList() {
    const [friendData, setFriendData] = useState(null)

    useEffect(() => {
        setFriendData([{
            name:"John Doe",
            lastMessageDate: "2 hours ago",
            lastMessage: "Let's do sport together!",
            read: false
        },
        {
            name:"Jane Ode",
            lastMessageDate: "1 day ago",
            lastMessage: "Let's do sport together!",
            read: true
        },
        {
            name:"Randome",
            lastMessageDate: "19/03",
            lastMessage: "Let's do sport together!",
            read: true
        }])
    }, [])

    return <div className="friendList">
        <h3>Teamates</h3>
        <hr></hr>
        {friendData ? 
            friendData.map((friend,i) => {
                return <Friend key={i} data={friend}/>
            })
        :
        <p>Loading</p>}
    </div>
}

function Friend({data}) {
    return <div className="friendList__friend">
        <div className="friendList__friend__picture"></div>
        <div  className="friendList__friend--text">
            <p className="friendList__friend__name">{data.name}</p>
            <p className="friendList__friend__date">{data.lastMessageDate}</p>
            {data.read ? 
                <p className="friendList__friend__message">{data.lastMessage}</p>
                :
                <>
                    <div className="friendList__friend__message friendList__friend__message__unRead">
                        <span>{data.lastMessage}</span>
                        <div className="friendList__friend__message friendList__friend__message__spot">!</div>
                    </div>
                </>
            }
        </div>
    </div>
}

function Chat() {
    const [allMessages, setAllMessages] = useState(null)
    const userId = "001"

    useEffect(() => {
        setAllMessages([{
            userId: '000',
            message: 'Salut'
        },{
            userId: '001',
            message: 'Salut'
        },{
            userId: '000',
            message: 'Let\'s d sport together'
        },{
            userId: '000',
            message: 'Let\'s d sport together!'
        }
        ])
    }, [])

    return <div className="chat">
        <div className="chat__user">
            <div className="chat__user__picture"></div>
            <p  className="chat__user__name">Jhon Doe</p>
            <ul className="chat__user__tags">
                <li>Judo</li>
                <li>Boxe</li>
                <li>MMA</li>
            </ul>
        </div>
        <div className="chat__messages">
            {allMessages ? 
            <>
                {allMessages.map((message,i) => {
                    if(message.userId == userId) {
                        return <div key={i} className="chat__messages__message chat__messages__message__self">
                                <div className="chat__messages__message__picture"></div>
                                <p>{message.message}</p>
                            </div>
                    }
                    return <div key={i} className="chat__messages__message">
                        <div className="chat__messages__message__picture"></div>
                        <p>{message.message}</p>
                    </div>
                })}
            </>
            : 
                <p>Loading...</p>}
            <div className="chat__messages__typeMessage">
                <input placeholder='Type a message'></input>
                <img src={paperPlane}></img>
            </div>
        </div>
    </div>
}