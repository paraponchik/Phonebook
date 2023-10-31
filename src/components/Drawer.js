import { Drawer, MenuItem } from '@mui/material';
import React from 'react';

export const AppDrawer = (props) => {
    return (
        <Drawer 
            open={true}
        >
            <MenuItem>Account</MenuItem>
            <MenuItem>Account</MenuItem>
        </Drawer>
    )
}