
//import { product } from 'prelude-ls';
import React, { Component} from 'react';

class Product extends Component{
    constructor(){
        super();
        this.state = {
            products:[]
            
        }
    }
    componentDidMount(){
        fetch('https://products-f7c9b.web.app/project.json')
        .then((response)=>response.json())
        .then((setData)=>this.setState({products:setData.products}))
    }
    render(){
        return(
            <div>
                {
                    this.state.products.map(product=>(
                        <div key ={product.id}>
                            <h1>{product.name}</h1>
                            <h2>{product.price}</h2>
                        </div>)
                    )
                }
            </div>
        );
    }
}
export default Product;