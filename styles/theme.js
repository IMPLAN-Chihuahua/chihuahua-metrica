import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { deepPurple, amber } from "@mui/material/colors";

let theme = createTheme({
    palette: {
        // Change color after checking MUI
        primary: { 
            main: '#263044',
            onMain: 'whitesmoke'
        },
        
        secondary: amber,
    }
});

theme = responsiveFontSizes(theme);

export default theme;