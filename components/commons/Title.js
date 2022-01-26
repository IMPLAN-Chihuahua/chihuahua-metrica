import { Box } from '@mui/system';
import styles from './Title.module.css';
const { Typography, Divider } = require("@mui/material");

const Title = ({variant, content, margin, lineStart = 'auto'}) => {
    return (
        <>
        <Box sx={{display: 'flex', m: {margin}}} className={styles.titleGrandfather}>
            <Box m="auto" className={styles.titleFather}>
                <Typography className={styles.titleContent} variant={variant}>{content}</Typography>
                <Divider sx={{m: lineStart}} className={styles.titleDivider}></Divider>
            </Box>
        </Box>  
        </>
    );
};

export default Title;