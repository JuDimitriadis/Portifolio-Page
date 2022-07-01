import React from 'react';
import { useState, useEffect } from 'react';
import {
    useSpring,
    animated,
    useTransition,
    useSpringRef,
    config,
} from 'react-spring';
import {
    Typography,
    Box,
    ImageList,
    ImageListItem,
    ImageListItemBar,
    IconButton,
    Modal,
    Fade,
    Backdrop,
} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function Projects() {
    const [projects, setProjects] = useState();
    const [projectsBoxLoaded, setProjectsBoxLoaded] = useState();
    const [showBar, setShowBar] = useState();
    const [open, setOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState();

    const animatedPropsProjectBox = useSpring({
        opacity: 1,
        marginLeft: 0,
        from: { marginLeft: -200, opacity: 0 },
        config: config.stiff,
        delay: 4000,
        onRest: () => setProjectsBoxLoaded(true),
    });

    useEffect(() => {
        async function fetchData() {
            const getProjects = await fetch('/api/get-projects');
            const parsing = await getProjects.json();
            setProjects(parsing);
        }
        fetchData();
    }, []);

    const handleMouseOver = (id) => {
        setShowBar(id);
    };

    const handleMouseLeave = () => {
        setShowBar();
    };

    const handleOpen = (project) => {
        console.log(project);
        setSelectedProject(project);
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        setSelectedProject();
    };

    return (
        <animated.div style={{ ...animatedPropsProjectBox }}>
            <Box
                boxShadow="8"
                sx={{
                    width: '94vw',
                    marginTop: 5,
                }}
            >
                <Typography
                    variant="h2"
                    color="text.customOne"
                    sx={{ textAlign: 'right' }}
                >
                    Projects
                </Typography>{' '}
                <ImageList variant="quilted" cols={4}>
                    {projects &&
                        projects.map((item) => (
                            <ImageListItem
                                onMouseOver={() => handleMouseOver(item.id)}
                                onMouseLeave={handleMouseLeave}
                                key={item.id}
                                cols={item.cols || 1}
                                rows={item.rows || 1}
                                // sx={{ objectFit: 'scale-down' }}
                            >
                                <img
                                    key={item.id}
                                    src={item.cover_url}
                                    alt={item.name}
                                    loading="lazy"
                                />
                                {showBar === item.id && (
                                    <Fade in={showBar}>
                                        <ImageListItemBar
                                            title={item.name}
                                            subtitle={item.month_year}
                                            actionIcon={
                                                <IconButton
                                                    onClick={() =>
                                                        handleOpen(item)
                                                    }
                                                    sx={{
                                                        color: 'rgba(255, 255, 255, 0.3)',
                                                    }}
                                                    aria-label={`info about ${item.title}`}
                                                >
                                                    <MoreHorizIcon />
                                                </IconButton>
                                            }
                                        />
                                    </Fade>
                                )}
                            </ImageListItem>
                        ))}
                </ImageList>
                {open && (
                    <Modal
                        // aria-labelledby="transition-modal-title"
                        // aria-describedby="transition-modal-description"
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}
                    >
                        <Fade in={open}>
                            <Box
                                // color="customThree"
                                sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    width: '600',
                                    backgroundColor: 'customOne.main',
                                    // border: '2px solid #000',
                                    boxShadow: 24,
                                    p: 4,
                                }}
                            >
                                <Typography
                                    color="secondary.main"
                                    variant="h3"
                                    // component="h2"
                                >
                                    {selectedProject.name}
                                </Typography>
                                {/* <iframe src={selectedProject.page_url}></iframe> */}
                            </Box>
                        </Fade>
                    </Modal>
                )}
            </Box>
        </animated.div>
    );
}
