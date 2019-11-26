import React, { Component } from 'react';
import axios from 'axios';
import {URL} from '../../../../config';
import styles from '../../articles.module.css';
import Header from './header';
import VideosRelated from '../../../widgets/VideosList/videosRelated/videosRelated';
class ArticleViideos extends Component {
   
    state = { 
        article:[],
        team:[],
        teams:[],
        related:[]
     }
     getData = ()=>{
        axios.get(`${URL}/videos?id=${this.props.match.params.id}`)
        .then(response => {
            let article = response.data[0];
            axios.get(`${URL}/teams?id=${article.team}`)
            .then(response => {
                   let  team = response.data;
                   axios.get(`${URL}/teams`)
                   .then(response=>{
                       let teams = response.data;
                       axios.get(`${URL}/videos?q=${team[0].city}&_limit=10`)
                       .then(res => {
                           this.setState({
                                team,
                                article,
                                teams,
                                related: res.data
                           })
                       })
                   })
            })
        })
     }
     componentDidMount(){
       this.getData()
     }
     
     componentDidUpdate(prevProps){
         if(this.props.location.pathname !== prevProps.location.pathname){
            this.getData()
         }
     }
    render() {
        const article = this.state.article;
        const team = this.state.team;
        return ( 
            <div>
                <Header teamData={team[0]} />
                <div className={styles.videoWrapper}>
                    <h1>{article.title}</h1>
                    <iframe 
                        title="player" 
                        width="100%" 
                        height="300px" 
                        src={`https://www.youtube.com/embed/${article.url}`}>

                    </iframe>
                </div>
                <VideosRelated data={this.state.related} teams={this.state.teams} />
            </div>
         );
    }
}
 
export default ArticleViideos;