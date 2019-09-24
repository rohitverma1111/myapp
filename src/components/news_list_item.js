import React from 'react';
import classes from '../css/styles.css';
const NewsItem =  ({item}) => {
console.log(classes)
    return(
        <div className={classes.grey}>
            <h3>{item.title}</h3>
            <div>
                {item.feed}
            </div>
        </div>
    )
}
export default NewsItem;