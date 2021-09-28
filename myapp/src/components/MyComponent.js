import React, { Component } from 'react';

class MyComponent extends Component {
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

        );
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ myHero: 'shree krishna' })
        }, 3000)

    }
    getSnapshotBeforeUpdate(prevProps,prevState) {
        document.getElementById("div1").innerHTML = "Before the update ,the myHero was : " + prevState.myHero;
    }

    componentDidUpdate() {
        document.getElementById("div2").innerHTML = "The updated myHero is : " + this.State.myHero;
    }
}
export default MyComponent;