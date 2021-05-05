import { unwrapResult } from '@reduxjs/toolkit';
import { register } from '../../userSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import RegisterForm from '../RegisterForm';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';


Register.propTypes = {
    onCloseDialog: PropTypes.func.isRequired,
};

function Register(props) {
    const { onCloseDialog} = props;
    // làm thông báo khi thành công hoặc thất bại
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch();
    // const user = useSelector(state => state.user);
    const handleSubmit = async (values) => {
       try {
            values.username = values.email;
            const action = register(values);
            const resultAction = await dispatch(action);
            unwrapResult(resultAction);
            enqueueSnackbar('Đăng kí thành công', {variant: 'success'});
            if(onCloseDialog){
                onCloseDialog(false);
            };
       } catch (error) {
           console.log('Không thể đăng kí', error);
       }
    };
    return (
        <div>
            <RegisterForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Register;