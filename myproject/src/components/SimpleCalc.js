import { render } from '@testing-library/react';
import React, { Component } from 'react';

class SimpleCalc extends Component {
    constructor() {
        super();
        this.state = { firstNum: '', secondNum: '', result: 'result will be displayed here' }
    }

    doCalculation = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value });
        if (!Number(value)) {
            alert("please enter a numeric value")
        }
        else
            this.setState({ [name]: value });

    };
    submitFormHandler = (event) => {
        if (this.state.firstNum == 0 || this.state.secondNum == 0)
            alert("please enter a non Zero value")

        let sum = Number(this.state.firstNum) + Number(this.state.secondNum)
        let sub = Number(this.state.firstNum) - Number(this.state.secondNum)
        this.setState({ result: 'sum : ' + sum + '  sub : ' +sub})
        event.preventDefault();

    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitFormHandler}>
                    <p>Enter first number: </p>
                    <input type="text" name='firstNum' onChange={this.doCalculation} />
                    <p> Enter second number:</p>
                    <input type="text" name='secondNum' onChange={this.doCalculation} />
                    <input type="submit" value='click me' />
                </form>
                <p>{this.state.result}</p>
            </div>
        )
    }
}

export default SimpleCalc;