import { Box, styled } from "@mui/material";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Link from 'next/link';
import style from '../../styles/dropdown.module.css'

const Navbar = ({ navLinks }) => {
  return (
    <>
      <Toolbar
        component="nav"
        sx={{ display: { xs: 'none', md: 'flex' }, }}
      >
        <Stack direction="row" spacing={3} className={style.navbar}>
          {
            navLinks.map(
              ({ title, path }, i) => (
                <Link href={path} key={title} passHref >
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className={style.pointer}>
                    <a >
                      {title}
                    </a>
                  </Box>
                </Link>
              )
            )
          }
          <Box className={style.dropdown}>
            <p className={style.dropbtn}>Proyectos</p>
            <Box className={style.dropdown_content}>
              <Link href="/proyecto-indicadores" passHref>
                <a>Indicadores</a>
              </Link>
              <a href="#">Proyecto 2</a>
              <a href="#">Proyecto 3</a>
            </Box>
          </Box>
        </Stack>
      </Toolbar>
    </>
  );
};

export default Navbar;