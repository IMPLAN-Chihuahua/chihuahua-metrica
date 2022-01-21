import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const SecondaryColorButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#d1a961',
    '&:hover': {
        backgroundColor: '#B5955C',
    },
}));

export default SecondaryColorButton;