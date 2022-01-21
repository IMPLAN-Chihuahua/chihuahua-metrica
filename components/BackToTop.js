import { Box, useScrollTrigger, Zoom } from "@mui/material";
const BackToTop = ({children}) => {
    const trigger = useScrollTrigger();
    
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return(
        <Zoom in={trigger}>
            <Box
                onClick={handleClick}
                rele='presentation'
                sx={{position: 'fixed', bottom: 18, right: 18, zIndex: 1}}
            >
                {children}
            </Box>
        </Zoom>
    );
};


export default BackToTop;