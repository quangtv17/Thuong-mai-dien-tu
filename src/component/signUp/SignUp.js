import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';
import Navbar from '../navbar/Navbar';
import styles from './SignUp.module.css';


function SignUp() {
    const navigate = useNavigate();
    const userArr = JSON.parse(localStorage.getItem('userArr')) || []; // userArr được lấy từ local
    const [fullname, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [validateMsg, setValidateMsg] = useState('');

    //// tạo obj chứa giá trị input
    const user = {
        fullname: fullname,
        email: email,
        password: password,
        phone: phone
    };

    const onChangeName = e => {
        setFullName(e.target.value)
        // console.log(e.target.value);
    }

    const onChangeEmail = e => {
        setEmail(e.target.value)
        // console.log(e.target.value);
    }

    const onChangePassword = e => {
        setPassword(e.target.value)
        // console.log(e.target.value);
    }

    const onChangePhone = e => {
        setPhone(e.target.value)
        // console.log(e.target.value);
    }

    const validateAll = () => {
        const msg = {}
        if(isEmpty(fullname)) {
            msg.fullname = 'Vui lòng nhập FullName!'
        }
        //  else if (isEmpty(fullname.trim() === 0)) {
        //     msg.fullname = 'FullName chứa ký tự dặc biệt!'
        // }

        if(isEmpty(email)) {
            msg.email = 'Vui lòng nhập Email!'
        } else if(
            !userArr.every((x) => (x.email !== user.email ? true : false))
        ) {
            msg.email = 'Email đã tồn tại!'
            setEmail('')
        } else if(!isEmail(email)) {
            msg.email = 'Email không đúng định dạng!'
            setEmail('')
        }

        if(isEmpty(password)) {
            msg.password = 'Vui lòng nhập Password!'
        } else if (password.length < 8) {
            msg.password = 'Mật khẩu phải trên 8 ký tự!'
            setPassword('')
        }

        if(isEmpty(phone)) {
            msg.phone = 'Vui lòng nhập số điện thoại!'
        }

        setValidateMsg(msg) 
        if(Object.keys(msg).length > 0) {
            return false
        } else {
            return true
        }
    }

    const handlerSignUp = (e) => {
        e.preventDefault()

        const isValid = validateAll();
        if (isValid) {
            userArr.push(user)
            // console.log(userArr);
            // console.log("Thanh Cong");
            localStorage.setItem('userArr', JSON.stringify(userArr));
            alert('Đăng ký thành công');
            navigate('/login');
        } else return            
    }

    return ( 
        <>
            <Navbar />
            <div className={styles.signup}>
                <div className={styles.signupContainer}>
                    <div className={styles.signupContent}>
                        <h2 className="titleColor">Sign Up</h2>
                        {/* <div className={styles.signupInputs}> */}
                            <div className={styles.signupInput}>
                                <input 
                                    type="text" 
                                    // placeholder="Full Name" 
                                    value={fullname} 
                                    onChange={onChangeName}
                                ></input>
                                <label>FullName</label>
                                <p>{validateMsg.fullname}</p>
                            </div>
                            <div className={styles.signupInput}>
                                <input 
                                    type="email" 
                                    // placeholder="Email" 
                                    value={email} 
                                    onChange={onChangeEmail}
                                ></input>
                                <label>Email</label>
                                <p>{validateMsg.email}</p>
                            </div>
                            <div className={styles.signupInput}>
                                <input 
                                    type="password" 
                                    // placeholder="Password" 
                                    value={password} 
                                    onChange={onChangePassword}
                                ></input>
                                <label>Password</label>
                                <p>{validateMsg.password}</p>
                            </div>
                            <div className={styles.signupInput}>
                                <input 
                                    type="text" 
                                    // placeholder="Phone" 
                                    value={phone} 
                                    onChange={onChangePhone}
                                ></input>
                                <label>Phone</label>
                                <p>{validateMsg.phone}</p>
                            </div>
                        {/* </div> */}
                        <button type='button' className={styles.signupBtn} onClick={handlerSignUp}>SIGN UP</button>
                        <div className={styles.clickLogin}>
                            <h6 className="titleColor">Login?</h6>
                            <span onClick={() => navigate('/login')} className={styles.linkSignIn}>Click</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUp;