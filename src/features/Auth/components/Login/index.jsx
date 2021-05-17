import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../userSlice';
import LoginForm from '../LoginForm';


Login.propTypes = {
    onCloseDialog: PropTypes.func.isRequired,
};

function Login(props) {
    const { onCloseDialog} = props;
    // làm thông báo khi thành công hoặc thất bại
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch();
    // const user = useSelector(state => state.user);
    const handleSubmit = async (values) => {
       try {
            const action = login(values);
            const resultAction = await dispatch(action);
            unwrapResult(resultAction);
            enqueueSnackbar('Đăng nhập thành công', {variant: 'success'});
            if(onCloseDialog){
                onCloseDialog(false);
            };
       } catch (error) {
        //    console.log('Không thể đăng kí', error.message);
           enqueueSnackbar(error.message, {variant: 'error'});
       }
    };
    return (
        <div>
            <LoginForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Login;