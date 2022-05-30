import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Image from 'next/image';
import styled from "@mui/system/styled";
import Fab from "@mui/material/Fab";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";

import Navbar from "./Navbar";
import SideBar from "./SideBar";
import HideOnScroll from "helpers/HideOnScroll";
import BackToTop from "./BackToTop";
import { Grid } from "@mui/material";
import NextLink from "next/link";

import style from './Header.module.css'
import { useState, useEffect } from "react";

const Offset = styled("div")();

const navLinks = [
    { title: 'Inicio', path: '/', cssName: 'inicio' },
    { title: 'Proyectos', path: '/', cssName: 'proyectos' },
    { title: 'Conocenos', path: '/', cssName: 'conocenos' },
    { title: 'Contacto', path: '/', cssName: 'contacto' },
]

const Header = () => {
    const [scrollPosition, setScroll] = useState(0)
    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY);
        };

        // just trigger this so that the initial state 
        // is updated as soon as the component is mounted
        // related: https://stackoverflow.com/a/63408216
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <>
            <HideOnScroll>
                <AppBar position="fixed" elevation={0} sx={{ backgroundColor: 'transparent', width: '100%', maxWidth: '100%' }}>
                    <Toolbar >
                        <Grid container direction='column'>
                            <Grid item flexGrow={1} sx={{ bgcolor: 'white' }} className={style.navbarCentered}>
                                <NextLink href='/'>
                                    <a>
                                        <Image src='/images/small-logo.png' width={210} height={60} alt="small Logo" />
                                    </a>
                                </NextLink>
                            </Grid>

                            <Grid item xs container justifyContent='flex-end' sx={{ height: '1000px' }} className={`${style.navbarCentered} ${style.navbarMenu} ${scrollPosition > 100 ? style.scrolledDown : style.scrolledUp}`}>
                                <Navbar navLinks={navLinks} />
                                <SideBar navLinks={navLinks} />
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Offset id="back-to-top" />
            <BackToTop>
                <Fab color="secondary" size="large" aria-label="back to top">
                    <KeyboardArrowUp />
                </Fab>
            </BackToTop>
        </>
    )
}

export default Header;
