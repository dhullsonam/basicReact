import React, {Component} from 'react';

class ComponentLifeCycle extends Component {
    constructor(){
        super();
        console.log('ComponentLifeCycle called');
    }

    static getDerivedStateFromProps() {
        console.log('getDerivedStateFromProps called');
    }

    render(){
        console.log('render called');
        return(
            <div>
                <h1>Life Cycle</h1>
            </div>
        )
    }

    componentDidMount(){
        console.log('componentDidMount called');
    }
}

export default ComponentLifeCycle;
