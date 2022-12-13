import * as React from 'react';
import { Box } from "@mui/material";

const ColorFlor = ({flowerColor}) => {
    switch (flowerColor) {
      case 'BLANCAS':
        return (
          <Box sx={{
            maxHeight: { xs: 100, md: 100 },
            maxWidth: { xs: 100, md: 100 }
          }} component="img" src="/images/arbolado/ficha/blanco.png">
          </Box>
        )
      case 'AMARILLAS':
        return (
          <Box
            sx={{
              maxHeight: { xs: 100, md: 100 },
              maxWidth: { xs: 100, md: 100 }
            }} component="img" src="/images/arbolado/ficha/amarillo.png">
          </Box>
        )
        case 'ROJAS':
        return (
          <Box sx={{
            maxHeight: { xs: 100, md: 100 },
            maxWidth: { xs: 100, md: 100 }
          }} component="img" src="/images/arbolado/ficha/rojo.png">
          </Box>
        )
        case 'NARANJA':
        return (
          <Box sx={{
            maxHeight: { xs: 100, md: 100 },
            maxWidth: { xs: 100, md: 100 }
          }} component="img" src="/images/arbolado/ficha/naranja.png">
          </Box>
        )
        case 'AZUL':
        return (
          <Box sx={{
            maxHeight: { xs: 100, md: 100 },
            maxWidth: { xs: 100, md: 100 }
          }} component="img" src="/images/arbolado/ficha/azul.png">
          </Box>
        )
        case 'MORADA':
        return (
          <Box sx={{
            maxHeight: { xs: 100, md: 100 },
            maxWidth: { xs: 100, md: 100 }
          }} component="img" src="/images/arbolado/ficha/morado.png">
          </Box>
        )
        case 'CREMAS':
        return (
          <Box sx={{
            maxHeight: { xs: 100, md: 100 },
            maxWidth: { xs: 100, md: 100 }
          }} component="img" src="/images/arbolado/ficha/crema.png">
          </Box>
        )
        case 'ROSA':
        return (
          <Box sx={{
            maxHeight: { xs: 100, md: 100 },
            maxWidth: { xs: 100, md: 100 }
          }} component="img" src="/images/arbolado/ficha/rosa.png">
          </Box>
        )
        case 'VERDES':
        return (
          <Box sx={{
            maxHeight: { xs: 100, md: 100 },
            maxWidth: { xs: 100, md: 100 }
          }} component="img" src="/images/arbolado/ficha/verde.png">
          </Box>
        )
        case 'GRIS':
        return (
          <Box sx={{
            maxHeight: { xs: 100, md: 100 },
            maxWidth: { xs: 100, md: 100 }
          }} component="img" src="/images/arbolado/ficha/gris.png">
          </Box>
        )
        case 'INCONSPICUAS':
        return (
          <Box sx={{
            maxHeight: { xs: 100, md: 100 },
            maxWidth: { xs: 100, md: 100 }
          }} component="img" src="/images/arbolado/ficha/inconspicuas.png">
          </Box>
        )
      default:
        return null;
    }
  };


  export default ColorFlor