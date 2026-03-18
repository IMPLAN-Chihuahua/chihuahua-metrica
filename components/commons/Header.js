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
  { title: 'Conócenos', path: '/conocenos', cssName: 'conocenos' },
  { title: 'Contacto', path: '/contacto', cssName: 'contacto' },
  { title: 'Manual de usuario', path: 'https://view.genially.com/691e2306f1e1e7523249333e/interactive-content-manual-usuario', cssName: 'manual', target: '_blank' },
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

  return (
    <>
      <AppBar position="fixed" elevation={0} className={`${style.appbar}`}>
        <Grid container direction='column'>

          {/* Botón de retroceso: Solo aparece si NO estás en el Inicio ('/') */}
          {pathname !== '/' && (
            <Box
              sx={{
                position: 'absolute',
                height: '100%',
                display: { xs: 'flex', lg: 'none' },
                alignItems: 'center',
                ml: 2,
                zIndex: 10 // Agregamos zIndex por si choca con el logo en pantallas pequeñas
              }}>
              <IconButton onClick={() => router.back()}>
                <ArrowBackIosNew fontSize='large' htmlColor='white' />
              </IconButton>
            </Box>
          )}

          {/* Menú Principal: AHORA SE MUESTRA SIEMPRE */}
          <Grid
            item
            xs
            justifyContent='flex-end'
            className={`
              ${style.navbarCentered} 
              ${style.navbarMenu} 
              ${style.scrolledDown} 
              ${(pathname === '/arbolado-urbano' || pathname === '/arbolado-urbano/catalogo') ? style.arboladoHeader : ''}
            `}
          >
            <NextLink href='/'>
              <a>
                <Image src='/logo_2026_white.png' width={210} height={60} objectFit='contain' alt="small Logo" />
              </a>
            </NextLink>

            {/* Estos dos componentes antes estaban ocultos en otras rutas */}
            <Navbar navLinks={navLinks} />
            <SideBar navLinks={navLinks} />
          </Grid>

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