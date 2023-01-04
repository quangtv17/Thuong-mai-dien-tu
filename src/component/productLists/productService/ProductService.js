import React from "react";
import './productService.css';

function ProductService() {
    return ( 
        <div className="productService">
            <div className="productServiceContainer">
                <div className="serviceTitle">
                    <div className="serviceTitleItem">
                        <h4>FREE SHIPPING</h4>
                        <h6 className="titleColor">Free shipping worlwide</h6>
                    </div>
                    <div className="serviceTitleItem">
                        <h4>24 X 7 SERVICE</h4>
                        <h6 className="titleColor">Free shipping worlwide</h6>
                    </div>
                    <div className="serviceTitleItem">
                        <h4>FESTIVAL OFFER</h4>
                        <h6 className="titleColor">Free shipping worlwide</h6>
                    </div>
                </div>
                <div className="information">
                    <div className="informationTitle">
                        <h4>LET'S BE FRIENDS!</h4>
                        <h6 className="titleColor">Nisi nisi tempor consequat laboris nisi.</h6>
                    </div>
                    <div className="informationInput">
                        <input type='email' placeholder="Enter your email address" />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductService;
