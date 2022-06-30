import React from 'react';
import Header from './header';
import Greetings from './greetings';
import { Toolbar, Button } from '@mui/material';

export default function App() {
    return (
        <>
            <Header></Header>
            <Greetings></Greetings>
        </>
    );
}
