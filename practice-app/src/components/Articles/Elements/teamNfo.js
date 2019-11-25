import React from 'react';
import styles from '../articles.module.css';
const TeamNFO = (props) => {
    return ( 
        <div className={styles.teaminfoHeader}>
            <div className={styles.left}>
                <img src={`/images/teams/${props.team.logo}`}  width="50" height="50" />
            </div>
            <div className={styles.right}>
                <div>{props.team.city} {props.team.name}</div>
                <div><strong>W{props.team.stats[0].wins} - L{props.team.stats[0].defeats}</strong></div>
            </div>
        </div>
     );
}
 
export default TeamNFO;