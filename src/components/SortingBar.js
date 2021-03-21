import React from 'react'

export default function SortingBar({onClick, allTopics, actualTopic}) {
    return (
        <div className="sortingBar">
            <ul>
                {allTopics.map((element,i) => {
                    if(actualTopic == i) {
                        return <li key={i} className="sortingBar__focus" onClick={() => onClick(i)}>{element}</li>
                    }
                    return <li key={i} onClick={() => onClick(i)}>{element}</li>
                })}
            </ul>
        </div>
    )
}
