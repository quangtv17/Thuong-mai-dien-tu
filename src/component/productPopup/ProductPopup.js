import React from "react";
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { popupActions } from "../../redux/popup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import styles from './ProductPopup.module.css';

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
            <div className={styles.popupBackground} onClick={handleClickCloseDetail}></div>

            <div className={styles.productPopupItem}>
                <img src={props.image} alt={props.name}/>
                <div className={styles.productPopupDetail}>
                    <button className={styles.productPopupClose} onClick={handleClickCloseDetail}>x</button>
                    <h4>{props.name}</h4>
                    <h6 className="titleColor">{Intl.NumberFormat('vi').format(props.price)} VND</h6>
                    <p className="titleColor">{props.short_desc}</p>
                    <Link to={"/detail/" + props.id} className={styles.productPopupBtn}>
                        <FontAwesomeIcon icon={faCartShopping} className={styles.iconCartPopup} />
                        <button>View Detail</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProductPopup;