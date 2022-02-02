import styles from './Title.module.css';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { toTitleCase } from 'helpers/StringUtils';

const Title = ({ variant, content, margin, lineStart = 'auto' }) => {
    return (
        <>
            <Box sx={{ display: 'flex', m: { margin } }} className={styles.titleGrandfather}>
                <Box m="auto" className={styles.titleFather}>
                    <Typography className={styles.titleContent} variant={variant}>{toTitleCase(content)}</Typography>
                    <Divider sx={{ m: lineStart }} className={styles.titleDivider}></Divider>
                </Box>
            </Box>
        </>
    );
};

export default Title;