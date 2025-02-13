import React from 'react';
import './FourProductCard.css'
import { Box } from '@mui/material';

const FourProductCard = () => {
    return (
        <div className="four-product-card" >
            {/* Product card title  */}
            <div className="four-product-card-title">
                <p>Bluetooth Calling Smartwatch starts at ₹1,999</p>
            </div>
            {/* Product card content  */}
            <div className="four-product-card-content">
                <div className="four-product-card-content-div">
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                        alt="smart watch" />
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg"
                        alt="smart watch" />
                </div>
                <div className="four-product-card-content-div">
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg"
                        alt="smart watch" />
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg"
                        alt="smart watch" />
                </div>
            </div>
            {/* Product card link  */}
            <div className="four-product-card-link">
                <a href="">Shop now</a>
            </div>
        </div>
    )
}

export default FourProductCard