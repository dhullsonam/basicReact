import { Component } from "react";

class Greetings extends Component{
    constructor(){
        super();
        this.state = {name:' sonam'};
    }
    render(){
        return(
            <div>
                <h1>Greetings{this.state.name}</h1>
                <h2>Greetings{this.state.name}</h2>
                <h3>Greetings{this.state.name}</h3>

                <button onClick={()=>this.setState({name:' Dhull'})}>Click Me</button>
            </div>
        )
    }
}
export default Greetings;