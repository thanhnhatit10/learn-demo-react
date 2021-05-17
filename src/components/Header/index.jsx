import { Avatar, Box, IconButton, Menu, MenuItem } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Close from '@material-ui/icons/Close';
import CropFreeIcon from '@material-ui/icons/CropFree';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import Login from '../../features/Auth/components/Login';
import Register from '../../features/Auth/components/Register';
import { logout } from '../../features/Auth/userSlice';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        // position: 'relative',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    link: {
        textDecoration: 'none',
        color: 'white',
    },
    closeIcon: {
        position: 'absolute',
        top: theme.spacing(1),
        right: theme.spacing(1),
        zIndex: 2,
    },
}));
const MODE = {
    REGESTER: 'register',
    LOGIN: 'login',
};
export default function Header() {
    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.user.current);
    const isLoggedIn = !!userLogin.id;
    // console.log(userLogin.username);
    const [open, setOpen] = React.useState(false);
    const [mode, setMode] = React.useState(MODE.LOGIN);
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClick = (e) => {
        setAnchorEl(e.target);
    };
    const handleCloses = () => {
        setAnchorEl(null);
    };
    const handleLogoutUser = () => {
        const action = logout();
        dispatch(action);
    };
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <CropFreeIcon className={classes.menuButton} />
                    <Typography variant="h6" className={classes.title}>
                        <Link to="/" className={classes.link}>
                            EZ SHOP
                        </Link>
                    </Typography>
                    <NavLink to="/product" className={classes.link} activeClassName="active-menu">
                        Sản phẩm
                    </NavLink>
                    <NavLink to="/todos-list" className={classes.link} activeClassName="active-menu">
                        <Button color="inherit">Todos</Button>
                    </NavLink>

                    <NavLink to="/albums" className={classes.link} activeClassName="active-menu">
                        <Button color="inherit">Albums</Button>
                    </NavLink>
                    {!isLoggedIn && (
                        <Button color="inherit" onClick={handleClickOpen}>
                            LOGIN
                        </Button>
                    )}
                    {isLoggedIn && (
                        <IconButton color="inherit">
                            <AccountCircleIcon onClick={handleClick}></AccountCircleIcon>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleCloses}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                getContentAnchorEl={null}
                            >
                                <MenuItem onClick={handleCloses}>My account</MenuItem>
                                <MenuItem onClick={handleLogoutUser}>Logout</MenuItem>
                            </Menu>
                        </IconButton>
                    )}
                </Toolbar>
            </AppBar>

            <Dialog
                disableBackdropClick
                disableEscapeKeyDown
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
                // className={classes.root}
            >
                <IconButton
                    className={classes.closeIcon}
                    edge="start"
                    color="inherit"
                    onClick={handleClose}
                    aria-label="close"
                >
                    <Close />
                </IconButton>
                <DialogContent>
                    {mode === MODE.REGESTER && (
                        <>
                            <Register onCloseDialog={handleClose} />
                            <Box textAlign="center">
                                <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                                    Bạn đã có tài khoản. Đăng nhập ngay.
                                </Button>
                            </Box>
                        </>
                    )}
                    {mode === MODE.LOGIN && (
                        <>
                            <Login onCloseDialog={handleClose} />
                            <Box textAlign="center">
                                <Button color="primary" onClick={() => setMode(MODE.REGESTER)}>
                                    Bạn chưa có tài khoản. Đăng kí ngay.
                                </Button>
                            </Box>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}
