import React ,{Component} from 'react';

class StylingDemo extends Component {
    render(){

        const mystyle = {
            color:"white",
            backgroundColor:"DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
        }
        return(
            <div>
                <h1 style={{color:'red'}}> Happy Janmashtammi</h1>
                <h2 style ={{backgroundColor:'skyblue'}}>Welcome to Haryana</h2>
                <p style={mystyle}>All Is Well</p>
            </div>

        )
    }
}

export default StylingDemo; 