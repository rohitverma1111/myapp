import React from 'react';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: ''};
    }
    setInput = (event)=>{
        this.setState({value: event.target.value});
        console.log(event.target.value);
    }
    render(){
        return(
            <>
                <h1>Header</h1>
                <input type="text" value={this.state.value} onChange={this.setInput}/>
            </>
        )

    }
}
export default Header;