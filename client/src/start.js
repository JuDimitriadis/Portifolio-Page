import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import { green, purple } from '@mui/material/colors';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#4D774E',
            // contrastText: '#d1e9c8',
        },
        secondary: {
            main: '#F1B24A',
        },
        customOne: {
            main: '#164A41',
        },
        customTwo: {
            main: '#9DC88D',
        },
        customThree: {
            main: '#FFFFFF',
        },
    },
    typography: {
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
