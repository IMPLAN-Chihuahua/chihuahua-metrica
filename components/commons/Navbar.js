import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Link from 'next/link';

const Navbar = ({navLinks}) => {
    return (
        <>
            <Toolbar
                component="nav"
                sx=
                    {{
                        display: {xs: 'none', md: 'flex'},
                    }}
            >
            <Stack direction="row" spacing={3}>
                    {
                        navLinks.map(
                            ({title, path}, i) => (
                                <Link href={path} key={title} passHref>
                                    <a>
                                        {title}
                                    </a>
                                </Link>
                            )
                        )
                    }
            </Stack>
            </Toolbar>
        </>
    );
};

export default Navbar;