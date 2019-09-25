import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import JSON from './db.json';
//components
import Header from './components/header';
import NewsList from './components/news_list';

class App extends Component {

    state = {
        news: JSON,
        filterd:[]
    }
    getKeywords = (event) =>{
        let keyword = event.target.value;
        let filterd = this.state.news.filter((item)=>{
            return item.title.indexOf(keyword) > -1;
        });
        this.setState({
            filterd
        })
    }
    render(){
        let newsFilterd = this.state.filterd;
        let newsAll = this.state.news;
        return (
            <div>
            <Header keywords={this.getKeywords}/>
            <NewsList news={ newsFilterd == 0 ? newsAll : newsFilterd} >
                <h3>News are: </h3>
            </NewsList>
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('root'));
