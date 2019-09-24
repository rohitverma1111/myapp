import React from 'react';
import ReactDom from 'react-dom';
import Header from './header';

class App extends React.Component{
    render(){
        return(
            <Header />
        )
    }
}
ReactDom.render(
<App />, 
document.getElementById('root'));