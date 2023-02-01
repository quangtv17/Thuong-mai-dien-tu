import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from '../../redux/auth';
import isEmpty from 'validator/lib/isEmpty';
import Navbar from "../navbar/Navbar";
import styles from './Login.module.css';

function Login() {
    // const user = useSelector(state => state.user);
    const userArr = JSON.parse(localStorage.getItem("userArr")) || [];
    const [email, setEmail] = useState('');
    const [password, setPassWord] = useState('');
    const [validateMsg, setValidateMsg] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onChangeEmail = e => {
        setEmail(e.target.value)
    }

    const onChangePassword = e => {
        setPassWord(e.target.value)
    }

    const validateAll = () => {
        const msg = {}

        if(isEmpty(password)) {
            msg.password = 'Vui lòng nhập Password'
        }
        
        const findUser = userArr.find(value => {
            return value.email === email
        })
        
        if (isEmpty(email)) {
            msg.email = 'Vui lòng nhập Email!'
        } else if (!findUser) {
            msg.email = 'Email không đúng!'
            setEmail('')
        } else {
            if(findUser.password !== password) {
                msg.password = 'Password không chính xác!'
                setPassWord('')
            } else {
                dispatch(authActions.ON_LOGIN({
                    name: findUser.fullname,
                    email: findUser.email,
                    password: findUser.password
                }))
                navigate('/');
            }
        }

        setValidateMsg(msg) 
        if(Object.keys(msg).length > 0) {
            return false
        } else {
            return true
        }
    }
    
    const onSubmit = (e) => {
        e.preventDefault();

        const isValid = validateAll();
        if(!isValid) return
    }

    return ( 
        <>
            <Navbar />
            <div className={styles.login}>
                <div className={styles.loginContainer}>
                    <div className={styles.loginContent}>
                        <h2 className="titleGlobal">Sign In</h2>
                        <div>
                            <div className={styles.loginInput}>
                                <input 
                                    type="email" 
                                    placeholder="Email"
                                    value={email}
                                    onChange={onChangeEmail}
                                ></input>
                                <p>{validateMsg.email}</p>
                            </div>
                            <div className={styles.loginInput}>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={onChangePassword}
                                ></input>
                                <p>{validateMsg.password}</p>
                            </div>
                        </div>
                            <button type="submit" className={styles.loginBtn} onClick={onSubmit}>SIGN IN</button>
                        <div className={styles.createAccount}>
                            <p className="titleGlobal">Create an account?</p>
                            <span onClick={() => navigate('/register')} className={styles.linkSignUp}>Sign up</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;