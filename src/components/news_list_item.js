import React from 'react';
import {css} from 'glamor';

const NewsItem = ({item}) => {
    let news_item = css({
        padding: '20px',
        boxSizing: 'border-box',
        borderBottom: '1px solid #ccc',
        ':hover':{
            color: 'red'
        },
        '@media(max-width: 500px)':{
            color: 'blue'
        }
    })
    let item_greay = css({ 
        background : "lightgrey"
    })
    return(
        <div className={`${news_item} ${item_greay}`}>
                <h3>{item.title}</h3>
                <p>{item.feed}</p>
            </div>
    )
}

export default NewsItem;