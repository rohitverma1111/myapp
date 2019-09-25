import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profiles';

const App = () =>{
    return(
        <BrowserRouter>
            <div>
                <Route path="/" exact  component={Home} />
                <Route path="/posts" component={Posts} />
                <Route path="/profile" component={Profile} />
            </div>
        </BrowserRouter>
    )
}
ReactDom.render(
    <App />,
    document.querySelector('#root')
)