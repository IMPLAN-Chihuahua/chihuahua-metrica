import styles from './Title.module.css';

const { Typography } = require("@mui/material");

const Title = (props) => {
    const variant = props.variant || 'h1';
    const content = props.content;
    return (
        <>
        <Typography variant={variant}>{content}</Typography>
        <hr className={styles.titleDivider} />
        </>
    );
};

export default Title;