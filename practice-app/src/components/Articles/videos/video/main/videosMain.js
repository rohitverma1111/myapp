import React from 'react';
import NewsSlider from '../../../../widgets/NewsSlider/slider';
import VideosList from '../../../../widgets/VideosList/videosList';
const VideosMain = () => {
    return ( 
        <div>
            <NewsSlider 
            type="featured"
            start={3}
            end={6}
            settings={
                { dots: false}
            }
            />
            <VideosList 
            type="homecard"
            loadmore={true}
            start={3}
            amount={3}
            />
        </div>
     );
}
 
export default VideosMain;