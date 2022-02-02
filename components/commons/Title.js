import { Box } from '@mui/system';
import styles from './Title.module.css';
const { Typography, Divider } = require("@mui/material");

const Title = ({variant, content, margin, lineStart = 'auto', children, fontWeight = 'regular'}) => {
    return (
        <>
        <Box sx={{display: 'flex', m: {margin}}}>
            <Box className={styles.titleFather}>
                <Typography className={styles.titleContent} variant={variant} sx={{fontWeight: {fontWeight}}}>{children}</Typography>
                <Divider sx={{m: lineStart}} className={styles.titleDivider}></Divider>
            </Box>
        </Box>  
        </>
    );
};

export default Title;