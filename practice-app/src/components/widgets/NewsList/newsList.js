import React, {Component} from 'react';
import {cssTransitions , TransitionGroup} from 'react-transition-group';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {URL} from '../../../config';
import styles from './NewsList.module.css';
class NewsList extends Component {
    state = { 
        items : [],
        start : this.props.start,
        end : this.props.start + this.props.amount,
        amount: this.props.amount
     }
     UNSAFE_componentWillMount(){
        this.request(this.state.start, this.state.end);
     }
     request = (start, end) =>{
        axios.get(`${URL}/articles?_start=${start}&_end=${end}`)
        .then( response =>{
               this.setState({
                   items : [...this.state.items,...response.data]
               })
           }
        )
     }
     loadmore = ()=>{
         let end = this.state.end + this.state.amount;
         this.request(this.state.end, end);
         this.setState({
             end
         })
     }
     renderNews = (type) =>{
        let template = null;
        switch(type){
            case('homecard'):
                template = this.state.items.map((item, i) => (
                   <div>
                       <div className={styles.news_item}>
                            <Link to={`articls/${item.id}`}>
                                <h2>
                                    {item.title}
                                </h2>
                            </Link>
                       </div>
                   </div>
                ))
                break;
            default:
            template = null;
        }
        return template;
    }
    render() {
        console.log(this.state)
        return ( 
            <div>
                {this.renderNews(this.props.type)}
                <div onClick={()=> this.loadmore()}>
                    Load more
                </div>
            </div>
         );
    }
}
 
export default NewsList;