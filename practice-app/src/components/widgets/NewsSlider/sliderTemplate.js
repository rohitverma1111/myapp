import React from 'react';
import Slick from 'react-slick';
import style from './slider.module.css';
import {Link} from 'react-router-dom';

const SliderTemplate = (props) => {
    let sliderTemplates = null;
    const settings = {
        dots: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        ...props.settings
    }

    switch(props.type){
        case('featured'):
            sliderTemplates = props.data.map((item,i) =>{
                return(
                    <div key={i}>
                        <div className={style.featuredItem}>
                            <div className={style.featuredImage}
                            style={{
                                backgroundImage: `url(../images/articles/${item.image})`
                            }}>
                            </div>
                            <Link to={`/articles/${item.id}`}>
                                <div className={style.featuredCaption}>
                                    {item.title}
                                </div>
                            </Link>
                        </div>
                    </div>
                )
            })
            break;
        default:
            sliderTemplates = null;
    }
    return ( 
       
        <Slick {...settings}>
            {sliderTemplates}
        </Slick>
     );
}
 
export default SliderTemplate;