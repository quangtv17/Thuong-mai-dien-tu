import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight, faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import ProductsContext from "../productsContext/ProductsContext";
import './category.css';

function Category() {
    const productCategory = useContext(ProductsContext); //lấy dữ liệu từ ProductsContext
    const [categories, setCategories] = useState(productCategory.products); // sate xử lý lấy dữ liệu category từ API

    // Hàm filter lọc những kết quả phù hợp với category người dùng muốn
    const filterResult = (catItem) => {
        const result = productCategory.products.filter(curData => {
            return curData.category === catItem
        });
        setCategories(result);
    }

    return ( 
        <div className="category">
            <div className="categoryContainer">
                <div className="categoryBanner">
                    <h3>SHOP</h3>
                    <h6>SHOP</h6>
                </div>
                <div className="categoryContent">
                    <div className="categoryMenu">
                        <h4>CATEGORIES</h4>
                        <dt className="categorytitle">APPLE</dt>
                        <dd onClick={() => setCategories(productCategory.products)} className="titleGlobal">All</dd>

                        <dt>IPHONE & MAC</dt>
                        <dd onClick={() => filterResult('iphone')} className="titleGlobal">IPhone</dd>
                        <dd onClick={() => filterResult('ipad')} className="titleGlobal">Ipad</dd>
                        <dd onClick={() => filterResult('macbook')} className="titleGlobal">Macbook</dd>

                        <dt>WIRELESS</dt>
                        <dd onClick={() => filterResult('airpod')} className="titleGlobal">Airpod</dd>
                        <dd onClick={() => filterResult('watch')} className="titleGlobal">Watch</dd>

                        <dt>OTHER</dt>
                        <dd onClick={() => filterResult('module')} className="titleGlobal">Module</dd>
                        <dd onClick={() => filterResult('keyboard')} className="titleGlobal">Keyboard</dd>
                        <dd onClick={() => filterResult('other')} className="titleGlobal">Other</dd>
                    </div>
                    <div className="categoryProductDetail">
                        <div className="categorySearch">
                            <input
                                type="text" 
                                placeholder="Enter Search Here!"
                            ></input>
                            <select>
                                <option>default sorting</option>
                            </select>
                        </div>
                        <div className="categoryDetail">
                            {categories.map(item => (
                                <div className="categoryItem" key={item.name}>
                                    <Link to={`/detail/${item._id.$oid}`}>
                                        <img src={item.img1} alt={item.name} width='200px' />
                                    </Link>

                                    <div className="categoryItemDetail">
                                        <h6>{item.name}</h6>
                                        <h6>{Intl.NumberFormat('vi').format(item.price)} VND</h6>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="categoryPageIcon">
                            <FontAwesomeIcon icon={faAngleDoubleLeft} />
                            {categories.length > 0 ? <span>1</span> : null}
                            <FontAwesomeIcon icon={faAngleDoubleRight} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Category;