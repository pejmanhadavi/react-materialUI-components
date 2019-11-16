import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { scroller } from 'react-scroll';

const SideDrawer = props => {

    const scrollToElement = element => {
        scroller.scrollTo(element, {
            duration: 1500,
            delay: 100,
            smooth: true,
        })
    };

    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClick={props.onClose}>

            <List
                component="nav">

                <ListItem button onClick={() => scrollToElement('highlights')}>
                    Highlights
                </ListItem>


            </List>

        </Drawer>
    );
}

export default SideDrawer;