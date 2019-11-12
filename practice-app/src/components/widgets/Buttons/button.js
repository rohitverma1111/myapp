import React from 'react';
import {Link} from 'react-router-dom';
import styels from './button.module.css';

const button = (props) => {
    let template = null;

    switch(props.type){
        case 'loadmore':
            template = (
                <div className={styels.blue_btn} 
                onClick={props.loadmore}>
                    {props.cta}
                </div>
            );
        break;
        case 'linkTo':
            template = (
                <Link to={props.linkTo}
                    className={styels.blue_btn}
                >
                    {props.cta}
                </Link>
            )
        break;
        default:
            template = null;
    }
    return template;
}
 
export default button;