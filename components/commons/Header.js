import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import AppBar from "@mui/material/AppBar";
import Image from 'next/image';
import Fab from "@mui/material/Fab";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import BackToTop from "./BackToTop";
import { Grid, IconButton, Box } from "@mui/material";
import NextLink from "next/link";
import { ArrowBackIosNew } from "@mui/icons-material";

import style from './Header.module.css'

const navLinks = [
  { title: 'Inicio', path: '/', cssName: 'inicio' },
  { title: 'Proyectos', path: '#proyectos', cssName: 'proyectos' },
  { title: 'Conócenos', path: '/conocenos', cssName: 'conocenos' },
  { title: 'Contacto', path: '/contacto', cssName: 'contacto' },
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

  const router = useRouter();
  const { pathname } = router;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <AppBar position="fixed" elevation={0} className={`${style.appbar}`}>
        <Grid container direction='column'>
          {
            pathname === '/' ?
              (
                <Grid
                  item
                  flexGrow={1}
                  style={{ backgroundColor: 'white', height: '5rem' }}
                  className={`${style.navbarCentered} ${scrollPosition > 100 ? style.disappear : style.exists}`}
                >
                  <NextLink href='/'>
                    <a>
                      <Image src='/images/small-logo.png' width={210} height={60} objectFit='contain' alt="small Logo" />
                    </a>
                  </NextLink>
                </Grid>
              )
              :
              <>
                <Box
                  sx={{
                    position: 'absolute',
                    height: '100%',
                    display: { xs: 'flex', lg: 'none' },
                    alignItems: 'center',
                    ml: 2,
                  }}>
                  <IconButton onClick={() => router.back()}>
                    <ArrowBackIosNew fontSize='large' htmlColor='white' />
                  </IconButton>
                </Box>
                <Grid item flexGrow={1} className={
                  `${style.navbarCentered} ${style.scrolledDown}
                    ${(pathname === '/arbolado-urbano' || pathname === '/arbolado-urbano/catalogo')
                    ? style.arboladoHeader : ''}
                  `
                } md={2}>
                  <NextLink href='/'>
                    <a>
                      <Image src='/logo_chihuahua_metrica.webp' width={210} height={60} objectFit='contain' alt="small Logo" />
                    </a>
                  </NextLink>

                </Grid>
              </>
          }
          {
            pathname === '/' &&
            <Grid
              item
              xs
              justifyContent='flex-end'
              className={`${style.navbarCentered} ${style.navbarMenu} ${scrollPosition > 100 ? style.scrolledDown : style.scrolledUp}`}
            >
              {
                scrollPosition > 100 &&
                <NextLink href='/'>
                  <a>
                    <Image src='/logo_chihuahua_metrica.webp' width={210} height={60} objectFit='contain' alt="small Logo" />
                  </a>
                </NextLink>
              }
              <Navbar navLinks={navLinks} />
              <SideBar navLinks={navLinks} />
            </Grid>
          }
        </Grid>
      </AppBar>

      <BackToTop>
        <Fab sx={{
          backgroundColor: "primary.subtleMain",
          color: "primary.contrastText",
          '&:hover': {
            color: "primary.main"
          }
        }}
          size="large"
        >
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>
    </>
  )
}

export default Header;
