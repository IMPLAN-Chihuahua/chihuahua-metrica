import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const steps = [
    {
        label: 'Select campaign settings',
        description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
        imgPath: 'http://siee.mpiochih.gob.mx/imagenes_catalogo/Cupressus arizonica/cupressus_arizonica_1.jpg'

    },
    {
        label: 'Create an ad group',
        description:
            'An ad group contains one or more ads which target a shared set of keywords.',
        imgPath: 'http://siee.mpiochih.gob.mx/imagenes_catalogo/Cupressus arizonica/cupressus_arizonica_1.jpg'
    },
    {
        label: 'Create an ad',
        description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
        imgPath: 'http://siee.mpiochih.gob.mx/imagenes_catalogo/Cupressus arizonica/cupressus_arizonica_1.jpg'

    },
];

export default function ImageCatalog({ qty, imgName, autores, nombreCientifico }) {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const imageServer = 'http://siee.mpiochih.gob.mx/imagenes_catalogo/';

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const imgArray = [];

    for (let i = 1; i <= qty; i++) {
        imgArray.push(`${imageServer}/${nombreCientifico}/${imgName}_${i}.jpg`);
    }

    return (
        <Box sx={{
            maxWidth: 400, flexGrow: 1,
        }}>
            <Paper
                square
                elevation={0}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    textAlign: 'center',
                    justifyContent: 'center',
                    height: 50,
                    pl: 2,
                    bgcolor: 'background.default',
                }}
            >
                <Typography style={{fontWeight:'bold'}}>Fotografías obtenidas de {autores}</Typography>
            </Paper>
            <Box
                sx={{
                    height: 300,
                    width: 500,
                    maxHeight: { xs: '100%', sm: '100%', md: '100%' },
                    maxWidth: { xs: '100%', sm: '100%', md: '100%' }
                }}
                component="img" src={imgArray[activeStep]} >
            </Box>
            <MobileStepper
                variant="text"
                steps={qty}
                position="static"
                activeStep={activeStep}
                sx={{
                    bgcolor: 'background.default',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',

                }}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === qty - 1}
                    >
                        Next
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Back
                    </Button>
                }
            />
        </Box>
    );
}
