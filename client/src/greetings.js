import React from 'react';
import { useState, useLayoutEffect } from 'react';
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
    const [activeIndex, setActiveIndex] = useState(0);
    const springApi = useSpringRef();

    const transitions = useTransition(activeIndex, {
        from: {
            // clipPath: 'polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)',
            opacity: 0,
        },
        enter: {
            // clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)',
            opacity: 1,
        },
        leave: {
            // clipPath: 'polygon(100% 0%, 100% 100%, 100% 100%, 100% 0%)',
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

    const animatedProps = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 4000 },
    });

    useLayoutEffect(() => {
        springApi.start();
    }, [activeIndex]);

    return (
        <>
            {transitions((springs, item) => (
                <animated.div className="carouselContainer" style={springs}>
                    <Typography
                        variant="h1"
                        color="text.customFour"
                        sx={{ fontWeight: 700 }}
                    >
                        {greetings[item]}
                    </Typography>
                </animated.div>
            ))}
            <animated.div style={{ ...animatedProps }}>
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
                        sx={{ fontFamily: "'Nothing You Could Do', cursive" }}
                    >
                        I am
                    </Typography>
                    <Typography
                        variant="h3"
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
                        sx={{ fontFamily: "'Nothing You Could Do', cursive" }}
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
    );
}
