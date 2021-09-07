
import React, {Component} from 'react';

class Product extends Component {
    constructor() {
        super();
        this.state = {
            products : [
                {id:123,name:"Tulsi",price:'200 per kg'},
                {id:234,name:'iphone',price:'1 L'},
                {id:321,name:"Apple",price:'250 rs per kG'},
                {id:212,name:'Guava',price:'40 rs per kg'}
            ]
        }
    }
    render(){
        return(
            <>
                {
                    this.state.products.map(product => 
                        <div key={product.id}>
                            <h1>{product.name}</h1>
                            <h2>{product.price}</h2>
                        </div>
                    )

                }
            </>
            
        )
    }
}
export default Product;