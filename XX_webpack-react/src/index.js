import React, {Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      JSON: "dsds"
    }
  }
 

  render(){
    console.log(this.state.JSON);
    return(
      <div>
        Welcome team
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));