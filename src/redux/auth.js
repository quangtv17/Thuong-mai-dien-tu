import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const authSlice = createSlice({
    name: 'authentication',
    initialState: {
        userLogin: {
            name: '',
            email: '',
            password: '',
        },
        isLoggedIn: false,
    },
    reducers: {
        ON_LOGIN(state, action) {
            // console.log('payload', action.payload);
            state.userLogin = {...action.payload};
            // console.log(state.userLogin);
            state.isLoggedIn = true;

            const userIndex = state.userLogin.name;
            // console.log(userIndex);
            localStorage.setItem('currentLogin', JSON.stringify(state.userLogin));
            toast.success(`Wellcome ${userIndex}`, {
                position: "bottom-left"
            })
        },

        ON_LOGOUT(state) {
            state.isLoggedIn = false;
            localStorage.removeItem('currentLogin');
            toast.info('Logout successfully', {
                position: "bottom-left"
            });
        }
    }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;