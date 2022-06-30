import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import { green, purple } from '@mui/material/colors';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#F40058',
            // contrastText: '#d1e9c8',
        },
        secondary: {
            main: '#161B40',
        },
        customOne: {
            main: '#EFA500',
        },
        customTwo: {
            main: '#41B853',
        },
        customThree: {
            main: '#43BEEE5',
        },
        text: {
            customOne: '#F40058',
            customTwo: '#161B40',
            customThree: '#EFA500',
            customFour: '#41B853',
            customFive: '#43BEEE',
            customWhite: '#FFFFF5',
        },
    },
    typography: {
        h3: {
            fontFamily: "'Poppins', sans-serif",
        },
        button: {
            textTransform: 'none',
            fontFamily: "'Poppins', sans-serif",
            fontWeight: '300',
        },
    },
});

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
);
