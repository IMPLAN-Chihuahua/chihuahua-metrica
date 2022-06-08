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
import { Container, Grid } from "@mui/material";
import NextLink from "next/link";

import style from './Header.module.css'
import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import { Box } from "@mui/system";

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

        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);

    const { pathname } = useRouter();
    return (
        <>
            <Container className={`${style.topHeader}`}>

            </Container>
            <AppBar position="fixed" elevation={0} className={`${style.appbar}`} >
                <Grid container direction='column'>
                    {
                        pathname === '/' ?
                            <Grid item flexGrow={1} className={`${style.navbarCentered} ${scrollPosition > 100 ? style.disappear : style.exists}`} md={2}>
                                <NextLink href='/' >
                                    <a>
                                        <Image src='/images/small-logo.png' width={210} height={60} alt="small Logo" />
                                    </a>
                                </NextLink>
                            </Grid>
                            :
                            <Grid item flexGrow={1} className={`${style.navbarCentered} ${style.scrolledDown}`} md={2}>
                                <NextLink href='/'>
                                    <a>
                                        <Image src='/logo_chihuahua_metrica.webp' width={210} height={60} alt="small Logo" />
                                    </a>
                                </NextLink>
                            </Grid>
                    }
                    {
                        pathname === '/' &&
                        <Grid item xs justifyContent='flex-end' className={`${style.navbarCentered} ${style.navbarMenu} ${scrollPosition > 100 ? style.scrolledDown : style.scrolledUp}`} md={10} >
                            {
                                scrollPosition > 100 &&
                                <NextLink href='/'>
                                    <a>
                                        <Image src='/logo_chihuahua_metrica.webp' width={210} height={60} alt="small Logo" />
                                    </a>
                                </NextLink>
                            }
                            <Navbar navLinks={navLinks} />
                            <SideBar navLinks={navLinks} />
                        </Grid>
                    }
                </Grid>
            </AppBar>
            <Offset id="back-to-top" />
            <BackToTop>
                <Fab sx={{ backgroundColor: "primary.subtleMain", color: "primary.contrastText" }} size="large" aria- label="back to top">
                    <KeyboardArrowUp />
                </Fab>
            </BackToTop>
        </>
    )
}

export default Header;
