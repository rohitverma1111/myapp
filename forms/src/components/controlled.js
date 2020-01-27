import React, { Component } from 'react';

class Controlled extends Component {

    state = {
        fname: "",
        lname: ""
    }
    handleNameChange = (e) =>{
        this.setState({
            fname : e.target.value
        })
        console.log(e.target.type);
    }
    handleLNameChange = (e) =>{
        this.setState({
            lname : e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state)
    }
    render(){
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-element">
                        <label>Enter First Name </label>
                        <input type="text"
                        onChange={this.handleNameChange}
                        value={this.state.fname}
                        />
                    </div>
                    <div className="form-element">
                    <label>Enter Last Name </label>
                        <input type="text" 
                         value={this.state.lname}
                         onChange={this.handleLNameChange}
                        />
                    </div>
                    <button type="submit">Click</button>
                </form>
            </div>
        )
    }
}

export default Controlled;