import React, { Component } from 'react';

class Mystate extends Component {
    constructor(props) {
        super(props);
        this.state = { myHero: "My mom" };
    }
    changeSuperHero = () => {
        this.setState({ myHero: 'shree Ram' })
    }

    shouldComponentUpdate() {
        return true;
    }

    render() {
        return (
            <div>
                <h1>My super Hero is {this.state.myHero}</h1>
                <button type="button" onClick={this.changeSuperHero}>change super hero</button>
            </div>

        )
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ myHero: 'shree krishna' })
        }, 3000)

    }
}
export default Mystate;