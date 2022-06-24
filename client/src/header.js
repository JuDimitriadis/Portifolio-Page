import React from 'react';
import { AppBar, Button, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';

function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

export default function Header(props) {
    return (
        <HideOnScroll {...props}>
            <AppBar
                position="fixed"
                color="transparent"
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-start',
                }}
            >
                <Button variant="contained" sx={{ margin: '5px 6px 0 6px' }}>
                    Projects
                </Button>
                <Button variant="contained" sx={{ margin: '5px 6px 0 6px' }}>
                    Experience
                </Button>
                <Button variant="contained" sx={{ margin: '5px 6px 0 6px' }}>
                    About Me
                </Button>
                <Link
                    href="https://www.linkedin.com/in/julianaspdimitriadis/"
                    target="_blank"
                    rel="noopener"
                    sx={{ margin: '0 6px' }}
                >
                    {' '}
                    <LinkedInIcon sx={{ fontSize: 47 }}></LinkedInIcon>
                </Link>

                <Link
                    href="https://github.com/JuDimitriadis"
                    target="_blank"
                    rel="noopener"
                    sx={{ margin: '3px 6px 0 6px' }}
                >
                    {' '}
                    <GitHubIcon
                        sx={{
                            fontSize: 40,
                        }}
                    ></GitHubIcon>
                </Link>
            </AppBar>
        </HideOnScroll>
    );
}
