import React, { Component } from 'react';
import axios from 'axios';
import SliderTemplet from './sliderTemplate';
import {URL} from '../../../config';
class NewsSlider extends Component {
    state = { 
        news : []
     }
     UNSAFE_componentWillMount(){
        axios.get(`${URL}/articles?_start=${this.props.start}&_end=${this.props.end}`)
        .then(response => {
            this.setState({
                news: response.data
            })
        })
     }
    render() { 
        return (
            <SliderTemplet data={this.state.news} 
            type={this.props.type}
            settings = {this.props.settings}
            />
          );
    }
}
 
export default NewsSlider;