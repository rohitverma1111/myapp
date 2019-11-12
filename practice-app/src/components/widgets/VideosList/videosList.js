import React , {Component} from 'react';
import axios from 'axios';
import Button from '../Buttons/button';
import {URL} from '../../../config';
import styles from './videosList.module.css';
import VideosListTemplate from './VideosListTemplate';

class videosList extends Component {
    state = { 
        teams:[],
        videos:[],
        start: this.props.start,
        end : this.props.start + this.props.amount,
        amount: this.props.amount
     }
     componentDidMount (){
         this.request(this.state.start, this.state.end);
     }
     request = (start, end) =>{
         if(this.state.teams < 1){
             axios.get(`${URL}/teams`)
             .then(response  => {
                this.setState({
                    teams: response.data
                })
             })
         }

         axios.get(`${URL}/videos?_start=${start}&_end=${end}`)
         .then(response =>{
             this.setState({
                 videos:[...this.state.videos,...response.data],
                 start,
                 end
             })
         })
     }

     renderVideos = () =>{
        let template = null;
        switch(this.props.type){
            case('homecard'):
                template = <VideosListTemplate data={this.state.videos} teams={this.state.teams} />
            break;
            default:
                template = null;
        }
        return template;
     }

     loadMore = () =>{
        let end = this.state.end + this.state.amount;
        this.request(this.state.end, end);
     }


     renderButton = () => {
        return this.props.loadmore ? 
        <Button cta="Load more Videos" type="loadmore" loadmore={()=>this.loadMore()} />
        :
        <Button cta="More Videos" type="linkTo" linkTo="/videos" />
     }

     renderTitle = () => {
        return this.props.title ? 
        <h3><strong>NBA</strong>Videos</h3>
        :
        null;
     }
    render() { 
        return ( 
            <div className={styles.video_wrapper}>
                { this.renderTitle() }
                { this.renderVideos() }
                { this.renderButton() }
            </div>
         );
    }
}
 
export default videosList;