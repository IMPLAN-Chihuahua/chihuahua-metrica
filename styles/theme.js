import { createTheme } from "@mui/material/styles";
import { responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
    palette: {
        // Change color after checking MUI
        primary: {
            main: '#000000',
            subtleMain: '#46587C',
            darkerMain: '#1C2331',
            contrastText: '#FFFFFF',
            buttonColor: '#EEEEEE',
            white: '#FFFFFF',
        },

        secondary: {
            main: '#d1a961',
            darkerMain: '#B5955C'
        },

        info: {
            main: '#E3F6FA',
            outline: '#D7D0D8',
        },

        detail: {
            main: '#158585'
        },

        cardInformation: {
            main: '#204C5A'
        }
    }
});

theme = responsiveFontSizes(theme);


export default theme;