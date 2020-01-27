import React from 'react';
import Slider from '../../../widgets/NewsSlider/slider';
import NewsList from '../../../widgets/NewsList/newsList';
const NewsMain = (props) => {
    return ( 
        <div>
             <Slider
            type="featured" 
            start={3}
            end={6}
            settings= {{
                dots: false
            }}
            />
            <NewsList 
            type="newsmain"
            loadmore={true}
            start={3}
            amount={6}
            />
        </div>
     );
}
 
export default NewsMain;