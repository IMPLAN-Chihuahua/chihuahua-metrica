import { Box, styled } from "@mui/material";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Link from 'next/link';
import style from '../../styles/dropdown.module.css'


const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  }));


const Navbar = ({navLinks}) => {
    
    
    return (
        <>
            <Toolbar
                component="nav"
                sx={{display: {xs: 'none', md: 'flex'},}}
            >
            <Stack direction="row" spacing={3} className={style.navbar}>
              
                    {
                        navLinks.map(
                            ({title, path}, i) => (
                                <Link href={path} key={title}  passHref >
                                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}} className={style.pointer}>
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