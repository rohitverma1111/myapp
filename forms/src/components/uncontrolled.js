import React, { Component } from 'react';

class Uncontrolled extends Component {

    handleSubmitClick = (e) =>{
        e.preventDefault();
        const value = {
            fname:this.fname.value,
            lname:this.lname.value
        }
        console.log(value);
    }
    render(){
        return(
            <div className="container">
            <form>
                <div className="form-element">
                    <label>Enter First Name </label>
                    <input type="text"
                        ref={input => this.fname = input}
                    />
                </div>
                <div className="form-element">
                <label>Enter Last Name </label>
                    <input type="text" 
                    ref={input => this.lname = input}
                    />
                </div>
                <button onClick={this.handleSubmitClick}>Sign in</button>
            </form>
        </div>
        )
    }
}

export default Uncontrolled;