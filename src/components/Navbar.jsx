import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import { CallMissedSharp, ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom'

import garagelogo from '../assets/garagelogo.png'
import useStyles from './styles-navbar'

const Navbar = ({totalItems}) => {
    const classes = useStyles();
    const location = useLocation();

    return <>
        <AppBar position='fixed' className={CallMissedSharp.appBar} color='inherit'>
            <Toolbar>
                <Typography component={Link} to='/' variant='h6' className={classes.title} color='inherit'>
                    <img src={garagelogo} alt='Commerce.js' height='25px' className={classes.image} />
                    M-Commerce
                </Typography>
                <div className={classes.grow} />
                {location.pathname === '/' && (
                <div className={classes.button}>
                    <IconButton component={Link} to='/cart' aria-label='Show cart items' color='inherit'>
                        <Badge badgeContent={totalItems} color='secondary'>
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>)}
            </Toolbar>
        </AppBar>
    </>;
};

export default Navbar;
