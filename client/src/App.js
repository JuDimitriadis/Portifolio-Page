import React from 'react';
import Header from './header';
import { Toolbar, Button } from '@mui/material';

export default function App() {
    return (
        <>
            {/* <div className="fixedBackground"></div> */}
            <Header></Header>
            <h1>HI I am APP</h1>
            <Button variant="contained" color="secondary">
                Secondary
            </Button>
            <Button variant="contained" color="primary">
                primary
            </Button>
        </>
    );
}
