import React, { Component } from 'react';

class FormSubmit extends Component {
    constructor() {
        super();
        this.state = { userName: '' }
    }
    doGreeting = (event) => {
        this.setState({ userName: event.target.value });
    };

    submitFormHandler = (event) => {
        alert('Form is submitted : ' +this.state.userName)
    }

    render() {
        let result ='';
        if(this.state.userName){
            result = <h1>hello { this.state.userName}</h1>
        }
        else {
            result ='';
        }

        return (
            <div>
                <form onSubmit={this.submitFormHandler}>
                    {result}
                    <h1>Greetings  {this.state.userName}</h1>
                    <p>Enter your Name:</p>
                    <input type="text" onChange={this.doGreeting}></input>
                    <input type = "submit" value ="click Here"/>
                </form>
            </div>
        )
    }
}
export default FormSubmit;