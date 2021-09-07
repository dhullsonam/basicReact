import React, { Component } from 'react';

class Example extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        this.handleEvent = this.handleEvent.bind(this)
    }
    handleEvent() {
        this.setState({ count: this.state.count + 1 })
    };
    render() {
        return (
            <div>
                <button onClick={this.handleEvent}>Click me {this.state.count}</button>
            </div>
        )
    }
}
export default Example;