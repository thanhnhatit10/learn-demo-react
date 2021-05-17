import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, LinearProgress, makeStyles, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import InputField from '../../../../components/form-controls/inputField';
import PasswordField from '../../../../components/form-controls/PasswordField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
LoginForm.propTypes = {
    onSubmit: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(3),
        position: 'relative',
    },
    avatar: {
        margin: '0 auto',
        background: 'red',
        color: 'white',
    },
    title: {
        margin: theme.spacing(2, 0, 3, 0),
        textAlign: 'center',
    },
    submit: {
        height: '42px',
        marginTop: theme.spacing(1),
    },
    process: {
        position: 'absolute',
        top: theme.spacing(1),
        left: 0,
        right: 0,
    }
}));
function LoginForm(props) {
    const classes = useStyles();
    const { onSubmit } = props;
    const schema = yup.object().shape({
        identifier: yup.string().required('Vui lòng nhập email').email('Vui lòng nhập đúng định dạng email'),
        password: yup.string().required('Vui lòng nhập mật khẩu'),
    });
    const form = useForm({
        defaultValues: {
            identifier: '',
            password: '',
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = async (values) => {
        if (!onSubmit) return;

        await onSubmit(values);
        // form.reset();
    };
    const {isSubmitting}= form.formState;
    return (
        <div className={classes.root}>
            {isSubmitting && <LinearProgress className={classes.process} color='primary' />}
            <Avatar className={classes.avatar}>
                <LockOutlined></LockOutlined>
            </Avatar>
            <Typography className={classes.title} component="h3" variant="h5">
                    Sign In
            </Typography>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="identifier" label="Email" form={form} />
                <PasswordField name="password" label="Password" form={form} />
                <Button disabled={isSubmitting} type="submit" className={classes.submit} variant="contained" fullWidth color="primary">
                    Sign In
                </Button>
            </form>
        </div>
    );
}

export default LoginForm;
