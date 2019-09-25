import React from 'react';
import classes from '../css/styles.css';

const Header = (props) =>{
    
        return (
            <header>
                <div className={classes.logo}>Logo</div>
                <input onChange={props.keywords} type="text"/>
            </header>
        )
}

export default Header;