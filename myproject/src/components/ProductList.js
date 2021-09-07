import React, { Component } from 'react';
import './css/productList.css'
class Productlist extends Component {

    constructor() {
        super()
        this.state = {
            product: []
        }
    }

    componentDidMount() {
        console.log("componentDidMount called");

        fetch("https://deploydemo-e0090.web.app/Product.json")
            .then((response) =>
                response.json()
            ).then((finaldata) =>
                this.setState({
                    product: finaldata.products
                })
            )
    }
    render() {
        console.log("Render called" + this.state);

        const result =
            this.state.product.map(
                (ele) => {
                    console.log(ele);
                    return (<div className="container">
                        <div className = "sub-container">
                            <h3>Name: {ele.name}</h3>
                            <img src={ele.img} height="250px" width="250px"></img>
                             <h3 id="h3tag"> Price: {ele.price} </h3>
                        </div>
                    </div>

                    )
                }
            )

        return (
            <div className="mainbody">
                <h1> Organic Products </h1>
                { result}
            </div>
        )
    }
}

export default Productlist;