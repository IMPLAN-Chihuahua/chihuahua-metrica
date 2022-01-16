import { createTheme } from "@mui/material/styles";
import { responsiveFontSizes } from "@mui/material/styles";
import { typography } from "@mui/system";

let theme = createTheme({
    palette: {
        // Change color after checking MUI
        primary: { 
            main: '#263044',
            onMain: 'whitesmoke'
        },
        
        secondary: {
            main: '#d1a961',
        },
    },
});

theme = responsiveFontSizes(theme);

export default theme;