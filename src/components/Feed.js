import React, {useState, useEffect} from 'react'
import Advices from './advice'
import Articles from './article'
import EventBox from './EventBox'
import Partners from './findPartner'
import SortingBar from './SortingBar'

export default function Feed() {
    const [feedTopic, setFeedTopic] = useState(0)
    const allTopics = ['Advices', 'Find partner', 'articles']

    
    function topicChange(topicValue) {
       setFeedTopic(topicValue)
    }


    
    return (
        <>
            <SortingBar onClick={topicChange} allTopics={allTopics} actualTopic={feedTopic}/>
            <div className="feed">
                <div className="feed__content">
                    <FeedContent topic={feedTopic} />
                </div>
                <EventBox />
            </div>
        </>
    )
}


function FeedContent({topic}) {
    if(topic == 0) {
        return <Advices />
    } else if(topic == 1) {
        return <Partners />
    } else if(topic == 2) {
        return <Articles />
    }
    else {
        return <p>Nothing</p>
    }
}