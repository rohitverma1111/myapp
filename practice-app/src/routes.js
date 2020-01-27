import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home/home';
import Layout from './hoc/layout/Layout';
import NewsArtiles from './components/Articles/News/Post/index';
import ArticleVideos from './components/Articles/videos/video/index';
import VideosMain from './components/Articles/videos/video/main/videosMain';
import NewsMain from './components/Articles/News/main/newsMain';
class Routes extends Component {
    render() { 
       return(
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/videos" exact component={VideosMain} />
                    <Route path="/news" exact component={NewsMain} />
                    <Route path="/articles/:id" exact component={NewsArtiles} />
                    <Route path="/videos/:id" exact component={ArticleVideos} />
                </Switch>
            </Layout>
       )
    }
}
 
export default Routes;