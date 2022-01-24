import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/icons-material/Menu";
import Link from 'next/link';

import { useState } from "react";


const SideBar = ( {navLinks}) => {
    const [bar, setBar] = useState({right: false},)

    const toggleBar = (anchor, open) => (e) => {
    if(e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift'))
    {
        return;
    }

    setBar({...bar, [anchor]: open});
};

const list = (anchor) => (
    <Box
        sx={{width: 200, marginTop: 'auto', marginBottom: 'flex'}}
        role='presentation'
        onClick={toggleBar(anchor, false)}
        onKeyDown={toggleBar(anchor, false)}
    > 
    {navLinks.map(({title, path}, i) => (
        <Typography
            variannt='button'
            key={`${title}${i}`}
            sx={{
                ml: 5,
                my: 2,
                textTransform: 'uppercase',
                color: 'common.white',
            }}
            >
        <Link href={path} key={title}>
            <a>
                {title}
            </a>
        </Link>
        </Typography>
    ))}
    </Box>
);
    return (
    <>
        <IconButton
            edge='start'
            aria-label='menu'
            onClick={toggleBar('right', true)}
            sx={{
                color: 'common.white',
                display: {xs: 'inline', md: 'none'},
            }}
        >
            <Menu fontSize='large'/>
        </IconButton>

        <Drawer
            anchor='right'
            open={bar.right}
            onClose={toggleBar('right', false)}
            sx={{
                '.MuiDrawer-paper': {bgcolor: 'primary.main'},
            }}
            >
            {list('right')}
        </Drawer>
    </>
)
};





export default SideBar;