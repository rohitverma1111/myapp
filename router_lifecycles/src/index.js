import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, NavLink, Switch} from 'react-router-dom';

import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profiles';
import PostItem from './components/post_item';
import Life from './components/life';
import Conditional from './components/conditional';
import Pc from './components/purecomponenet';
import User from './components/user';

const App = () =>{
    return(
        <BrowserRouter>
            <div>
                <header>
                    <NavLink to="/">Home</NavLink><br/>
                    <NavLink 
                    to="/posts"
                    activeStyle={{color:'red'}}
                    activeClassName="selected"
                    >Posts</NavLink><br/>
                    <NavLink to={{pathname: '/profile', hash:'#frances', search: '?profile=true'}}>Profile</NavLink><br/>
                    <NavLink to="life">Life</NavLink><br/>
                    <NavLink to="conditional">Conditional</NavLink><br/>
                    <NavLink to="purecomponenet">PureComponenet</NavLink><br />
                    <NavLink to="user">User</NavLink>
                    <hr/>
                </header>
                <Switch>
                    <Route path="/posts/:id/:username" component={PostItem} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/posts"  component={Posts} />
                    <Route path="/life"  component={Life} />
                    <Route path="/conditional"  component={Conditional} />
                    <Route path="/purecomponenet" component={Pc} />
                    <Route path="/user" component={User} />
                    <Route path="/" exact component={Home} />
                    <Route render={()=> <h3>404</h3>} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}
ReactDom.render(
    <App />,
    document.querySelector('#root')
)