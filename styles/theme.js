import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { amber } from "@mui/material/colors";

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
    }
});

theme = responsiveFontSizes(theme);

export default theme;