import React, { Suspense } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';

import Loading from './component/loading/Loading';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsSIVXpZn19YL6CnRwDQBhVrYKwjJNbYs",
  authDomain: "thuong-mai-dien-tu-app.firebaseapp.com",
  projectId: "thuong-mai-dien-tu-app",
  storageBucket: "thuong-mai-dien-tu-app.appspot.com",
  messagingSenderId: "619519229256",
  appId: "1:619519229256:web:2b79a5d57461d67686c77d",
  measurementId: "G-VBY3FLGD9C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Sử dụng react lazy để giúp tăng tốc độ tải trang web
const Home = React.lazy(() => import('./pages/Home/Home'));
const ShopPage = React.lazy(() => import('./pages/Shop/ShopPage'));
const CartPage = React.lazy(() => import('./pages/Cart/CartPage'));
const LoginPage = React.lazy(() => import('./pages/Login/LoginPage'));
const DetailPage = React.lazy(() => import('./pages/Detail/DetailPage'));
const RegisterPage = React.lazy(() => import('./pages/Register/RegisterPage'));
const CheckoutPage = React.lazy(() => import('./pages/Checkout/CheckoutPage'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function App() {
	const isAuth = useSelector(state => state.auth.isLoggedIn);
	// console.log(isAuth);

	return (
		<div className='App'>
			<BrowserRouter>
				<Suspense fallback={<div className='Loading'><Loading /></div>}>
					<ToastContainer />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/shop' element={<ShopPage />} /> 
						<Route path='/detail/:id' element={<DetailPage />} />
						<Route path='/cart' element={isAuth ? <CartPage /> : <LoginPage />} /> 
						<Route path='/checkout' element={<CheckoutPage />} />
						<Route path='/login' element={<LoginPage />} />
						<Route path='/register' element={<RegisterPage />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</Suspense>
			</BrowserRouter>
		</div>
	);
}

export default App;
