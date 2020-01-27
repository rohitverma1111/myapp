import React, {Component} from 'react';
import {CSSTransition , TransitionGroup} from 'react-transition-group';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {URL} from '../../../config';
import styles from './NewsList.module.css';
import Button from '../Buttons/button';
import CardInfo from '../../widgets/cardinfo/cardinfo';
class NewsList extends Component {
    state = { 
        teams:[],
        items : [],
        start : this.props.start,
        end : this.props.start + this.props.amount,
        amount: this.props.amount
     }
     componentDidMount(){
        this.request(this.state.start, this.state.end);
     }
     request = (start, end) =>{
         if(this.state.teams.length < 1){
             axios.get(`${URL}/teams`).then(response =>{
                 this.setState({
                     teams: response.data
                 })
             })
         }
        axios.get(`${URL}/articles?_start=${start}&_end=${end}`)
        .then( response =>{
               this.setState({
                   items : [...this.state.items,...response.data],
                   start,
                   end
               })
           }
        )
     }
     loadmore = ()=>{
         let end = this.state.end + this.state.amount;
         this.request(this.state.end, end);
     }
     renderNews = (type) =>{
        let template = null;
        switch(type){
            case('homecard'):
                template = this.state.items.map((item, i) => (
                   <CSSTransition 
                    key={i} 
                    timeout={500} 
                    classNames={{
                        enter: styles.newsList_wraper,
                        enterActive: styles.newsList_wraper_enter
                    }}
                    > 
                       <React.Fragment>
                            <div className={styles.news_item}>
                                    <Link to={`articles/${item.id}`}>
                                        <CardInfo teams={this.state.teams} team={item.team} date={item.date} />
                                        <h2>{item.title}</h2>
                                    </Link>
                            </div>
                       </React.Fragment>
                   </CSSTransition>
                ))
                break;
                case('newsmain'):
                    template = this.state.items.map((item, i) => (
                        <CSSTransition 
                        key={i} 
                        timeout={500} 
                        classNames={{
                            enter: styles.newsList_wraper,
                            enterActive: styles.newsList_wraper_enter
                        }}
                        > 
                            <React.Fragment>
                                <div className={styles.news_item}>
                                        <Link to={`articles/${item.id}`}>
                                            <div className={styles.newsthumb}>
                                                <img src={`/images/articles/${item.image}`} alt="" /> 
                                            </div>
                                            <CardInfo teams={this.state.teams} team={item.team} date={item.date} />
                                            <h2>{item.title}</h2>
                                        </Link>
                                </div>
                            </React.Fragment>
                        </CSSTransition>
                    ))
                break;
            default:
            template = null;
        }
        return template;
    }
    render() {
        return ( 
            <React.Fragment>
                <TransitionGroup className="list" component="div">
                    {this.renderNews(this.props.type)}
                </TransitionGroup>
                <Button 
                    loadmore={()=> this.loadmore()}
                    type="loadmore"
                    cta="Load More News"
                />
            </React.Fragment>
         );
    }
}
 
export default NewsList;