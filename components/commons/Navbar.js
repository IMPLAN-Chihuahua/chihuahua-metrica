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
                ({ title, path, cssName }, i) => (
                  <>
                    <Link href={path} key={i} passHref >
                      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} key={i} className={`${style.pointer} ${style[cssName]}`}>
                        <a key={i}>
                          {title}
                          <br />
                          <span className={style.dot}></span>
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