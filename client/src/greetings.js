import React from 'react';
import { useState, useLayoutEffect, useEffect } from 'react';
import {
    useSpring,
    animated,
    useTransition,
    useSpringRef,
    config,
} from 'react-spring';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

const greetings = ['Hello', 'Olá', 'Hallo', 'Ciao', 'Hola', 'Bonjour'];

export default function Greetings() {
    const [boxLoaded, setBoxLoaded] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const springApi = useSpringRef();

    const animatedPropsBox = useSpring({
        opacity: 1,
        marginLeft: 10,
        from: { marginLeft: -1000, opacity: 0 },
        config: config.slow,
        onRest: () => setBoxLoaded(true),
    });

    const transitions = useTransition(activeIndex, {
        from: {
            // clipPath: 'polygon(50% 0, 74% 100%, 73% 100%, 49% 0)',
            opacity: 0,
        },
        enter: {
            // clipPath: 'polygon(100% 0, 100% 100%, 0 100%, 0 0)',
            opacity: 1,
        },
        leave: {
            // clipPath: 'polygon(50% 0, 74% 100%, 73% 100%, 49% 0)',
            opacity: 0,
        },
        exitBeforeEnter: true,
        config: { duration: 10000 },
        ref: springApi,
        onRest: (_springs, _ctrl, item) => {
            if (activeIndex === item) {
                setActiveIndex(
                    activeIndex === greetings.length - 1 ? 0 : activeIndex + 1
                );
            }
        },
    });

    const animatedPropsText = useSpring({
        opacity: 1,
        clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)',

        from: {
            opacity: 0,
            clipPath: 'polygon(0% 0%, 0% 0%, 100% 100%, 100% 100%)',
        },
        config: { duration: 6000 },
    });

    useLayoutEffect(() => {
        springApi.start();
    }, [activeIndex]);

    useEffect(() => {
        setBoxLoaded(false);
    }, []);

    return (
        <>
            <animated.div
                className="greetingsBox"
                style={{ ...animatedPropsBox }}
            >
                <Box
                    boxShadow="8"
                    sx={{
                        width: '95vw',
                        height: '50vh',
                        padding: 10,
                        backgroundColor: 'secondary.main',
                    }}
                >
                    {boxLoaded && (
                        <>
                            {transitions((springs, item) => (
                                <animated.div
                                    className="carouselContainer"
                                    style={springs}
                                >
                                    <Typography
                                        variant="h1"
                                        color="text.customFour"
                                        sx={{ fontWeight: 700 }}
                                    >
                                        {greetings[item]}
                                    </Typography>
                                </animated.div>
                            ))}
                            <animated.div style={{ ...animatedPropsText }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'flex-end',
                                    }}
                                >
                                    <Typography
                                        variant="h4"
                                        color="text.customWhite"
                                        sx={{
                                            fontFamily:
                                                "'Nothing You Could Do', cursive",
                                        }}
                                    >
                                        I am
                                    </Typography>
                                    <Typography
                                        variant="h2"
                                        color="text.customOne"
                                        sx={{ fontWeight: 900 }}
                                    >
                                        &nbsp; JULIANA DIMITRIADIS
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'flex-end',
                                    }}
                                >
                                    <Typography
                                        variant="h4"
                                        color="text.customWhite"
                                        sx={{
                                            fontFamily:
                                                "'Nothing You Could Do', cursive",
                                        }}
                                    >
                                        and I am a
                                    </Typography>
                                    <Typography
                                        variant="h3"
                                        color="text.customThree"
                                        sx={{ fontWeight: 800 }}
                                    >
                                        &nbsp; FULL STACK DEVELOPER
                                    </Typography>
                                </Box>
                            </animated.div>
                        </>
                    )}
                </Box>
            </animated.div>
        </>
    );
}
