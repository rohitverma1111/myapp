import React from 'react';
import NewsSlider from '../widgets/NewsSlider/slider';
import NewsList from '../widgets/NewsList/newsList';
import VideosList from '../widgets/VideosList/videosList';
const Home = () =>{
    return(
        <div>
            <NewsSlider
            type="featured" 
            start={3}
            end={6}
            settings= {{
                dots: false
            }}
            />
            <NewsList 
            type="homecard"
            loadmore={true}
            start={3}
            amount={3}
            />
            <VideosList 
                type="homecard"
                title={true}
                loadmore={true}
                start={0}
                amount={3}
            />
            
        </div>
    )
}

export default Home;