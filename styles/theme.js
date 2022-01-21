import { createTheme } from "@mui/material/styles";
import { responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
    palette: {
        // Change color after checking MUI
        primary: { 
            main: '#263044',
            contrastText: '#E3F6FA',
            buttonColor: '#EEEEEE'
        },
        
        secondary: {
            main: '#d1a961',
            darkerMain: '#B5955C'
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