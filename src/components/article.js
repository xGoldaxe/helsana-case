import React, {useState, useEffect} from 'react'

export default function Articles({data}) {
    const [dataArticles, setDataArticles] = useState(null)

    useEffect(() => {
        setDataArticles([{
                title: "The best trails of Switzerland",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque, erat eu hendrerit luctus, augue leo vehicula metus, et cumsan molestie, nisi metus vehicu..."
            },
            {
                title: "How to do 20 perfect muscle up within 10 DAYS",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque, erat eu hendrerit luctus, augue leo vehicula metus, et cumsan molestie, nisi metus vehicu..."
            }])
    }, [])

    if(dataArticles) {
        return <>   
            {dataArticles.map((advice,i) => {
                return <Article data={advice} key={i} />
            })}              
        </>
    } else {
        return <p>Loading...</p>
    }
}

function Article({data}) {
    return <div className="article">
        <h3>{data.title}</h3>
        <hr></hr>
        <div><p>{data.content}</p></div>
    </div>
}
 