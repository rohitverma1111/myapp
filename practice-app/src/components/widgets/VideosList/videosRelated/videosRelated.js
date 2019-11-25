import React from 'react';
import VideosListTemplate from '../VideosListTemplate';
import styles from '../videosList.module.css';
const VideosRelated = (props) => {
    return ( 
        <div className={styles.relatedWrapper}>
            <VideosListTemplate data={props.data} teams={props.teams} />
        </div>
    );
}
 
export default VideosRelated;