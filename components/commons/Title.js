import styles from './Title.module.css';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { toTitleCase } from 'helpers/StringUtils';

const Title = ({ variant, component, margin, lineStart = 'auto', children, fontWeight = 'regular' }) => {
    component = component !== null ? component : variant;
    return (
        <>
            <Box sx={{ display: 'flex', m: { margin } }}>
                <Box className={styles.titleFather}>
                    <Typography
                        className={styles.titleContent}
                        variant={variant}
                        component={component}
                        sx={{ fontWeight: { fontWeight } }}>{toTitleCase(children)}
                    </Typography>
                    <Divider sx={{ m: lineStart }} className={styles.titleDivider}></Divider>
                </Box>
            </Box>
        </>);
};

export default Title;