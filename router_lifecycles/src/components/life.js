import React, {Component} from 'react';

class Life extends Component{
    // 1. get Default props

    // 2. set Default state
    state = { 
        title:'Life cycle'
    }

    //3. before render
    UNSAFE_componentWillMount(){
        console.log('3. before render - componentWillMount')
    }

    // before compoenet updates
    UNSAFE_componentWillUpdate(){
        console.log('Before render Update - componentWillUpdate');
    }

    // checking change in stae and props to avoid unnecessery rendering
    shouldComponentUpdate(nextProp, nextState ){
        if(nextState.title === 'something else'){
            return false;
        }
        return true;
    }

    // check for new propd
    UNSAFE_componentWillReceiveProps(){
        console.log('component before recive props - componentWillReceiveProps');
    }

    componentWillUnmount(){
        console.log('Unmout');
    }

    //4. render jsx

   render(){
       console.log('Main render');
       return(
           <div>
               <h3>{this.state.title}</h3>
               <div onClick={()=>{
                   this.setState({
                       title:'something elsee'
                   })
               }}>Change state</div>
           </div>
       )
   }

    //5. after render jsx
    componentDidMount(){
        console.log('5. after render jsx - componentDidMount');
        document.querySelector('h3').style.color = 'red';
    }

    //after component update
    componentDidUpdate(){
        console.log('After Render update - componentDidUpdate')
    }
}
export default Life;