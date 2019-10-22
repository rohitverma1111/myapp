import React from 'react';
import {Link} from 'react-router-dom';
import style from './header.module.css';
import FontAwesone from 'react-fontawesome';
import SideNav from './SideNav/sidenav';
const Header = (props)=>{

    const navBars = () =>(
        <div className={style.bars}>
            <FontAwesone name="bars" 
            onClick = {props.onOpenNav}/>
        </div>
    )

    const logo = () => (
            <Link to="/" className={style.logo}>
                <img alt="nba logo" src="/images/nba_logo.png" />
            </Link>
        )
    
    return(
        <header className={style.header}>
            <SideNav {...props}/>
            <div className={style.headerOpt}>
                {navBars()}
                {logo()}
            </div>
        </header>
    )
}
export default Header;