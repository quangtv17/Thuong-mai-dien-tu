import React from "react";
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { popupActions } from "../../redux/popup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import './productPopup.css';

function ProductPopup({ props }) {
    // console.log(props);
    const dispatch = useDispatch();
    
    //hàm click ẩn popup
    const handleClickCloseDetail = () => {
        dispatch(popupActions.HIDE_POPUP());
    }
    
    return ( 
        <div>
            {/* Khi nhấn vào background sẽ close popup */}
            <div className="popupBackground" onClick={handleClickCloseDetail}></div>

            <div className="productPopupItem">
                <img src={props.image} alt={props.name}/>
                <div className="productPopupDetail">
                    <button className="productPopupClose" onClick={handleClickCloseDetail}>x</button>
                    <h4>{props.name}</h4>
                    <h6 className="titleColor">{Intl.NumberFormat('vi').format(props.price)} VND</h6>
                    <p className="titleColor">{props.short_desc}</p>
                    <Link to={"/detail/" + props.id} className="productPopupBtn">
                        <FontAwesomeIcon icon={faCartShopping} className="iconCartPopup" />
                        <button>View Detail</button>
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default ProductPopup;