import { Box } from '@mui/system';
import styles from './Title.module.css';

const { Typography } = require("@mui/material");

const Title = (props) => {
    const variant = props.variant || 'h1';
    const content = props.content;
    return (
        <>
        <Box sx={{display: 'flex'}} className={styles.tests}>
            <Box m="auto">
                <Typography variant={variant}>{content}</Typography>
                <hr className={styles.titleDivider} />
            </Box>
        </Box>  
        </>
    );
};

export default Title;