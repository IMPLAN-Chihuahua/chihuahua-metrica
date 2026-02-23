import { Grid } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react'

export const MAP_ROUTES = {
    "9": "/chihuahua-en-datos/temas/9/indicadores",  // Estructura
    "7": "/chihuahua-en-datos/temas/7/indicadores",  // Accesibilidad
    "6": "/chihuahua-en-datos/temas/6/indicadores",  // Conservacion
    "5": "/chihuahua-en-datos/temas/5/indicadores",  // Servicios Publicos
    "4": "/chihuahua-en-datos/temas/4/indicadores",  // Equipamiento
    "10": "/chihuahua-en-datos/temas/10/indicadores", // Poblacion
    "2": "/chihuahua-en-datos/temas/2/indicadores",  // Economia

    // "PMH": "/chihuahua-en-datos/programas/PMH/indicadores",
    // "PMOTDU": "/chihuahua-en-datos/programas/PMOTDU/indicadores",
    // "PSE": "/chihuahua-en-datos/programas/PSE/indicadores",
    // "AR": "/chihuahua-en-datos/programas/AR/indicadores",
    "PSMAMS": "https://implanchihuahua.org/Descargables_EP.html",
    "PPCC": "https://ciudadcercana.org/",
    // "PSDUPZVPHAAC": "/chihuahua-en-datos/programas/PSDUPZVPHAAC/indicadores",

    "Calidad_de_vida_sost": "/chihuahua-en-datos/objetivos/3/indicadores",
    "Entornos_urbanos_consolidados": "/chihuahua-en-datos/objetivos/2/indicadores",
    "Infraestructura_de_Desarrollo": "/chihuahua-en-datos/objetivos/1/indicadores",
    "PDU2040": "https://implanchihuahua.org/PDU2040.html",
};


const svgStyles = `
    .cls-1 { fill: #8cbf6b; }
    .cls-1, .cls-2, .cls-3, .cls-4, .cls-5, .cls-6, .cls-7, .cls-8, .cls-9, .cls-10, .cls-11, .cls-12, .cls-13 {
        font-family: Montserrat-Bold, Montserrat, sans-serif;
        font-variation-settings: 'wght' 700;
        font-weight: 700;
    }
    .cls-1, .cls-2, .cls-3, .cls-4, .cls-5, .cls-6, .cls-7, .cls-8, .cls-9, .cls-11, .cls-12, .cls-13 { font-size: 45px; }
    .cls-14 { fill: none; }
    .cls-15 { fill: #65b437; }
    .cls-16 { fill: #ad2253; }
    .cls-17, .cls-4 { fill: #9e3e18; }
    .cls-2, .cls-18 { fill: #276300; }
    .cls-3, .cls-19 { fill: #db779d; }
    .cls-5, .cls-20 { fill: #af7d00; }
    .cls-6 { fill: #91d1e5; }
    .cls-21, .cls-9 { fill: #ff7b7b; }
    .cls-22 { fill: #d93029; }
    .cls-23 { fill: #4d6f85; }
    .cls-24 { font-size: 51.32px; }
    .cls-24, .cls-25, .cls-26 {
        font-family: 'Montserrat_556.000wght_0ital', Montserrat, sans-serif;
        font-variation-settings: 'wght' 556;
    }
    .cls-24, .cls-25, .cls-26, .cls-27 { fill: #bed3dc; }
    .cls-7, .cls-28 { fill: #004e75; }
    .cls-25 { font-size: 53.87px; }
    .cls-29 { font-size: 124.43px; }
    .cls-29, .cls-30 {
        font-family: Montserrat-Black, Montserrat, sans-serif;
        font-variation-settings: 'wght' 900;
        font-weight: 800;
    }
    .cls-29, .cls-30, .cls-31 { fill: #1a2b43; }
    .cls-32, .cls-11 { fill: #70beb7; }
    .cls-33 { fill: #0090ca; }
    .cls-26 { font-size: 51.56px; }
    .cls-34, .cls-8 { fill: #f86d2b; }
    .cls-35 { letter-spacing: 0em; }
    .cls-36 { fill: #004656; }
    .cls-37 { letter-spacing: 0em; }
    .cls-38 { fill: #174144; }
    .cls-39 { fill: #efc02b; }
    .cls-40 { letter-spacing: 0em; }
    .cls-30 { font-size: 145.21px; }
    .cls-41 { fill: #010203; }
    .cls-42 { fill: #006584; }
    .cls-43 { fill: #d35224; }
    .cls-10 { fill: #f4885d; font-size: 47px; }
    .cls-44 { letter-spacing: -.02em; }
    .cls-45 { letter-spacing: -.01em; }
    .cls-46 { letter-spacing: -.01em; }
    .cls-47 { letter-spacing: -.02em; }
    .cls-48 { letter-spacing: -.02em; }
    .cls-49 { letter-spacing: -.02em; }
    .cls-50 { letter-spacing: -.02em; }
    .cls-51 { letter-spacing: -.01em; }
    .cls-52 { letter-spacing: -.04em; }
    .cls-53 { letter-spacing: 0em; }
    .cls-54 { letter-spacing: 0em; }
    .cls-55 { letter-spacing: 0em; }
    .cls-56 { letter-spacing: -.01em; }
    .cls-57 { letter-spacing: -.01em; }
    .cls-58 { letter-spacing: 0em; }
    .cls-59 { letter-spacing: 0em; }
    .cls-60 { letter-spacing: 0em; }
    .cls-61 { letter-spacing: 0em; }
    .cls-62 { letter-spacing: 0em; }
    .cls-63, .cls-12 { fill: #116d62; }
    .cls-64 { letter-spacing: .02em; }
    .cls-65 { letter-spacing: .02em; }
    .cls-66 { letter-spacing: .01em; }
    .cls-13 { fill: #83cce2; }
    .cls-67 { letter-spacing: 0em; }
    .cls-68 { letter-spacing: 0em; }
    .cls-69 { letter-spacing: 0em; }

svg [data-label] {
        cursor: pointer;
        transition: all 0.2s ease-in-out;
    }

    svg [data-label]:hover {
        opacity: 0.8;
        filter: brightness(1.1);
        transform: scale(1.005); /* Un mini zoom opcional para que se sienta más "botón" */
        transform-origin: center;
    }

    /* Esto es vital para que los textos no estorben el click/hover */
    text, tspan {
        pointer-events: none;
        user-select: none;
    }
    text, tspan {
        pointer-events: none;
    }
`;

const NewInteractiveMap = () => {

    const router = useRouter();

    const handleGlobalClick = (event) => {
        const target = event.target.closest('[id]');
        if (!target) return;

        const clickedId = target.id;
        const destination = MAP_ROUTES[clickedId];

        if (destination) {
            console.log(`Navegando a: ${destination}`);
            router.push(destination);
        }
    };

    return (
        <Grid
            item
            xs={12}
            md={10}
            lg={10}
            sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}
        >
            <svg
                id="Capa_1"
                data-name="Capa 1"
                viewBox="0 0 4061.69 3261.58"
                version="1.1"
                style={{ width: '100%', height: 'auto' }}
                onClick={handleGlobalClick}
            >

                <defs>
                    <style>{svgStyles}</style>
                </defs>
                <defs
                    id="defs1">

                </defs>
                <g
                    id="g287"
                    style={{ display: 'inline' }}>
                    <g
                        id="g7"
                        style={{ display: 'inline' }}>
                        <path
                            className="cls-32"
                            d="m 1075.5,1891 c 24.78,58.65 55.46,115.21 91.18,168.1 13.53,20.03 27.83,39.61 42.83,58.65 l 318.84,-254.26 c -31.34,-40.11 -57.18,-84.05 -77.14,-131.27 -30.32,-71.75 -45.69,-147.99 -45.69,-226.6 0,-41.87 4.36,-83.06 13.02,-123.26 l -397.66,-90.76 c -15.35,69.76 -23.09,141.29 -23.09,214.02 0,133.72 26.14,263.38 77.7,385.39 z"
                            id="9"
                            style={{ display: 'inline' }}
                            data-label="Estructura" />
                        <path
                            className="cls-34"
                            d="m 1433.91,2326.33 c 52.9,35.72 109.46,66.4 168.1,91.18 120.06,50.74 247.53,76.86 378.98,77.68 v -407.75 c -76.35,-0.81 -150.4,-16.16 -220.19,-45.65 -69.3,-29.29 -131.53,-71.22 -184.95,-124.64 -13.96,-13.96 -27.12,-28.52 -39.49,-43.65 l -318.84,254.27 c 21.95,27.13 45.32,53.13 69.95,77.76 44.77,44.77 94.04,85.41 146.43,120.79 z"
                            id="7"
                            style={{ display: 'inline' }}
                            data-label="Accesibilidad" />
                        <path
                            className="cls-15"
                            d="m 1287.48,805.68 c -44.77,44.77 -85.41,94.04 -120.79,146.43 -35.72,52.9 -66.4,109.46 -91.18,168.1 -21.84,51.67 -39.11,104.71 -51.77,158.86 l 397.66,90.76 c 7.39,-30.94 17.34,-61.27 29.83,-90.83 29.29,-69.3 71.22,-131.53 124.64,-184.94 45.13,-45.13 96.55,-82.07 153.22,-110.1 L 1552.12,616.48 c -40.88,20.04 -80.47,42.93 -118.19,68.41 -52.4,35.38 -101.67,76.03 -146.43,120.79 z"
                            id="6"
                            style={{ display: 'inline' }}
                            data-label="Conservacion" />
                        <path
                            className="cls-33"
                            d="m 2899.31,1891 c 51.56,-122.01 77.7,-251.67 77.7,-385.39 0,-72.73 -7.74,-144.27 -23.09,-214.02 l -397.66,90.76 c 8.66,40.2 13.02,81.39 13.02,123.26 0,78.62 -15.37,154.86 -45.69,226.6 -19.96,47.23 -45.8,91.17 -77.14,131.27 l 318.84,254.26 c 15,-19.04 29.31,-38.61 42.83,-58.65 35.72,-52.9 66.4,-109.46 91.18,-168.1 z"
                            id="5"
                            style={{ display: 'inline' }}
                            data-label="Servicios_publicos" />
                        <path
                            className="cls-16"
                            d="m 2540.9,2326.33 c 52.4,-35.38 101.67,-76.02 146.43,-120.79 24.63,-24.63 48.01,-50.64 69.95,-77.76 l -318.84,-254.27 c -12.37,15.13 -25.53,29.69 -39.49,43.65 -53.42,53.42 -115.64,95.35 -184.94,124.64 -69.79,29.49 -143.84,44.84 -220.19,45.65 v 407.75 c 131.45,-0.82 258.92,-26.95 378.98,-77.68 58.65,-24.78 115.21,-55.46 168.1,-91.18 z"
                            id="4"
                            style={{ display: 'inline' }}
                            data-label="Equipamiento" />
                        <path
                            className="cls-22"
                            d="m 2899.31,1120.22 c -24.78,-58.65 -55.46,-115.21 -91.18,-168.1 -35.38,-52.4 -76.03,-101.67 -120.79,-146.43 -44.77,-44.77 -94.04,-85.41 -146.43,-120.79 -37.72,-25.47 -77.32,-48.37 -118.19,-68.41 l -176.97,367.48 c 56.66,28.04 108.08,64.97 153.22,110.1 53.42,53.42 95.35,115.64 124.64,184.94 12.49,29.56 22.44,59.89 29.83,90.83 l 397.66,-90.76 c -12.66,-54.14 -29.94,-107.19 -51.77,-158.86 z"
                            id="10"
                            style={{ display: 'inline' }}
                            data-label="Poblacion" />
                        <path
                            className="cls-39"
                            d="m 1987.4,516 c -133.72,0 -263.38,26.14 -385.39,77.7 -12.89,5.45 -25.68,11.2 -38.36,17.21 l 176.97,367.49 c 6.65,-3.11 13.38,-6.11 20.17,-8.98 71.75,-30.32 147.99,-45.69 226.6,-45.69 78.61,0 154.86,15.37 226.6,45.69 6.79,2.87 13.51,5.87 20.17,8.98 L 2411.13,610.91 C 2398.45,604.9 2385.67,599.15 2372.77,593.7 2250.76,542.14 2121.1,516 1987.38,516 Z"
                            id="2"
                            style={{ display: 'inline' }}
                            data-label="Economia" />
                    </g>
                    <path
                        className="cls-18"
                        d="m 1466.51,954.22 c -3.09,-8.89 -12.18,-14.24 -21.72,-12.69 -0.52,0.06 -0.97,0.19 -1.42,0.39 l -41.88,17.33 c -3.03,-6.77 -9.79,-11.53 -17.66,-11.53 h -27.9 c -3.03,0 -6.06,0.71 -8.83,2 l -23.33,8.76 c -0.32,-10.37 -8.83,-18.75 -19.27,-18.75 -10.44,0 -19.33,8.7 -19.33,19.33 v 51.55 c 0,10.63 8.7,19.33 19.33,19.33 7.8,0 14.56,-4.7 17.59,-11.41 h 88.22 c 3.8,0 7.54,-1.1 10.76,-3.16 0.45,-0.26 0.84,-0.58 1.16,-0.97 l 37.24,-38.73 c 6.96,-4.83 9.86,-13.6 7.09,-21.52 l -0.07,0.06 z m -155.62,56.45 c 0,3.54 -2.9,6.44 -6.44,6.44 -3.54,0 -6.44,-2.9 -6.44,-6.44 v -51.55 c 0,-3.54 2.9,-6.44 6.44,-6.44 3.54,0 6.44,2.9 6.44,6.44 z m 140.86,-45.3 c -0.45,0.26 -0.84,0.58 -1.16,0.97 l -37.12,38.6 c -0.97,0.52 -2.13,0.77 -3.29,0.77 h -86.48 v -33.44 l 28.1,-10.57 c 0,0 0.39,-0.19 0.58,-0.26 1.03,-0.52 2.26,-0.77 3.42,-0.77 h 27.9 c 3.54,0 6.44,2.9 6.44,6.44 0,3.54 -2.9,6.44 -6.44,6.44 h -31.19 c -3.54,0 -6.44,2.9 -6.44,6.44 0,3.54 2.9,6.44 6.44,6.44 h 31.19 c 8.57,0 15.79,-5.67 18.3,-13.4 l 45.37,-18.75 c 3.16,-0.26 5.93,1.55 6.9,4.25 0.9,2.58 -0.13,5.35 -2.58,6.9 l 0.07,-0.06 z m -118.31,-26.42 c 14.05,-7.99 27.9,-12.05 41.76,-12.05 h 0.39 c 13.85,0 27.71,4.06 41.76,12.05 1.03,0.58 2.13,0.84 3.22,0.84 2.26,0 4.38,-1.16 5.61,-3.22 1.74,-3.09 0.71,-7.02 -2.38,-8.76 -13.92,-7.93 -27.9,-12.44 -41.88,-13.47 v -27.32 c 6.83,-0.52 18.43,-2.64 26.55,-10.83 11.99,-11.99 11.02,-31.45 11.02,-32.22 -0.19,-3.29 -2.77,-5.93 -6.06,-6.06 -0.84,-0.06 -20.3,-0.97 -32.22,11.02 -2.38,2.38 -4.19,5.03 -5.67,7.73 -1.48,-2.77 -3.29,-5.41 -5.67,-7.73 -11.99,-11.99 -31.45,-11.08 -32.22,-11.02 -3.29,0.19 -5.93,2.77 -6.06,6.06 0,0.84 -0.97,20.3 11.02,32.22 8.18,8.18 19.72,10.31 26.55,10.83 v 27.32 c -13.98,1.03 -27.97,5.54 -41.88,13.47 -3.09,1.74 -4.19,5.67 -2.38,8.76 1.74,3.09 5.67,4.19 8.76,2.38 h -0.2 z m 56.64,-81.07 c 4.45,-4.45 11.08,-6.19 15.98,-6.83 -0.64,4.9 -2.38,11.53 -6.83,15.98 -4.45,4.45 -11.08,6.19 -15.98,6.83 0.64,-4.9 2.38,-11.53 6.83,-15.98 z m -38.66,9.15 c -4.45,-4.45 -6.19,-11.08 -6.83,-15.98 4.9,0.64 11.53,2.38 15.98,6.83 4.45,4.45 6.19,11.08 6.83,15.98 -4.9,-0.64 -11.53,-2.38 -15.98,-6.83 z"
                        id="path8"
                        style={{ display: 'inline' }} />
                    <g
                        id="g10"
                        style={{ display: 'inline' }}>
                        <path
                            className="cls-20"
                            d="m 1992.7,785.55 c -28.15,0 -54.62,-10.96 -74.53,-30.87 -19.91,-19.91 -30.87,-46.38 -30.87,-74.53 0,-28.15 10.96,-54.62 30.87,-74.53 19.91,-19.91 46.38,-30.87 74.53,-30.87 28.15,0 54.62,10.96 74.53,30.87 19.91,19.91 30.87,46.38 30.87,74.53 0,28.15 -10.96,54.62 -30.87,74.53 -19.91,19.91 -46.38,30.87 -74.53,30.87 z m 0,-198.46 c -51.31,0 -93.06,41.75 -93.06,93.06 0,51.31 41.75,93.06 93.06,93.06 51.31,0 93.06,-41.75 93.06,-93.06 0,-51.31 -41.75,-93.06 -93.06,-93.06 z"
                            id="path9" />
                        <path
                            className="cls-20"
                            d="m 1984.84,740.61 v -14.08 c -9.93,-0.44 -19.56,-3.11 -25.19,-6.37 l 4.45,-17.34 c 6.22,3.41 14.97,6.52 24.6,6.52 8.45,0 14.23,-3.26 14.23,-9.19 0,-5.93 -4.74,-9.19 -15.71,-12.89 -15.86,-5.34 -26.67,-12.74 -26.67,-27.12 0,-13.04 9.19,-23.27 25.04,-26.38 v -14.08 h 14.52 v 13.04 c 9.93,0.44 16.6,2.52 21.49,4.89 l -4.3,16.75 c -3.85,-1.63 -10.67,-5.04 -21.34,-5.04 -9.63,0 -12.74,4.15 -12.74,8.3 0,4.89 5.19,8 17.78,12.74 17.63,6.22 24.75,14.37 24.75,27.71 0,13.34 -9.34,24.45 -26.38,27.42 v 15.12 h -14.52 z"
                            id="path10" />
                    </g>
                    <g
                        id="g12"
                        style={{ display: 'inline' }}>
                        <path
                            className="cls-28"
                            d="m 2836.8,1674.3 c -1.64,0 -3.2,0.68 -4.3,1.87 -4.15,4.42 -24.8,27.27 -24.8,41.66 0,16.05 13.04,29.09 29.1,29.09 16.06,0 29.08,-13.03 29.08,-29.09 0,-14.4 -20.64,-37.24 -24.78,-41.66 -1.11,-1.2 -2.66,-1.87 -4.3,-1.87 z m 0,60.83 c -9.55,0 -17.31,-7.76 -17.31,-17.3 0,-6.11 9.08,-19.09 17.31,-28.76 8.22,9.67 17.29,22.66 17.29,28.76 0,9.54 -7.75,17.3 -17.29,17.3 z"
                            id="path11" />
                        <path
                            className="cls-28"
                            d="m 2816.91,1564.55 h -39.14 v -2.56 c 0,-10.22 -8.33,-18.55 -18.56,-18.55 h -14.46 v -36.18 h 40.65 c 3.25,0 5.9,-2.64 5.9,-5.9 0,-3.26 -2.64,-5.9 -5.9,-5.9 h -93.11 c -3.25,0 -5.9,2.64 -5.9,5.9 0,3.26 2.64,5.9 5.9,5.9 h 40.66 v 36.17 h -14.47 c -10.22,0 -18.55,8.33 -18.55,18.55 v 2.56 h -47.14 c -3.25,0 -5.9,2.64 -5.9,5.9 v 46.41 c 0,3.27 2.64,5.9 5.9,5.9 h 47.16 v 2.56 c 0,10.24 8.33,18.56 18.55,18.56 h 40.71 c 10.24,0 18.56,-8.33 18.56,-18.56 v -2.56 h 29.93 v 36.93 c 0,3.25 2.64,5.9 5.9,5.9 h 46.41 c 3.25,0 5.9,-2.64 5.9,-5.9 v -46.13 c 0,-27.02 -21.97,-49 -48.98,-49 z m -158.22,46.4 v -34.62 h 41.26 v 34.62 z m 107.29,14.36 c 0,3.73 -3.04,6.77 -6.77,6.77 h -40.71 c -3.73,0 -6.76,-3.04 -6.76,-6.77 V 1562 c 0,-3.73 3.03,-6.76 6.76,-6.76 h 40.71 c 3.73,0 6.77,3.03 6.77,6.76 z m 88.12,28.47 h -34.62 v -36.93 c 0,-3.24 -2.64,-5.9 -5.9,-5.9 h -35.82 v -34.62 h 39.14 c 20.51,0 37.19,16.7 37.19,37.2 v 40.25 z"
                            id="path12" />
                    </g>
                    <g
                        id="g15"
                        style={{ display: 'inline' }}>
                        <path
                            className="cls-21"
                            d="m 2529.4,971.93 c 11.88,-5.54 20.13,-17.59 20.13,-31.54 0,-19.18 -15.6,-34.79 -34.79,-34.79 -19.19,0 -34.79,15.6 -34.79,34.79 0,13.95 8.25,26 20.13,31.54 -14.94,4.81 -25.79,18.85 -25.79,35.37 v 76.04 h 80.89 v -76.04 c 0,-16.52 -10.84,-30.56 -25.79,-35.37 z m -14.65,-51.86 c 11.21,0 20.33,9.12 20.33,20.33 0,11.21 -9.12,20.33 -20.33,20.33 -11.21,0 -20.33,-9.12 -20.33,-20.33 0,-11.21 9.12,-20.33 20.33,-20.33 z m 25.98,148.82 h -51.97 v -61.58 c 0,-12.51 10.18,-22.7 22.7,-22.7 h 6.58 c 12.51,0 22.7,10.18 22.7,22.7 v 61.58 z"
                            id="path13" />
                        <path
                            className="cls-21"
                            d="m 2620.09,971.93 c 11.88,-5.54 20.13,-17.59 20.13,-31.54 0,-19.18 -15.6,-34.79 -34.79,-34.79 -19.19,0 -34.79,15.6 -34.79,34.79 0,13.95 8.25,26 20.13,31.54 -14.94,4.81 -25.79,18.85 -25.79,35.37 v 76.04 h 80.89 v -76.04 c 0,-16.52 -10.84,-30.56 -25.79,-35.37 z m -14.65,-51.86 c 11.21,0 20.33,9.12 20.33,20.33 0,11.21 -9.12,20.33 -20.33,20.33 -11.21,0 -20.33,-9.12 -20.33,-20.33 0,-11.21 9.12,-20.33 20.33,-20.33 z m 25.98,148.82 h -51.97 v -61.58 c 0,-12.51 10.18,-22.7 22.7,-22.7 h 6.58 c 12.51,0 22.7,10.18 22.7,22.7 v 61.58 z"
                            id="path14" />
                        <path
                            className="cls-21"
                            d="m 2710.78,971.93 c 11.88,-5.54 20.13,-17.59 20.13,-31.54 0,-19.18 -15.6,-34.79 -34.79,-34.79 -19.19,0 -34.79,15.6 -34.79,34.79 0,13.95 8.25,26 20.13,31.54 -14.94,4.81 -25.79,18.85 -25.79,35.37 v 76.04 h 80.89 v -76.04 c 0,-16.52 -10.84,-30.56 -25.79,-35.37 z m -14.65,-51.86 c 11.21,0 20.33,9.12 20.33,20.33 0,11.21 -9.12,20.33 -20.33,20.33 -11.21,0 -20.33,-9.12 -20.33,-20.33 0,-11.21 9.12,-20.33 20.33,-20.33 z m 25.98,148.82 h -51.97 v -61.58 c 0,-12.51 10.18,-22.7 22.7,-22.7 h 6.58 c 12.51,0 22.7,10.18 22.7,22.7 v 61.58 z"
                            id="path15" />
                    </g>
                    <g
                        id="g19"
                        style={{ display: 'inline' }}>
                        <path
                            className="cls-17"
                            d="m 1552.91,2237.2 c -27.95,0 -50.69,-22.74 -50.69,-50.69 0,-27.95 22.74,-50.69 50.69,-50.69 27.95,0 50.69,22.74 50.69,50.69 0,27.95 -22.74,50.69 -50.69,50.69 z m 0,-90.11 c -21.74,0 -39.42,17.68 -39.42,39.42 0,21.74 17.68,39.42 39.42,39.42 21.74,0 39.42,-17.68 39.42,-39.42 0,-21.74 -17.68,-39.42 -39.42,-39.42 z"
                            id="path16" />
                        <path
                            className="cls-17"
                            d="m 1721.87,2237.2 c -27.95,0 -50.69,-22.74 -50.69,-50.69 0,-27.95 22.74,-50.69 50.69,-50.69 27.95,0 50.69,22.74 50.69,50.69 0,27.95 -22.74,50.69 -50.69,50.69 z m 0,-90.11 c -21.74,0 -39.42,17.68 -39.42,39.42 0,21.74 17.68,39.42 39.42,39.42 21.74,0 39.42,-17.68 39.42,-39.42 0,-21.74 -17.68,-39.42 -39.42,-39.42 z"
                            id="path17" />
                        <path
                            className="cls-17"
                            d="m 1631.76,2192.14 h -78.85 l -4.33,-9.24 56.32,-67.58 4.33,-2.03 h 82.72 v 8.37 l 1.53,-1.44 7.75,8.18 -65.59,62.21 -3.89,1.53 z m -66.83,-11.26 h 64.58 l 59.38,-56.32 h -77.02 z"
                            id="path18" />
                        <polygon
                            className="cls-17"
                            points="1581.07,2085.14 1586.7,2079.51 1631.76,2079.51 1633.12,2090.6 1588.06,2101.86 1581.07,2096.4 "
                            id="polygon18" />
                        <rect
                            className="cls-17"
                            x="1614.67"
                            y="2089.3301"
                            width="11.26"
                            height="122.14"
                            transform="rotate(-16.23,1620.4157,2150.5217)"
                            id="rect18" />
                        <path
                            className="cls-17"
                            d="m 1719.01,2193.95 -47.34,-106.52 5.15,-7.92 h 32.58 c 8.73,0 16.46,5.56 19.23,13.85 l 1.79,5.34 -10.68,3.57 -1.78,-5.34 c -1.25,-3.68 -4.69,-6.16 -8.56,-6.16 h -23.9 l 43.83,98.6 -10.31,4.57 z"
                            id="path19" />
                        <rect
                            className="cls-17"
                            x="1620.49"
                            y="2203.4099"
                            width="33.790001"
                            height="11.26"
                            id="rect19" />
                    </g>
                    <circle
                        className="cls-41"
                        cx="1986.79"
                        cy="1502.79"
                        r="543.98999"
                        id="Calidad_de_vida_sost"
                        style={{ display: 'inline' }}
                        data-label="Calidad_de_vida_sost" />
                    <text
                        className="cls-25"
                        transform="rotate(-51.73,2044.4889,-1031.2844)"
                        id="text19"><tspan
                            x="0"
                            y="0"
                            id="tspan19">C</tspan></text>
                    <text
                        className="cls-25"
                        transform="rotate(-47.69,2144.0284,-1231.0474)"
                        id="text20"><tspan
                            x="0"
                            y="0"
                            id="tspan20">a</tspan></text>
                    <text
                        className="cls-25"
                        transform="rotate(-44.95,2217.9233,-1393.7127)"
                        id="text21"><tspan
                            x="0"
                            y="0"
                            id="tspan21">l</tspan></text>
                    <text
                        className="cls-25"
                        transform="rotate(-43.19,2273.0906,-1501.626)"
                        id="text22"><tspan
                            x="0"
                            y="0"
                            id="tspan22">i</tspan></text>
                    <text
                        className="cls-25"
                        transform="rotate(-40.2,2382.6997,-1690.9193)"
                        id="text23"><tspan
                            x="0"
                            y="0"
                            id="tspan23">d</tspan></text>
                    <text
                        className="cls-25"
                        transform="rotate(-36.24,2544.8891,-2012.3278)"
                        id="text24"><tspan
                            x="0"
                            y="0"
                            id="tspan24">a</tspan></text>
                    <text
                        className="cls-25"
                        transform="rotate(-32.3,2746.6248,-2400.2184)"
                        id="text25"><tspan
                            x="0"
                            y="0"
                            id="tspan25">d</tspan></text>
                    <text
                        className="cls-25"
                        transform="rotate(-29.37,2924.1478,-2778.3634)"
                        id="text26"><tspan
                            x="0"
                            y="0"
                            id="tspan26" /></text>
                    <text
                        className="cls-25"
                        transform="rotate(-26.45,3151.4927,-3189.8952)"
                        id="text27"><tspan
                            x="0"
                            y="0"
                            id="tspan27">d</tspan></text>
                    <text
                        className="cls-25"
                        transform="rotate(-22.47,3543.8977,-3961.6116)"
                        id="text28"><tspan
                            x="0"
                            y="0"
                            id="tspan28">e</tspan></text>
                    <text
                        className="cls-25"
                        transform="rotate(-19.75,3897.8245,-4688.5648)"
                        id="text29"><tspan
                            x="0"
                            y="0"
                            id="tspan29" /></text>
                    <text
                        className="cls-25"
                        transform="rotate(-17.17,4345.8217,-5532.8141)"
                        id="text30"><tspan
                            x="0"
                            y="0"
                            id="tspan30">v</tspan></text>
                    <text
                        className="cls-25"
                        transform="rotate(-14.55,4952.5928,-6755.4017)"
                        id="text31"><tspan
                            x="0"
                            y="0"
                            id="tspan31">i</tspan></text>
                    <text
                        className="cls-25"
                        transform="rotate(-11.57,5986.5802,-8718.5959)"
                        id="text32"><tspan
                            x="0"
                            y="0"
                            id="tspan32">d</tspan></text>
                    <text
                        className="cls-25"
                        transform="rotate(-7.61,8593.6032,-13819.45)"
                        id="text33"><tspan
                            x="0"
                            y="0"
                            id="tspan33">a</tspan></text>
                    <text
                        className="cls-25"
                        transform="rotate(-4.9,12798.186,-22136.321)"
                        id="text34"><tspan
                            x="0"
                            y="0"
                            id="tspan34" /></text>
                    <text
                        className="cls-25"
                        transform="rotate(-2.3,26154.527,-48110.48)"
                        id="text35"><tspan
                            x="0"
                            y="0"
                            id="tspan35">y</tspan></text>
                    <text
                        className="cls-25"
                        transform="rotate(0.31,-185650.46,366831.06)"
                        id="text36"><tspan
                            x="0"
                            y="0"
                            id="tspan36" /></text>
                    <text
                        className="cls-25"
                        transform="rotate(3.1,-17658.523,37392.837)"
                        id="text37"><tspan
                            x="0"
                            y="0"
                            id="tspan37">S</tspan></text>
                    <text
                        className="cls-25"
                        transform="rotate(7.02,-7229.9953,17048.117)"
                        id="text38"><tspan
                            x="0"
                            y="0"
                            id="tspan38">o</tspan></text>
                    <text
                        className="cls-25"
                        transform="rotate(10.3,-4603.4137,11953.453)"
                        id="text39"><tspan
                            x="0"
                            y="0"
                            id="tspan39">t</tspan></text>
                    <text
                        className="cls-25"
                        transform="rotate(13.38,-3303.1636,9393.1309)"
                        id="text40"><tspan
                            x="0"
                            y="0"
                            id="tspan40">e</tspan></text>
                    <text
                        className="cls-25"
                        transform="rotate(17.34,-2309.0212,7451.007)"
                        id="text41"><tspan
                            x="0"
                            y="0"
                            id="tspan41">n</tspan></text>
                    <text
                        className="cls-25"
                        transform="rotate(20.26,-1829.3641,6536.808)"
                        id="text42"><tspan
                            x="0"
                            y="0"
                            id="tspan42">i</tspan></text>
                    <text
                        className="cls-25"
                        transform="rotate(23.2,-1457.794,5793.5547)"
                        id="text43"><tspan
                            x="0"
                            y="0"
                            id="tspan43">b</tspan></text>
                    <text
                        className="cls-25"
                        transform="rotate(26.17,-1175.6743,5256.485)"
                        id="text44"><tspan
                            x="0"
                            y="0"
                            id="tspan44">i</tspan></text>
                    <text
                        className="cls-25"
                        transform="rotate(27.92,-1034.4443,4979.7659)"
                        id="text45"><tspan
                            x="0"
                            y="0"
                            id="tspan45">l</tspan></text>
                    <text
                        className="cls-25"
                        transform="rotate(29.68,-908.84246,4733.5563)"
                        id="text46"><tspan
                            x="0"
                            y="0"
                            id="tspan46">i</tspan></text>
                    <text
                        className="cls-25"
                        transform="rotate(32.68,-719.89362,4355.3564)"
                        id="text47"><tspan
                            x="0"
                            y="0"
                            id="tspan47">d</tspan></text>
                    <text
                        className="cls-25"
                        transform="rotate(36.66,-522.66941,3972.0078)"
                        id="text48"><tspan
                            x="0"
                            y="0"
                            id="tspan48">a</tspan></text>
                    <text
                        className="cls-25"
                        transform="rotate(40.65,-360.53149,3654.6539)"
                        id="text49"><tspan
                            x="0"
                            y="0"
                            id="tspan49">d</tspan></text>
                    <circle
                        className="cls-31"
                        cx="1986.79"
                        cy="1502.79"
                        r="472.85999"
                        id="Entornos_urbanos_consolidados"
                        style={{ display: 'inline' }}
                        data-label="Entornos_urbanos_consolidados" />
                    <circle
                        className="cls-23"
                        cx="1986.79"
                        cy="1502.79"
                        r="391.59"
                        id="Infraestructura_de_Desarrollo"
                        style={{ display: 'inline' }}
                        data-label="Infraestructura_de_Desarrollo" />
                    <circle
                        className="cls-27"
                        cx="1986.79"
                        cy="1502.79"
                        r="306.79999"
                        id="PDU2040"
                        style={{ display: 'inline' }}
                        data-label="PDU2040" />
                    <text
                        className="cls-2"
                        transform="translate(1185.06,1080.21)"
                        id="text63"><tspan x="0" y="0">Conservación</tspan>
                        <tspan x="64.73" y="54">y medio</tspan>
                        <tspan x="46.39" y="108">ambiente</tspan></text>
                    <g
                        id="g83"
                        style={{ display: 'inline' }}>
                        <g
                            id="g74">
                            <path
                                className="cls-63"
                                d="m 1248.62,1641.19 h 26.79 c 2.4,0 4.12,-2.06 4.12,-4.12 v -26.79 c 0,-2.4 -2.06,-4.12 -4.12,-4.12 h -26.79 c -2.4,0 -4.12,2.06 -4.12,4.12 v 26.45 c 0,2.4 2.06,4.47 4.12,4.47 z m 4.46,-27.13 h 18.2 v 18.2 h -18.2 z"
                                id="path63" />
                            <path
                                className="cls-63"
                                d="m 1248.62,1594.82 h 26.79 c 2.4,0 4.12,-2.06 4.12,-4.12 v -26.79 c 0,-2.4 -2.06,-4.12 -4.12,-4.12 h -26.79 c -2.4,0 -4.12,2.06 -4.12,4.12 v 26.79 c 0,2.06 2.06,4.12 4.12,4.12 z m 4.46,-27.13 h 18.2 v 18.2 h -18.2 z"
                                id="path64" />
                            <path
                                className="cls-63"
                                d="m 1182.67,1605.81 h -26.79 c -2.4,0 -4.12,2.06 -4.12,4.12 v 26.79 c 0,2.4 2.06,4.12 4.12,4.12 h 26.79 c 2.4,0 4.12,-2.06 4.12,-4.12 v -26.79 c 0.34,-2.4 -1.72,-4.12 -4.12,-4.12 z m -4.12,26.79 h -18.2 v -18.2 h 18.2 z"
                                id="path65" />
                            <path
                                className="cls-63"
                                d="m 1202.25,1594.82 h 26.79 c 2.4,0 4.12,-2.06 4.12,-4.12 v -26.79 c 0,-2.4 -2.06,-4.12 -4.12,-4.12 h -26.79 c -2.4,0 -4.12,2.06 -4.12,4.12 v 26.79 c 0,2.06 1.72,4.12 4.12,4.12 z m 4.46,-27.13 h 18.2 v 18.2 h -18.2 z"
                                id="path66" />
                            <path
                                className="cls-63"
                                d="m 1182.67,1559.1 h -26.79 c -2.4,0 -4.12,2.06 -4.12,4.12 v 26.79 c 0,2.4 2.06,4.12 4.12,4.12 h 26.79 c 2.4,0 4.12,-2.06 4.12,-4.12 v -26.79 c 0.34,-2.06 -1.72,-4.12 -4.12,-4.12 z m -4.12,27.13 h -18.2 v -18.2 h 18.2 z"
                                id="path67" />
                            <path
                                className="cls-63"
                                d="m 1248.62,1548.11 h 26.79 c 2.4,0 4.12,-2.06 4.12,-4.12 v -26.79 c 0,-2.4 -2.06,-4.12 -4.12,-4.12 h -26.79 c -2.4,0 -4.12,2.06 -4.12,4.12 v 26.79 c 0,2.4 2.06,4.12 4.12,4.12 z m 4.46,-26.79 h 18.2 v 18.2 h -18.2 z"
                                id="path68" />
                            <path
                                className="cls-63"
                                d="m 1202.25,1548.11 h 26.79 c 2.4,0 4.12,-2.06 4.12,-4.12 v -26.79 c 0,-2.4 -2.06,-4.12 -4.12,-4.12 h -26.79 c -2.4,0 -4.12,2.06 -4.12,4.12 v 26.79 c 0,2.4 1.72,4.12 4.12,4.12 z m 4.46,-26.79 h 18.2 v 18.2 h -18.2 z"
                                id="path69" />
                            <path
                                className="cls-63"
                                d="m 1202.25,1641.19 h 26.79 c 2.4,0 4.12,-2.06 4.12,-4.12 v -26.79 c 0,-2.4 -2.06,-4.12 -4.12,-4.12 h -26.79 c -2.4,0 -4.12,2.06 -4.12,4.12 v 26.45 c 0,2.4 1.72,4.47 4.12,4.47 z m 4.46,-27.13 h 18.2 v 18.2 h -18.2 z"
                                id="path70" />
                            <path
                                className="cls-63"
                                d="m 1248.62,1687.56 h 26.79 c 2.4,0 4.12,-2.06 4.12,-4.12 v -26.79 c 0,-2.4 -2.06,-4.12 -4.12,-4.12 h -26.79 c -2.4,0 -4.12,2.06 -4.12,4.12 v 26.79 c 0,2.06 2.06,4.12 4.12,4.12 z m 4.46,-26.79 h 18.2 v 18.2 h -18.2 z"
                                id="path71" />
                            <path
                                className="cls-63"
                                d="m 1182.67,1512.73 h -26.79 c -2.4,0 -4.12,2.06 -4.12,4.12 v 27.13 c 0,2.4 2.06,4.12 4.12,4.12 h 26.79 c 2.4,0 4.12,-2.06 4.12,-4.12 v -26.79 c 0.34,-2.4 -1.72,-4.47 -4.12,-4.47 z m -4.12,26.79 h -18.2 v -18.2 h 18.2 z"
                                id="path72" />
                            <path
                                className="cls-63"
                                d="m 1182.67,1652.18 h -26.79 c -2.4,0 -4.12,2.06 -4.12,4.12 v 26.79 c 0,2.4 2.06,4.12 4.12,4.12 h 26.79 c 2.4,0 4.12,-2.06 4.12,-4.12 v -26.79 c 0.34,-2.4 -1.72,-4.12 -4.12,-4.12 z m -4.12,26.79 h -18.2 v -18.2 h 18.2 z"
                                id="path73" />
                            <path
                                className="cls-63"
                                d="m 1135.98,1704.73 h -16.83 c -2.4,0 -4.12,2.06 -4.12,4.12 0,2.4 2.06,4.12 4.12,4.12 h 196.71 c 2.4,0 4.12,-2.06 4.12,-4.12 0.34,-2.4 -1.72,-4.12 -3.78,-4.12 h -10.57 v -207.11 c 0,-7.21 -5.84,-12.71 -12.71,-12.71 H 1138.7 c -7.21,0 -12.71,5.84 -12.71,12.71 v 207.11 m 8.6,-207.11 c 0,-2.4 2.06,-4.12 4.12,-4.12 h 153.87 c 2.4,0 4.12,2.06 4.12,4.12 v 207.11 h -63.2 v -48.09 c 0,-2.4 -2.06,-4.12 -4.12,-4.12 h -26.79 c -2.4,0 -4.12,2.06 -4.12,4.12 v 48.09 h -63.88 z m 90.33,207.11 h -18.2 v -43.96 h 18.2 z"
                                id="path74" />
                        </g>
                        <text
                            className="cls-12"
                            transform="translate(1094.2,1780.57)"
                            id="text83">
                            <tspan x="0" y="0">Estructura</tspan>
                            <tspan x="0" y="54">Urbana</tspan>
                        </text>
                    </g>
                    <text
                        className="cls-9"
                        transform="translate(2487.94,1159.77)"
                        id="text88"><tspan x="0" y="0">Población</tspan>
                    </text>
                    <text
                        className="cls-7"
                        transform="translate(2590.65,1777.55)"
                        id="text104">
                        <tspan x="0" y="0">Servicios</tspan>
                        <tspan x="-14.96" y="54">públicos e</tspan>
                        <tspan x="-70.85" y="108">infraestructura</tspan>
                    </text>
                    <text
                        className="cls-4"
                        transform="translate(1492.4,2289.2)"
                        id="text114"><tspan x="0" y="0">Accesibilidad</tspan>
                        <tspan x="22.68" y="54">y Movilidad</tspan></text>
                    <text
                        className="cls-3"
                        transform="translate(2153.82,2327.64)"
                        id="text120"><tspan x="0" y="0">Equipamiento</tspan></text>
                    <text
                        className="cls-5"
                        transform="translate(1875.18,850.71)"
                        id="text125"><tspan x="0" y="0">Economía</tspan></text>
                    <g
                        id="g128"
                        style={{ display: 'inline' }}>
                        <text
                            className="cls-29"
                            transform="translate(1819.38,1604.73)"
                            id="text126"><tspan
                                x="0"
                                y="0"
                                id="tspan126">2040</tspan></text>
                        <text
                            className="cls-30"
                            transform="translate(1816.68,1482.59)"
                            id="text128"><tspan
                                className="cls-59"
                                x="0"
                                y="0"
                                id="tspan127">P</tspan><tspan
                                    className="cls-40"
                                    x="106.44"
                                    y="0"
                                    id="tspan128">DU</tspan></text>
                    </g>
                    <text
                        className="cls-26"
                        transform="rotate(-33.13,2820.2749,-2349.5155)"
                        id="text129"><tspan
                            x="0"
                            y="0"
                            id="tspan129">E</tspan></text>
                    <text
                        className="cls-26"
                        transform="rotate(-28.45,3135.7223,-2922.4247)"
                        id="text130"><tspan
                            x="0"
                            y="0"
                            id="tspan130">n</tspan></text>
                    <text
                        className="cls-26"
                        transform="rotate(-24.63,3476.3979,-3563.5901)"
                        id="text131"><tspan
                            x="0"
                            y="0"
                            id="tspan131">t</tspan></text>
                    <text
                        className="cls-26"
                        transform="rotate(-21.09,3907.3372,-4329.7532)"
                        id="text132"><tspan
                            x="0"
                            y="0"
                            id="tspan132">o</tspan></text>
                    <text
                        className="cls-26"
                        transform="rotate(-17.44,4525.4081,-5478.8627)"
                        id="text133"><tspan
                            x="0"
                            y="0"
                            id="tspan133">r</tspan></text>
                    <text
                        className="cls-26"
                        transform="rotate(-13.7,5505.0671,-7232.8129)"
                        id="text134"><tspan
                            x="0"
                            y="0"
                            id="tspan134">n</tspan></text>
                    <text
                        className="cls-26"
                        transform="rotate(-9.15,7761.6695,-11347.186)"
                        id="text135"><tspan
                            x="0"
                            y="0"
                            id="tspan135">o</tspan></text>
                    <text
                        className="cls-26"
                        transform="rotate(-5.21,12889.358,-20725.506)"
                        id="text136"><tspan
                            x="0"
                            y="0"
                            id="tspan136">s</tspan></text>
                    <text
                        className="cls-26"
                        transform="rotate(-2.54,25396.899,-43686.058)"
                        id="text137"><tspan
                            x="0"
                            y="0"
                            id="tspan137" /></text>
                    <text
                        className="cls-26"
                        transform="rotate(1.1,-55345.788,103384.06)"
                        id="text138"><tspan
                            x="0"
                            y="0"
                            id="tspan138">U</tspan></text>
                    <text
                        className="cls-26"
                        transform="rotate(5.22,-10867.756,22638.681)"
                        id="text139"><tspan
                            x="0"
                            y="0"
                            id="tspan139">r</tspan></text>
                    <text
                        className="cls-26"
                        transform="rotate(8.94,-5917.2858,13558.458)"
                        id="text140"><tspan
                            x="0"
                            y="0"
                            id="tspan140">b</tspan></text>
                    <text
                        className="cls-26"
                        transform="rotate(13.31,-3634.9558,9411.0134)"
                        id="text141"><tspan
                            x="0"
                            y="0"
                            id="tspan141">a</tspan></text>
                    <text
                        className="cls-26"
                        transform="rotate(17.73,-2465.8894,7275.8713)"
                        id="text142"><tspan
                            x="0"
                            y="0"
                            id="tspan142">n</tspan></text>
                    <text
                        className="cls-26"
                        transform="rotate(22.3,-1742.6666,5960.7269)"
                        id="text143"><tspan
                            x="0"
                            y="0"
                            id="tspan143">o</tspan></text>
                    <text
                        className="cls-26"
                        transform="rotate(26.28,-1316.9938,5189.2951)"
                        id="text144"><tspan
                            x="0"
                            y="0"
                            id="tspan144">s</tspan></text>
                    <text
                        className="cls-26"
                        transform="rotate(28.99,-1095.1817,4790.6081)"
                        id="text145"><tspan
                            x="0"
                            y="0"
                            id="tspan145" /></text>
                    <text
                        className="cls-26"
                        transform="rotate(32.42,-857.71681,4346.6137)"
                        id="text146"><tspan
                            x="0"
                            y="0"
                            id="tspan146">C</tspan></text>
                    <text
                        className="cls-26"
                        transform="rotate(36.95,-617.00771,3909.6653)"
                        id="text147"><tspan
                            x="0"
                            y="0"
                            id="tspan147">o</tspan></text>
                    <text
                        className="cls-26"
                        transform="rotate(41.49,-425.69472,3560.7804)"
                        id="text148"><tspan
                            x="0"
                            y="0"
                            id="tspan148">n</tspan></text>
                    <text
                        className="cls-26"
                        transform="rotate(44.7,-318.83517,3369.541)"
                        id="text149"><tspan
                            x="0"
                            y="0"
                            id="tspan149">s</tspan></text>
                    <text
                        className="cls-26"
                        transform="rotate(49.42,-174.06925,3103.2133)"
                        id="text150"><tspan
                            x="0"
                            y="0"
                            id="tspan150">o</tspan></text>
                    <text
                        className="cls-26"
                        transform="rotate(52.59,-97.879718,2965.4172)"
                        id="text151"><tspan
                            x="0"
                            y="0"
                            id="tspan151">l</tspan></text>
                    <text
                        className="cls-26"
                        transform="rotate(54.55,-52.2803,2882.0216)"
                        id="text152"><tspan
                            x="0"
                            y="0"
                            id="tspan152">i</tspan></text>
                    <text
                        className="cls-26"
                        transform="rotate(57.9,24.225824,2742.1646)"
                        id="text153"><tspan
                            x="0"
                            y="0"
                            id="tspan153">d</tspan></text>
                    <text
                        className="cls-26"
                        transform="rotate(62.35,107.12333,2591.1177)"
                        id="text154"><tspan
                            x="0"
                            y="0"
                            id="tspan154">a</tspan></text>
                    <text
                        className="cls-26"
                        transform="rotate(66.81,182.15955,2454.7449)"
                        id="text155"><tspan
                            x="0"
                            y="0"
                            id="tspan155">d</tspan></text>
                    <text
                        className="cls-26"
                        transform="rotate(71.39,248.96609,2332.9065)"
                        id="text156"><tspan
                            x="0"
                            y="0"
                            id="tspan156">o</tspan></text>
                    <text
                        className="cls-26"
                        transform="rotate(75.35,299.67644,2239.6391)"
                        id="text157"><tspan
                            x="0"
                            y="0"
                            id="tspan157">s</tspan></text>
                    <text
                        className="cls-24"
                        transform="rotate(-53.67,2153.2841,-1037.9569)"
                        id="text158"><tspan
                            x="0"
                            y="0"
                            id="tspan158">I</tspan></text>
                    <text
                        className="cls-24"
                        transform="rotate(-49.39,2273.7287,-1223.6806)"
                        id="text159"><tspan
                            x="0"
                            y="0"
                            id="tspan159">n</tspan></text>
                    <text
                        className="cls-24"
                        transform="rotate(-44.89,2413.5464,-1475.9547)"
                        id="text160"><tspan
                            x="0"
                            y="0"
                            id="tspan160">f</tspan></text>
                    <text
                        className="cls-24"
                        transform="rotate(-41.52,2541.3621,-1688.7901)"
                        id="text161"><tspan
                            x="0"
                            y="0"
                            id="tspan161">r</tspan></text>
                    <text
                        className="cls-24"
                        transform="rotate(-37.5,2723.8393,-1985.7002)"
                        id="text162"><tspan
                            x="0"
                            y="0"
                            id="tspan162">a</tspan></text>
                    <text
                        className="cls-24"
                        transform="rotate(-32.22,3026.1381,-2493.6928)"
                        id="text163"><tspan
                            x="0"
                            y="0"
                            id="tspan163">e</tspan></text>
                    <text
                        className="cls-24"
                        transform="rotate(-27.36,3402.6477,-3135.8592)"
                        id="text164"><tspan
                            x="0"
                            y="0"
                            id="tspan164">s</tspan></text>
                    <text
                        className="cls-24"
                        transform="rotate(-23.37,3826.5854,-3858.6147)"
                        id="text165"><tspan
                            x="0"
                            y="0"
                            id="tspan165">t</tspan></text>
                    <text
                        className="cls-24"
                        transform="rotate(-19.78,4353.1304,-4748.5691)"
                        id="text166"><tspan
                            x="0"
                            y="0"
                            id="tspan166">r</tspan></text>
                    <text
                        className="cls-24"
                        transform="rotate(-15.09,5417.5449,-6515.9359)"
                        id="text167"><tspan
                            x="0"
                            y="0"
                            id="tspan167">u</tspan></text>
                    <text
                        className="cls-24"
                        transform="rotate(-9.73,7871.6728,-10667.151)"
                        id="text168"><tspan
                            x="0"
                            y="0"
                            id="tspan168">c</tspan></text>
                    <text
                        className="cls-24"
                        transform="rotate(-5.41,13376.62,-19996.847)"
                        id="text169"><tspan
                            x="0"
                            y="0"
                            id="tspan169">t</tspan></text>
                    <text
                        className="cls-24"
                        transform="rotate(-0.7,96734.351,-160305.36)"
                        id="text170"><tspan
                            x="0"
                            y="0"
                            id="tspan170">u</tspan></text>
                    <text
                        className="cls-24"
                        transform="rotate(4.01,-15705.78,29146.904)"
                        id="text171"><tspan
                            x="0"
                            y="0"
                            id="tspan171">r</tspan></text>
                    <text
                        className="cls-24"
                        transform="rotate(8.02,-7340.7756,14980.114)"
                        id="text172"><tspan
                            x="0"
                            y="0"
                            id="tspan172">a</tspan></text>
                    <text
                        className="cls-24"
                        transform="rotate(11.81,-4657.0505,10489.542)"
                        id="text173"><tspan
                            x="0"
                            y="0"
                            id="tspan173" /></text>
                    <text
                        className="cls-24"
                        transform="rotate(15.96,-3169.1776,7941.4832)"
                        id="text174"><tspan
                            x="0"
                            y="0"
                            id="tspan174">d</tspan></text>
                    <text
                        className="cls-24"
                        transform="rotate(21.59,-2065.4805,6085.7398)"
                        id="text175"><tspan
                            x="0"
                            y="0"
                            id="tspan175">e</tspan></text>
                    <text
                        className="cls-24"
                        transform="rotate(25.43,-1594.6508,5304.3364)"
                        id="text176"><tspan
                            x="0"
                            y="0"
                            id="tspan176" /></text>
                    <text
                        className="cls-24"
                        transform="rotate(30.13,-1168.5495,4568.9049)"
                        id="text177"><tspan
                            x="0"
                            y="0"
                            id="tspan177">D</tspan></text>
                    <text
                        className="cls-24"
                        transform="rotate(36.24,-785.92528,3930.0427)"
                        id="text178"><tspan
                            x="0"
                            y="0"
                            id="tspan178">e</tspan></text>
                    <text
                        className="cls-24"
                        transform="rotate(41.07,-561.45887,3553.2265)"
                        id="text179"><tspan
                            x="0"
                            y="0"
                            id="tspan179">s</tspan></text>
                    <text
                        className="cls-24"
                        transform="rotate(45.86,-381.3594,3248.4734)"
                        id="text180"><tspan
                            x="0"
                            y="0"
                            id="tspan180">a</tspan></text>
                    <text
                        className="cls-24"
                        transform="rotate(50.28,-247.38131,3023.6565)"
                        id="text181"><tspan
                            x="0"
                            y="0"
                            id="tspan181">r</tspan></text>
                    <text
                        className="cls-24"
                        transform="rotate(53.83,-153.11241,2864.3448)"
                        id="text182"><tspan
                            x="0"
                            y="0"
                            id="tspan182">r</tspan></text>
                    <text
                        className="cls-24"
                        transform="rotate(58.31,-46.509794,2683.8989)"
                        id="text183"><tspan
                            x="0"
                            y="0"
                            id="tspan183">o</tspan></text>
                    <text
                        className="cls-24"
                        transform="rotate(62.3,29.71389,2555.3362)"
                        id="text184"><tspan
                            x="0"
                            y="0"
                            id="tspan184">l</tspan></text>
                    <text
                        className="cls-24"
                        transform="rotate(64.75,74.857628,2478.9115)"
                        id="text185"><tspan
                            x="0"
                            y="0"
                            id="tspan185">l</tspan></text>
                    <text
                        className="cls-24"
                        transform="rotate(68.73,146.57482,2358.5591)"
                        id="text186"><tspan
                            x="0"
                            y="0"
                            id="tspan186">o</tspan></text>
                    <text
                        className="cls-25"
                        transform="rotate(-51.73,2044.4889,-1031.2844)"
                        id="text187"><tspan
                            x="0"
                            y="0"
                            id="tspan187">C</tspan></text>
                    <text
                        className="cls-25"
                        transform="rotate(-47.69,2144.0284,-1231.0474)"
                        id="text188"><tspan
                            x="0"
                            y="0"
                            id="tspan188">a</tspan></text>
                    <text
                        className="cls-25"
                        transform="rotate(-44.95,2217.9233,-1393.7127)"
                        id="text189"><tspan
                            x="0"
                            y="0"
                            id="tspan189">l</tspan></text>
                    <text
                        className="cls-25"
                        transform="rotate(-43.19,2273.0906,-1501.626)"
                        id="text190"><tspan
                            x="0"
                            y="0"
                            id="tspan190">i</tspan></text>
                    <text
                        className="cls-25"
                        transform="rotate(-40.2,2382.6997,-1690.9193)"
                        id="text191"><tspan
                            x="0"
                            y="0"
                            id="tspan191">d</tspan></text>
                    <text
                        className="cls-25"
                        transform="rotate(-36.24,2544.8891,-2012.3278)"
                        id="text192"><tspan
                            x="0"
                            y="0"
                            id="tspan192">a</tspan></text>
                    <text
                        className="cls-25"
                        transform="rotate(-32.3,2746.6248,-2400.2184)"
                        id="text193"><tspan
                            x="0"
                            y="0"
                            id="tspan193">d</tspan></text>
                    <text
                        className="cls-25"
                        transform="rotate(-29.37,2924.1478,-2778.3634)"
                        id="text194"><tspan
                            x="0"
                            y="0"
                            id="tspan194" /></text>
                    <text
                        className="cls-25"
                        transform="rotate(-26.45,3151.4927,-3189.8952)"
                        id="text195"><tspan
                            x="0"
                            y="0"
                            id="tspan195">d</tspan></text>
                    <text
                        className="cls-25"
                        transform="rotate(-22.47,3543.8977,-3961.6116)"
                        id="text196"><tspan
                            x="0"
                            y="0"
                            id="tspan196">e</tspan></text>
                    <text
                        className="cls-25"
                        transform="rotate(-19.75,3897.8245,-4688.5648)"
                        id="text197"><tspan
                            x="0"
                            y="0"
                            id="tspan197" /></text>
                    <text
                        className="cls-25"
                        transform="rotate(-17.17,4345.8217,-5532.8141)"
                        id="text198"><tspan
                            x="0"
                            y="0"
                            id="tspan198">v</tspan></text>
                    <text
                        className="cls-25"
                        transform="rotate(-14.55,4952.5928,-6755.4017)"
                        id="text199"><tspan
                            x="0"
                            y="0"
                            id="tspan199">i</tspan></text>
                    <text
                        className="cls-25"
                        transform="rotate(-11.57,5986.5802,-8718.5959)"
                        id="text200"><tspan
                            x="0"
                            y="0"
                            id="tspan200">d</tspan></text>
                    <text
                        className="cls-25"
                        transform="rotate(-7.61,8593.6032,-13819.45)"
                        id="text201"><tspan
                            x="0"
                            y="0"
                            id="tspan201">a</tspan></text>
                    <text
                        className="cls-25"
                        transform="rotate(-4.9,12798.186,-22136.321)"
                        id="text202"><tspan
                            x="0"
                            y="0"
                            id="tspan202" /></text>
                    <text
                        className="cls-25"
                        transform="rotate(-2.3,26154.527,-48110.48)"
                        id="text203"><tspan
                            x="0"
                            y="0"
                            id="tspan203">y</tspan></text>
                    <text
                        className="cls-25"
                        transform="rotate(0.31,-185650.46,366831.06)"
                        id="text204"><tspan
                            x="0"
                            y="0"
                            id="tspan204" /></text>
                    <text
                        className="cls-25"
                        transform="rotate(3.1,-17658.523,37392.837)"
                        id="text205"><tspan
                            x="0"
                            y="0"
                            id="tspan205">S</tspan></text>
                    <text
                        className="cls-25"
                        transform="rotate(7.02,-7229.9953,17048.117)"
                        id="text206"><tspan
                            x="0"
                            y="0"
                            id="tspan206">o</tspan></text>
                    <text
                        className="cls-25"
                        transform="rotate(10.3,-4603.4137,11953.453)"
                        id="text207"><tspan
                            x="0"
                            y="0"
                            id="tspan207">t</tspan></text>
                    <text
                        className="cls-25"
                        transform="rotate(13.38,-3303.1636,9393.1309)"
                        id="text208"><tspan
                            x="0"
                            y="0"
                            id="tspan208">e</tspan></text>
                    <text
                        className="cls-25"
                        transform="rotate(17.34,-2309.0212,7451.007)"
                        id="text209"><tspan
                            x="0"
                            y="0"
                            id="tspan209">n</tspan></text>
                    <text
                        className="cls-25"
                        transform="rotate(20.26,-1829.3641,6536.808)"
                        id="text210"><tspan
                            x="0"
                            y="0"
                            id="tspan210">i</tspan></text>
                    <text
                        className="cls-25"
                        transform="rotate(23.2,-1457.794,5793.5547)"
                        id="text211"><tspan
                            x="0"
                            y="0"
                            id="tspan211">b</tspan></text>
                    <text
                        className="cls-25"
                        transform="rotate(26.17,-1175.6743,5256.485)"
                        id="text212"><tspan
                            x="0"
                            y="0"
                            id="tspan212">i</tspan></text>
                    <text
                        className="cls-25"
                        transform="rotate(27.92,-1034.4443,4979.7659)"
                        id="text213"><tspan
                            x="0"
                            y="0"
                            id="tspan213">l</tspan></text>
                    <text
                        className="cls-25"
                        transform="rotate(29.68,-908.84246,4733.5563)"
                        id="text214"><tspan
                            x="0"
                            y="0"
                            id="tspan214">i</tspan></text>
                    <text
                        className="cls-25"
                        transform="rotate(32.68,-719.89362,4355.3564)"
                        id="text215"><tspan
                            x="0"
                            y="0"
                            id="tspan215">d</tspan></text>
                    <text
                        className="cls-25"
                        transform="rotate(36.66,-522.66941,3972.0078)"
                        id="text216"><tspan
                            x="0"
                            y="0"
                            id="tspan216">a</tspan></text>
                    <text
                        className="cls-25"
                        transform="rotate(40.65,-360.53149,3654.6539)"
                        id="text217"><tspan
                            x="0"
                            y="0"
                            id="tspan217">d</tspan></text>
                    <text
                        className="cls-26"
                        transform="rotate(-33.13,2820.2749,-2349.5155)"
                        id="text218"><tspan
                            x="0"
                            y="0"
                            id="tspan218">E</tspan></text>
                    <text
                        className="cls-26"
                        transform="rotate(-28.45,3135.7223,-2922.4247)"
                        id="text219"><tspan
                            x="0"
                            y="0"
                            id="tspan219">n</tspan></text>
                    <text
                        className="cls-26"
                        transform="rotate(-24.63,3476.3979,-3563.5901)"
                        id="text220"><tspan
                            x="0"
                            y="0"
                            id="tspan220">t</tspan></text>
                    <text
                        className="cls-26"
                        transform="rotate(-21.09,3907.3372,-4329.7532)"
                        id="text221"><tspan
                            x="0"
                            y="0"
                            id="tspan221">o</tspan></text>
                    <text
                        className="cls-26"
                        transform="rotate(-17.44,4525.4081,-5478.8627)"
                        id="text222"><tspan
                            x="0"
                            y="0"
                            id="tspan222">r</tspan></text>
                    <text
                        className="cls-26"
                        transform="rotate(-13.7,5505.0671,-7232.8129)"
                        id="text223"><tspan
                            x="0"
                            y="0"
                            id="tspan223">n</tspan></text>
                    <text
                        className="cls-26"
                        transform="rotate(-9.15,7761.6695,-11347.186)"
                        id="text224"><tspan
                            x="0"
                            y="0"
                            id="tspan224">o</tspan></text>
                    <text
                        className="cls-26"
                        transform="rotate(-5.21,12889.358,-20725.506)"
                        id="text225"><tspan
                            x="0"
                            y="0"
                            id="tspan225">s</tspan></text>
                    <text
                        className="cls-26"
                        transform="rotate(-2.54,25396.899,-43686.058)"
                        id="text226"><tspan
                            x="0"
                            y="0"
                            id="tspan226" /></text>
                    <text
                        className="cls-26"
                        transform="rotate(1.1,-55345.788,103384.06)"
                        id="text227"><tspan
                            x="0"
                            y="0"
                            id="tspan227">U</tspan></text>
                    <text
                        className="cls-26"
                        transform="rotate(5.22,-10867.756,22638.681)"
                        id="text228"><tspan
                            x="0"
                            y="0"
                            id="tspan228">r</tspan></text>
                    <text
                        className="cls-26"
                        transform="rotate(8.94,-5917.2858,13558.458)"
                        id="text229"><tspan
                            x="0"
                            y="0"
                            id="tspan229">b</tspan></text>
                    <text
                        className="cls-26"
                        transform="rotate(13.31,-3634.9558,9411.0134)"
                        id="text230"><tspan
                            x="0"
                            y="0"
                            id="tspan230">a</tspan></text>
                    <text
                        className="cls-26"
                        transform="rotate(17.73,-2465.8894,7275.8713)"
                        id="text231"><tspan
                            x="0"
                            y="0"
                            id="tspan231">n</tspan></text>
                    <text
                        className="cls-26"
                        transform="rotate(22.3,-1742.6666,5960.7269)"
                        id="text232"><tspan
                            x="0"
                            y="0"
                            id="tspan232">o</tspan></text>
                    <text
                        className="cls-26"
                        transform="rotate(26.28,-1316.9938,5189.2951)"
                        id="text233"><tspan
                            x="0"
                            y="0"
                            id="tspan233">s</tspan></text>
                    <text
                        className="cls-26"
                        transform="rotate(28.99,-1095.1817,4790.6081)"
                        id="text234"><tspan
                            x="0"
                            y="0"
                            id="tspan234" /></text>
                    <text
                        className="cls-26"
                        transform="rotate(32.42,-857.71681,4346.6137)"
                        id="text235"><tspan
                            x="0"
                            y="0"
                            id="tspan235">C</tspan></text>
                    <text
                        className="cls-26"
                        transform="rotate(36.95,-617.00771,3909.6653)"
                        id="text236"><tspan
                            x="0"
                            y="0"
                            id="tspan236">o</tspan></text>
                    <text
                        className="cls-26"
                        transform="rotate(41.49,-425.69472,3560.7804)"
                        id="text237"><tspan
                            x="0"
                            y="0"
                            id="tspan237">n</tspan></text>
                    <text
                        className="cls-26"
                        transform="rotate(44.7,-318.83517,3369.541)"
                        id="text238"><tspan
                            x="0"
                            y="0"
                            id="tspan238">s</tspan></text>
                    <text
                        className="cls-26"
                        transform="rotate(49.42,-174.06925,3103.2133)"
                        id="text239"><tspan
                            x="0"
                            y="0"
                            id="tspan239">o</tspan></text>
                    <text
                        className="cls-26"
                        transform="rotate(52.59,-97.879718,2965.4172)"
                        id="text240"><tspan
                            x="0"
                            y="0"
                            id="tspan240">l</tspan></text>
                    <text
                        className="cls-26"
                        transform="rotate(54.55,-52.2803,2882.0216)"
                        id="text241"><tspan
                            x="0"
                            y="0"
                            id="tspan241">i</tspan></text>
                    <text
                        className="cls-26"
                        transform="rotate(57.9,24.225824,2742.1646)"
                        id="text242"><tspan
                            x="0"
                            y="0"
                            id="tspan242">d</tspan></text>
                    <text
                        className="cls-26"
                        transform="rotate(62.35,107.12333,2591.1177)"
                        id="text243"><tspan
                            x="0"
                            y="0"
                            id="tspan243">a</tspan></text>
                    <text
                        className="cls-26"
                        transform="rotate(66.81,182.15955,2454.7449)"
                        id="text244"><tspan
                            x="0"
                            y="0"
                            id="tspan244">d</tspan></text>
                    <text
                        className="cls-26"
                        transform="rotate(71.39,248.96609,2332.9065)"
                        id="text245"><tspan
                            x="0"
                            y="0"
                            id="tspan245">o</tspan></text>
                    <text
                        className="cls-26"
                        transform="rotate(75.35,299.67644,2239.6391)"
                        id="text246"><tspan
                            x="0"
                            y="0"
                            id="tspan246">s</tspan></text>
                    <text
                        className="cls-24"
                        transform="rotate(-53.67,2153.2841,-1037.9569)"
                        id="text247"><tspan
                            x="0"
                            y="0"
                            id="tspan247">I</tspan></text>
                    <text
                        className="cls-24"
                        transform="rotate(-49.39,2273.7287,-1223.6806)"
                        id="text248"><tspan
                            x="0"
                            y="0"
                            id="tspan248">n</tspan></text>
                    <text
                        className="cls-24"
                        transform="rotate(-44.89,2413.5464,-1475.9547)"
                        id="text249"><tspan
                            x="0"
                            y="0"
                            id="tspan249">f</tspan></text>
                    <text
                        className="cls-24"
                        transform="rotate(-41.52,2541.3621,-1688.7901)"
                        id="text250"><tspan
                            x="0"
                            y="0"
                            id="tspan250">r</tspan></text>
                    <text
                        className="cls-24"
                        transform="rotate(-37.5,2723.8393,-1985.7002)"
                        id="text251"><tspan
                            x="0"
                            y="0"
                            id="tspan251">a</tspan></text>
                    <text
                        className="cls-24"
                        transform="rotate(-32.22,3026.1381,-2493.6928)"
                        id="text252"><tspan
                            x="0"
                            y="0"
                            id="tspan252">e</tspan></text>
                    <text
                        className="cls-24"
                        transform="rotate(-27.36,3402.6477,-3135.8592)"
                        id="text253"><tspan
                            x="0"
                            y="0"
                            id="tspan253">s</tspan></text>
                    <text
                        className="cls-24"
                        transform="rotate(-23.37,3826.5854,-3858.6147)"
                        id="text254"><tspan
                            x="0"
                            y="0"
                            id="tspan254">t</tspan></text>
                    <text
                        className="cls-24"
                        transform="rotate(-19.78,4353.1304,-4748.5691)"
                        id="text255"><tspan
                            x="0"
                            y="0"
                            id="tspan255">r</tspan></text>
                    <text
                        className="cls-24"
                        transform="rotate(-15.09,5417.5449,-6515.9359)"
                        id="text256"><tspan
                            x="0"
                            y="0"
                            id="tspan256">u</tspan></text>
                    <text
                        className="cls-24"
                        transform="rotate(-9.73,7871.6728,-10667.151)"
                        id="text257"><tspan
                            x="0"
                            y="0"
                            id="tspan257">c</tspan></text>
                    <text
                        className="cls-24"
                        transform="rotate(-5.41,13376.62,-19996.847)"
                        id="text258"><tspan
                            x="0"
                            y="0"
                            id="tspan258">t</tspan></text>
                    <text
                        className="cls-24"
                        transform="rotate(-0.7,96734.351,-160305.36)"
                        id="text259"><tspan
                            x="0"
                            y="0"
                            id="tspan259">u</tspan></text>
                    <text
                        className="cls-24"
                        transform="rotate(4.01,-15705.78,29146.904)"
                        id="text260"><tspan
                            x="0"
                            y="0"
                            id="tspan260">r</tspan></text>
                    <text
                        className="cls-24"
                        transform="rotate(8.02,-7340.7756,14980.114)"
                        id="text261"><tspan
                            x="0"
                            y="0"
                            id="tspan261">a</tspan></text>
                    <text
                        className="cls-24"
                        transform="rotate(11.81,-4657.0505,10489.542)"
                        id="text262"><tspan
                            x="0"
                            y="0"
                            id="tspan262" /></text>
                    <text
                        className="cls-24"
                        transform="rotate(15.96,-3169.1776,7941.4832)"
                        id="text263"><tspan
                            x="0"
                            y="0"
                            id="tspan263">d</tspan></text>
                    <text
                        className="cls-24"
                        transform="rotate(21.59,-2065.4805,6085.7398)"
                        id="text264"><tspan
                            x="0"
                            y="0"
                            id="tspan264">e</tspan></text>
                    <text
                        className="cls-24"
                        transform="rotate(25.43,-1594.6508,5304.3364)"
                        id="text265"><tspan
                            x="0"
                            y="0"
                            id="tspan265" /></text>
                    <text
                        className="cls-24"
                        transform="rotate(30.13,-1168.5495,4568.9049)"
                        id="text266"><tspan
                            x="0"
                            y="0"
                            id="tspan266">D</tspan></text>
                    <text
                        className="cls-24"
                        transform="rotate(36.24,-785.92528,3930.0427)"
                        id="text267"><tspan
                            x="0"
                            y="0"
                            id="tspan267">e</tspan></text>
                    <text
                        className="cls-24"
                        transform="rotate(41.07,-561.45887,3553.2265)"
                        id="text268"><tspan
                            x="0"
                            y="0"
                            id="tspan268">s</tspan></text>
                    <text
                        className="cls-24"
                        transform="rotate(45.86,-381.3594,3248.4734)"
                        id="text269"><tspan
                            x="0"
                            y="0"
                            id="tspan269">a</tspan></text>
                    <text
                        className="cls-24"
                        transform="rotate(50.28,-247.38131,3023.6565)"
                        id="text270"><tspan
                            x="0"
                            y="0"
                            id="tspan270">r</tspan></text>
                    <text
                        className="cls-24"
                        transform="rotate(53.83,-153.11241,2864.3448)"
                        id="text271"><tspan
                            x="0"
                            y="0"
                            id="tspan271">r</tspan></text>
                    <text
                        className="cls-24"
                        transform="rotate(58.31,-46.509794,2683.8989)"
                        id="text272"><tspan
                            x="0"
                            y="0"
                            id="tspan272">o</tspan></text>
                    <text
                        className="cls-24"
                        transform="rotate(62.3,29.71389,2555.3362)"
                        id="text273"><tspan
                            x="0"
                            y="0"
                            id="tspan273">l</tspan></text>
                    <text
                        className="cls-24"
                        transform="rotate(64.75,74.857628,2478.9115)"
                        id="text274"><tspan
                            x="0"
                            y="0"
                            id="tspan274">l</tspan></text>
                    <text
                        className="cls-24"
                        transform="rotate(68.73,146.57482,2358.5591)"
                        id="text275"><tspan
                            x="0"
                            y="0"
                            id="tspan275">o</tspan></text>
                    <g
                        id="g286"
                        style={{ display: 'inline' }}>
                        <g
                            id="g276"
                            style={{ display: 'inline' }}>
                            <path
                                className="cls-19"
                                d="m 2380.8,2216 -10.14,8.45 v 11.83 c 12.31,-1.45 21.72,-12.07 21.72,-24.62 0,-13.76 -11.1,-24.86 -24.86,-24.86 -13.76,0 -24.86,11.1 -24.86,24.86 0,12.79 9.65,23.17 21.97,24.86 v -12.07 l -9.17,-11.59 c -0.97,-1.45 -0.72,-3.38 0.48,-4.34 1.21,-0.97 3.14,-0.72 4.1,0.48 l 7.97,9.89 8.93,-7.72 c 1.45,-0.97 3.38,-0.72 4.35,0.48 0.97,1.45 0.72,3.38 -0.48,4.35 z"
                                id="path275" />
                            <path
                                className="cls-19"
                                d="m 2408.74,2165.8 h -82.29 c -3.29,0 -5.97,2.67 -5.97,5.97 v 82.29 c 0,3.29 2.67,5.97 5.97,5.97 h 38.18 v -17.46 c -15.69,-1.45 -28,-14.72 -28,-30.9 0,-17.14 14,-31.14 30.9,-31.14 16.9,0 30.9,13.76 30.9,30.9 0,16.17 -12.07,29.21 -27.76,30.9 v 17.71 h 38.07 c 3.29,0 5.97,-2.67 5.97,-5.97 v -82.29 c 0,-3.29 -2.67,-5.97 -5.97,-5.97 z"
                                id="path276" />
                        </g>
                        <g
                            id="g282"
                            style={{ display: 'inline' }}>
                            <path
                                className="cls-19"
                                d="m 2366.28,2121.13 c -4.77,0.61 -8.22,4.9 -8.22,9.71 v 23.62 h 18.93 v -23.95 c 0,-5.63 -4.94,-10.13 -10.71,-9.39 z"
                                id="path277" />
                            <g
                                id="g281">
                                <path
                                    className="cls-19"
                                    d="m 2380.74,2090.78 h 33.97 v -24.56 c 0,-3.29 -2.67,-5.97 -14.06,-5.97 h -19.91 v 30.52 z"
                                    id="path278" />
                                <g
                                    id="g280">
                                    <path
                                        className="cls-19"
                                        d="m 2345.56,2091.63 v -31.37 h -19.11 c -3.29,0 -5.97,2.67 -5.97,5.97 v 25.41 h 25.08 z"
                                        id="path279" />
                                    <path
                                        className="cls-19"
                                        d="m 2376.94,2098.37 c -2.1,0 -3.8,-1.7 -3.8,-3.8 v -34.32 h -19.99 v 35.17 c 0,2.1 -1.7,3.8 -3.8,3.8 h -28.88 v 49.29 c 0,3.29 2.67,5.97 5.97,5.97 h 24.02 v -23.31 c 0,-8.88 6.58,-16.65 15.41,-17.48 10.14,-0.96 18.7,7.03 18.7,16.98 v 23.81 h 24.15 c 3.29,0 5.97,-2.67 5.97,-5.97 v -50.14 h -37.76 z"
                                        id="path280" />
                                </g>
                            </g>
                        </g>
                        <g
                            id="g283"
                            style={{ display: 'inline' }}>
                            <path
                                className="cls-19"
                                d="m 2241.75,2132.18 c -1.54,0 -2.79,1.36 -2.79,3.04 v 19.06 c 0,0.07 -0.02,0.13 -0.02,0.19 h 23.85 c 0,-0.06 -0.02,-0.13 -0.02,-0.19 v -19.06 c 0,-1.68 -1.25,-3.04 -2.79,-3.04 z"
                                id="path282" />
                            <path
                                className="cls-19"
                                d="m 2266.52,2109.92 c -3.03,0 -5.47,-2.54 -5.31,-5.6 0.15,-2.87 2.73,-5.03 5.61,-5.03 h 42.3 c 0,0 0,-33.07 0,-33.07 0,-3.29 -2.67,-5.97 -5.97,-5.97 h -82.29 c -3.29,0 -5.97,2.67 -5.97,5.97 v 82.29 c 0,3.29 2.67,5.97 5.97,5.97 h 8.62 c 0,-0.07 -0.02,-0.13 -0.02,-0.2 v -65.14 c 0,-2.14 2.67,-3.97 4.81,-3.97 2.14,0 4.67,1.83 4.67,3.97 v 31.91 c 0,1.46 1.19,2.65 2.65,2.65 h 26.1 c 2.14,0 3.98,1.53 4.59,3.67 v 26.91 c 0,0.07 -0.02,0.13 -0.02,0.2 h 30.9 c 3.29,0 5.97,-2.67 5.97,-5.97 v -38.59 h -42.6 z"
                                id="path283" />
                        </g>
                        <g
                            id="g285"
                            style={{ display: 'inline' }}>
                            <path
                                className="cls-19"
                                d="m 2214.9,2170.27 v 84.35 c 0,2.99 2.42,5.41 5.41,5.41 h 5.82 v -78.99 c 0,-2.1 1.7,-3.8 3.8,-3.8 h 22.64 c 2.1,0 3.8,1.7 3.8,3.8 v 13.37 c 0,1.99 -1.43,3.8 -3.4,3.99 -2.27,0.23 -4.19,-1.55 -4.19,-3.78 v -9.79 h -15.05 v 75.19 h 17.15 v -25.95 c 0,-2.1 1.7,-3.8 3.8,-3.8 h 14.41 v -23.62 c 0,-2.1 1.7,-3.8 3.8,-3.8 h 36.25 v -32.58 c 0,-2.47 -2,-4.47 -4.47,-4.47 h -85.28 c -2.47,0 -4.47,2 -4.47,4.47 z"
                                id="path284" />
                            <path
                                className="cls-19"
                                d="m 2276.67,2212.55 v 15.61 c 0,1.16 0.94,2.11 2.11,2.11 h 22 c 2.02,0 3.88,1.45 4.05,3.46 0.2,2.25 -1.57,4.14 -3.78,4.14 h -24.38 v 4.66 c 0,1.99 -1.43,3.8 -3.4,3.99 -2.27,0.23 -4.19,-1.55 -4.19,-3.78 v -4.88 h -10.62 v 22.16 h 48.55 c 1.16,0 2.11,-0.94 2.11,-2.11 v -47.47 h -30.34 c -1.16,0 -2.11,0.94 -2.11,2.11 z"
                                id="path285" />
                        </g>
                    </g>
                </g>
                <path
                    className="cls-14"
                    d="m 988.77,1228.42 c -24.79,88.19 -38.07,181.14 -38.07,277.18 0,568.28 464.15,1028.96 1036.71,1028.96 572.56,0 1036.71,-460.68 1036.71,-1028.96 0,-568.28 -464.16,-1028.96 -1036.72,-1028.96 -148.75,0 -290.17,31.11 -418.05,87.1 L 1987.4,1505.6 988.76,1228.42 Z"
                    id="path287"
                    style={{ display: 'inline' }} />
                <path
                    className="cls-63"
                    d="M 1110.99,970.84 731.91,739.28 C 504.58,1111.91 451.7,1572.88 597.17,1991.39 l 414.07,-143.67 c -100.52,-292.86 -61.56,-615.76 99.74,-876.89 z"
                    id="PMH"
                    style={{ display: 'inline' }}
                    data-label="PMH" />
                <path
                    className="cls-17"
                    d="m 1439.82,2378.97 -235.44,376.68 c 370.27,231.15 830.67,288.76 1250.66,147.6 l -139.41,-415.52 c -293.88,97.5 -616.36,55.23 -875.82,-108.75 z"
                    id="PMOTDU"
                    style={{ display: 'inline' }}
                    data-label="PMOTDU" />
                <path
                    className="cls-42"
                    d="m 2487.08,2411.29 213.49,389.54 c 382.67,-210 658.01,-583.45 740.2,-1018.84 l -430.63,-81.54 c -58.62,304.03 -253.16,564.68 -523.05,710.84 z"
                    id="PSE"
                    style={{ display: 'inline' }}
                    data-label="PSE" />
                <path
                    className="cls-43"
                    d="M 2843.18,923.89 3208.1,670.6 C 2959.01,312.15 2558.65,77.63 2117.03,41.71 l -35.78,436.82 c 308.51,26.31 588.18,192.34 761.93,445.35 z"
                    id="AR"
                    style={{ display: 'inline' }}
                    data-label="AR" />
                <g
                    id="g295"
                    style={{ display: 'inline' }}>
                    <path
                        className="cls-14"
                        d="M 1987.68,0 C 1156.06,0 481.9,674.16 481.9,1505.78 c 0,124.8 15.19,246.05 43.81,362.01 l 1461.97,-362.01 -2.33,3.86 1496.55,-191.32 C 3389.61,575.17 2755.82,0 1987.68,0 Z"
                        id="path292"
                        style={{ display: 'inline' }} />
                    <path
                        className="cls-14"
                        d="m 1208.43,2794.5 c 227.33,137.76 494.03,217.06 779.25,217.06 478.17,0 904.29,-222.89 1180.12,-570.44 L 1981.57,1515.89 Z"
                        id="path293"
                        style={{ display: 'inline' }} />
                    <path
                        className="cls-38"
                        d="M 525.71,1867.79 41.47,1987.7 c 128.7,521.49 461.52,962.59 908.85,1233.65 l 258.11,-426.86 C 872.4,2590.87 622.39,2259.52 525.71,1867.78 Z"
                        id="PSMAMS"
                        style={{ display: 'inline' }}
                        data-label="PSMAMS" />
                    <path
                        className="cls-36"
                        d="m 3848.21,760.46 -463.02,185.52 c 22.81,57.53 42.34,117.1 58.29,178.54 88.79,342.11 52.57,687.28 -80.24,987.15 l 457.75,198.12 c 175.51,-398.37 223.1,-856.5 105.25,-1310.57 -21.33,-82.18 -47.47,-161.84 -78.02,-238.77 z"
                        id="PPCC"
                        style={{ display: 'inline' }}
                        data-label="PPCC" />
                    <polygon
                        className="cls-21"
                        points="1981.57,1515.88 1985.35,1509.64 1975.23,1510.93 "
                        id="polygon295"
                        style={{ display: 'inline' }} />
                </g>
                <text
                    className="cls-13"
                    transform="translate(2978.19,2203.41)"
                    id="text295"
                    style={{ display: 'inline' }}><tspan
                        x="0"
                        y="0"
                        id="tspan295">PSE</tspan></text>
                <text
                    className="cls-6"
                    transform="translate(3552.95,1521.32)"
                    id="text304"
                    style={{ display: 'inline' }}><tspan
                        className="cls-56"
                        x="0"
                        y="0"
                        id="tspan296">P</tspan><tspan
                            x="32.450001"
                            y="0"
                            id="tspan297">olíticas Públicas</tspan><tspan
                                x="20.52"
                                y="108"
                                id="tspan298">Ciud</tspan><tspan
                                    className="cls-68"
                                    x="128.7"
                                    y="108"
                                    id="tspan299">a</tspan><tspan
                                        x="156.64"
                                        y="108"
                                        id="tspan300">d</tspan><tspan
                                            className="cls-50"
                                            x="200.52"
                                            y="108"
                                            id="tspan301">C</tspan><tspan
                                                x="232.24001"
                                                y="108"
                                                id="tspan302">e</tspan><tspan
                                                    className="cls-58"
                                                    x="260.64001"
                                                    y="108"
                                                    id="tspan303">r</tspan><tspan
                                                        x="279.63"
                                                        y="108"
                                                        id="tspan304">cana</tspan></text>
                <text
                    className="cls-8"
                    transform="translate(1718.24,2747.88)"
                    id="text308"
                    style={{ display: 'inline' }}><tspan
                        className="cls-60"
                        x="0"
                        y="0"
                        id="tspan305">P</tspan><tspan
                            x="32.490002"
                            y="0"
                            id="tspan306">M</tspan><tspan
                                className="cls-57"
                                x="75.459999"
                                y="0"
                                id="tspan307">O</tspan><tspan
                                    className="cls-37"
                                    x="112.99"
                                    y="0"
                                    id="tspan308">TDU</tspan></text>
                <text
                    className="cls-11"
                    transform="translate(489.55,2592.44)"
                    id="text309"
                    style={{ display: 'inline' }}><tspan
                        x="0"
                        y="0"
                        id="tspan309">PSMAMS</tspan></text>
                <text
                    className="cls-11"
                    transform="translate(690.15,1329.84)"
                    id="text311"
                    style={{ display: 'inline' }}><tspan
                        className="cls-60"
                        x="0"
                        y="0"
                        id="tspan310">P</tspan><tspan
                            x="32.490002"
                            y="0"
                            id="tspan311">MH</tspan></text>
                <path
                    className="cls-18"
                    d="M 1934.12,481.67 1910.39,38.1 C 1474.52,61.66 1064.61,279.04 801.97,635.89 l 352.84,259.99 c 184.5,-248.65 472.73,-399.34 779.3,-414.21 z"
                    id="PSDUPZVPHAAC"
                    style={{ display: 'inline' }}
                    data-label="PSDUPZVPHAAC" />
                <text
                    className="cls-1"
                    transform="translate(1194.34,443.74)"
                    id="text320"
                    style={{ display: 'inline' }}><tspan
                        x="0"
                        y="0"
                        id="tspan312">PSDU</tspan><tspan
                            className="cls-51"
                            x="134.28"
                            y="0"
                            id="tspan313">P</tspan><tspan
                                x="166.59"
                                y="0"
                                id="tspan314">Z</tspan><tspan
                                    className="cls-45"
                                    x="196.78"
                                    y="0"
                                    id="tspan315">V</tspan><tspan
                                        className="cls-57"
                                        x="229.67999"
                                        y="0"
                                        id="tspan316">P</tspan><tspan
                                            x="262.17001"
                                            y="0"
                                            id="tspan317">H</tspan><tspan
                                                className="cls-64"
                                                x="298.53"
                                                y="0"
                                                id="tspan318">A</tspan><tspan
                                                    className="cls-60"
                                                    x="334.03"
                                                    y="0"
                                                    id="tspan319">A</tspan><tspan
                                                        x="368.04999"
                                                        y="0"
                                                        id="tspan320">C</tspan></text>
                <text
                    className="cls-10"
                    transform="translate(2570.16,476.64)"
                    id="text321"
                    style={{ display: 'inline' }}><tspan
                        x="0"
                        y="0"
                        id="tspan321">AR</tspan></text>
            </svg>

        </Grid>
    )
}

export default NewInteractiveMap