import React from 'react'

export default function Tag({tags}) {
    return (
        <ul className="tagUl">
            {tags.map((tag, i) => {
                return <li key={i}>{tag}</li>
            })}
        </ul>
    )
}
