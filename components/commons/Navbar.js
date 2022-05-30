import { Box, styled } from "@mui/material";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Link from 'next/link';
import style from '../../styles/dropdown.module.css'

const Navbar = ({ navLinks }) => {
  return (
    <>
      <Box className={style.menu}>
        <Toolbar
          component="nav"
          sx={{ display: { xs: 'none', md: 'flex' }, }}
        >
          <Stack direction="row" spacing={3} className={style.navbar}>
            {
              navLinks.map(
                ({ title, path }, i) => (
                  <>
                    <Link href={path} key={title} passHref >
                      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} key={title} className={style.pointer}>
                        <a >
                          {title}
                          <br />
                        </a>
                      </Box>
                    </Link>
                  </>
                )
              )
            }
          </Stack>
        </Toolbar>
      </Box>
    </>
  );
};

export default Navbar;