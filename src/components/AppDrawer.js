import { Drawer, MenuItem } from '@mui/material';
import React from 'react';

export default function AppDrawer(){
    return (
        <Drawer 
            open={false}
        >
            <MenuItem>Account</MenuItem>
            <MenuItem>Account</MenuItem>
        </Drawer>
    )
}