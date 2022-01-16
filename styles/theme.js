import { createTheme } from "@mui/material/styles";
import { responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
    palette: {
        // Change color after checking MUI
        primary: { 
            main: '#263044',
            onMain: '#E3F6FA'
        },
        
        secondary: {
            main: '#d1a961',
        },
    }
});

theme = responsiveFontSizes(theme);

export default theme;