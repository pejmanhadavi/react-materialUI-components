import React, { useState, useEffect } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenueIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import SideDrawer from './SideDrawer';

const Header = () => {

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [headerShow, setHeaderShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    });

    const handleScroll = () => {
        if (window.scrollY > 0)
            setHeaderShow(true);
        else
            setHeaderShow(false);
    }


    const toggleDrawer = value => {
        console.log(value);
        setDrawerOpen(value);
    }

    return (
        <AppBar
            position="fixed"
            style={{
                backgroundColor: headerShow ? '#2f2f2f' : 'transparent',
                boxShadow: 'none',
                padding: '10px 0px'
            }}>
            <Toolbar>
                <div className="header_logo">
                    <div className="font_righteous header_logo_venue">The LICHKING</div>
                    <div className="header_logo_title">Arthas Menthil</div>
                </div>

                <IconButton
                    area-label="Menue"
                    color="inherit"
                    onClick={() => toggleDrawer(!drawerOpen)}>
                    <MenueIcon />
                    <SideDrawer
                        open={drawerOpen}
                        onClose={() => toggleDrawer(false)} />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
