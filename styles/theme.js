import { createTheme } from "@mui/material/styles";
import { responsiveFontSizes } from "@mui/material/styles";
import { typography } from "@mui/system";

let theme = createTheme({
    palette: {
        // Change color after checking MUI
        primary: { 
            main: '#263044',
            contrastText: '#E3F6FA'
        },
        
        secondary: {
            main: '#d1a961',
        },
      
        info: {
            main: '#E3F6FA'
        },
      
        detail: {
            main: '#158585'
        }
    }
});

theme = responsiveFontSizes(theme);

export default theme;