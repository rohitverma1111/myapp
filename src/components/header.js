import React, {Component} from 'react';


class Header extends Component { 

    state = {
        keywords: ''
    }

    inputChange = (event) => {
        this.setState({
            keywords: event.target.value
        });
    }

    render(){
        return(
            <header className={this.state.active }>
                <div className="logo">logo</div>
                <input onChange={this.inputChange} type="text"/>
            </header>
        )
    }
} 
export default Header;