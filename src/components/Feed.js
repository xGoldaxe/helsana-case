import React from 'react'
import Article from './article'
import EventBox from './EventBox'

export default function Feed() {
    return (
        <div className="feed">
            <div className="feed__content">
                <Article></Article>
                <Article></Article>
                <Article></Article>
            </div>
            <EventBox />
        </div>
    )
}
