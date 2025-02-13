import React from 'react';
import './ProductCard.scss';

const ProductCard = () => {
    return (
        <div className="product-card">
            {/* Product card title  */}
            <div className="product-card-title">
                <p>Bluetooth Calling Smartwatch starts at ₹1,999</p>
            </div>
            {/* Product card content  */}
            <div className="product-card-content">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg"
                 alt="smart watch"  />
            </div>
            {/* Product card link  */}
            <div className="product-card-link">
                <a href="">Shop now</a>
            </div>
        </div>
    )
}

export default ProductCard