import React from 'react';
import { useState, useEffect } from 'react';
import Greetings from './greetings';
import { useSpring, animated } from 'react-spring';
import { Box } from '@mui/material';

export default function SectionOne() {
    const [boxLoaded, setBoxLoaded] = useState(false);
    const animatedProps = useSpring({
        opacity: 1,
        marginLeft: 10,
        from: { marginLeft: -1000, opacity: 0 },
        config: { mass: 1, tension: 180, friction: 12 },
        onRest: () => setBoxLoaded(true),
    });
    useEffect(() => {
        setBoxLoaded(false);
    }, []);
    return (
        <animated.div className="sectionOne" style={{ ...animatedProps }}>
            <Box
                sx={{
                    width: '95vw',
                    height: '75vh',
                    padding: 10,
                    backgroundColor: 'secondary.main',
                }}
            >
                {boxLoaded && <Greetings></Greetings>}
            </Box>
        </animated.div>
    );
}
