import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import AppBar from "@mui/material/AppBar";
import Image from 'next/image';
import Fab from "@mui/material/Fab";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import BackToTop from "./BackToTop";
import { Grid, IconButton } from "@mui/material";
import NextLink from "next/link";
import { Box } from "@mui/system";
import { ArrowBackIosNew } from "@mui/icons-material";
import Modal from '@mui/material/Modal';

import style from './Header.module.css'

const navLinks = [
  { title: 'Inicio', path: '/', cssName: 'inicio' },
  { title: 'Proyectos', path: '#proyectos', cssName: 'proyectos' },
  { title: 'Conócenos', path: '/conocenos', cssName: 'conocenos' },
  { title: 'Contacto', path: '/contacto', cssName: 'contacto' },
]

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

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
      <AppBar position="fixed" elevation={0} className={`${style.appbar}`} >
        <Grid container direction='column'>
          {
            pathname === '/' ?
              <Grid
                item
                flexGrow={1}
                style={{ backgroundColor: 'white' }}
                className={`${style.navbarCentered} ${scrollPosition > 100 ? style.disappear : style.exists}`}
                md={2}
              >
                <NextLink href='/'>
                  <a>
                    <Image src='/images/small-logo.png' width={210} height={60} objectFit='contain' alt="small Logo" />
                  </a>
                </NextLink>
                <img onClick={handleOpen} className={`${style.play}`} src='/images/video/playbtn.png' alt="play button" />
              </Grid>
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
                <Grid item flexGrow={1} className={`${style.navbarCentered} ${style.scrolledDown}`} md={2}>
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
              md={10} >
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
      <div id="back-to-top" />
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


      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={modalStyle}>
          <iframe width="1180" height="480" src="https://www.youtube.com/embed/5Jc6aMbJkAc" title="Métrica  Chihuahua" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </Box>
      </Modal>
    </>
  )
}

export default Header;
