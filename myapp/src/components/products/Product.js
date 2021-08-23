
import React, {Component} from 'react';

class Product extends Component {
    constructor() {
        super();
        this.state = {
            name :'xyz' , price:500
        }
    }
    render(){
        return(
            <div>
             <h1>{this.state.name}</h1>
            <h2>{this.state.price}</h2>
            </div>
            
        )
    }
}
export default Product;