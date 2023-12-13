import * as React from 'react';
import { Box } from "@mui/material";

import style from './CardTree.module.css';

const ColorFlor = ({flowerColor}) => {
    switch (flowerColor) {
      case 'BLANCAS':
        return (
          <Box sx={{
            maxHeight: { xs: 100, md: 100 },
            maxWidth: { xs: 100, md: 100 }
          }} component="img" src="/images/arbolado/ficha/blanco.png" className={`${style.boxShadow}`}>
          </Box>
        )
      case 'AMARILLAS':
        return (
          <Box
            sx={{
              maxHeight: { xs: 100, md: 100 },
              maxWidth: { xs: 100, md: 100 }
            }} component="img" src="/images/arbolado/ficha/amarillo.png" className={`${style.boxShadow}`}>
          </Box>
        )
        case 'ROJAS':
        return (
          <Box sx={{
            maxHeight: { xs: 100, md: 100 },
            maxWidth: { xs: 100, md: 100 }
          }} component="img" src="/images/arbolado/ficha/rojo.png" className={`${style.boxShadow}`}>
          </Box>
        )
        case 'NARANJA':
        return (
          <Box sx={{
            maxHeight: { xs: 100, md: 100 },
            maxWidth: { xs: 100, md: 100 }
          }} component="img" src="/images/arbolado/ficha/naranja.png" className={`${style.boxShadow}`}>
          </Box>
        )
        case 'AZUL':
        return (
          <Box sx={{
            maxHeight: { xs: 100, md: 100 },
            maxWidth: { xs: 100, md: 100 }
          }} component="img" src="/images/arbolado/ficha/azul.png" className={`${style.boxShadow}`}>
          </Box>
        )
        case 'MORADA':
        return (
          <Box sx={{
            maxHeight: { xs: 100, md: 100 },
            maxWidth: { xs: 100, md: 100 }
          }} component="img" src="/images/arbolado/ficha/morado.png" className={`${style.boxShadow}`}>
          </Box>
        )
        case 'CREMAS':
        return (
          <Box sx={{
            maxHeight: { xs: 100, md: 100 },
            maxWidth: { xs: 100, md: 100 }
          }} component="img" src="/images/arbolado/ficha/crema.png" className={`${style.boxShadow}`}>
          </Box>
        )
        case 'ROSA':
        return (
          <Box sx={{
            maxHeight: { xs: 100, md: 100 },
            maxWidth: { xs: 100, md: 100 }
          }} component="img" src="/images/arbolado/ficha/rosa.png" className={`${style.boxShadow}`}>
          </Box>
        )
        case 'VERDES':
        return (
          <Box sx={{
            maxHeight: { xs: 100, md: 100 },
            maxWidth: { xs: 100, md: 100 }
          }} component="img" src="/images/arbolado/ficha/verde.png" className={`${style.boxShadow}`}>
          </Box>
        )
        case 'GRIS':
        return (
          <Box sx={{
            maxHeight: { xs: 100, md: 100 },
            maxWidth: { xs: 100, md: 100 }
          }} component="img" src="/images/arbolado/ficha/gris.png" className={`${style.boxShadow}`}>
          </Box>
        )
        case 'INCONSPICUAS':
        return (
          <Box sx={{
            maxHeight: { xs: 100, md: 100 },
            maxWidth: { xs: 100, md: 100 }
          }} component="img" src="/images/arbolado/ficha/inconspicuas.png" className={`${style.boxShadow}`}>
          </Box>
        )
      default:
        return (
          <Box sx={{
            maxHeight: { xs: 100, md: 100 },
            maxWidth: { xs: 100, md: 100 }
          }} component="img" src="/images/arbolado/ficha/novisible.png">
          </Box>
        )
    }
  };


  export default ColorFlor