import React from 'react';
import spiritual from '../../assets/spiritual.jpg';
import gardenn from '../../assets/gardenn.jpeg'
import './style.scss';

const ProductCategory = props => {
    return (
        <div className="productcategory">
            <div className="wrapper">
                <div className="items" style={{ backgroundImage: `url(${spiritual})` }}>
                    <a>Shop spiritual products</a>
                </div>
                <div className="items" style={{ backgroundImage: `url(${gardenn})` }}>
                    <a>Shop garden products</a>
                </div>
            </div>

        </div>
    )
}
export default ProductCategory;