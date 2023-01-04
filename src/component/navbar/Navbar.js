import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from '../../redux/auth';
import './navbar.css';


function Navbar() {
    const user = JSON.parse(localStorage.getItem('currentLogin')) || {};
    // console.log(user);
    const [userName, setUserName] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //hàm click logout và chuyển đến trang home
    const handleLogout = () => {
        dispatch(authActions.ON_LOGOUT());
        navigate('/')
    }

    useEffect(() => {
        setUserName(user.name);
    }, [user]);

    return ( 
        <div className="navbar">
            <div className="navbarContainer">
                <div className="navbarContent">
                    <Link to='/' className="navHome">Home</Link>
                    <Link to='/shop' className="navShop">Shop</Link>
                </div>
                <div className="navbarTitle">
                    <h2>BOUTIQUE</h2>
                </div>
                <div className="navbarItem">
                    <div>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg"
                            width="16" 
                            height="16" 
                            fill="currentColor" 
                            className="iconCart" 
                            viewBox="0 0 16 16"
                        >
                            <path 
                                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                            />
                        </svg>
                        
                        <Link to='/cart' className="navCart">Cart</Link>
                    </div>
                    
                    {userName ? (
                        <div>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="16"
                                height="18" 
                                fill="currentColor"
                                className="iconUser" 
                                viewBox="0 0 16 12"
                            >
                                <path 
                                    d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                                />
                            </svg>
                            <span style={{color:'green'}}>{userName}</span>
                            <span className="navLogout" onClick={handleLogout}>Logout</span>
                        </div>
                    ) : (
                        <div>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="16"
                                height="18" 
                                fill="currentColor"
                                className="iconUser" 
                                viewBox="0 0 16 12"
                            >
                                <path 
                                    d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                                />
                            </svg>

                            <Link to='/login' className="navLogin">Login</Link>
                        </div>
                    )}
                    
                </div>
            </div>
        </div>
    );
}

export default Navbar;