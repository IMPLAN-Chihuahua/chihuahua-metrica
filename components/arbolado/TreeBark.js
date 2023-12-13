import * as React from 'react';
import { Box } from "@mui/material";

const TipoCorteza = ({treeBark}) => {
    switch (treeBark) {
      case 'FISURADA':
        return (
          <Box sx={{
            maxHeight: { xs: 100, md: 100 },
            maxWidth: { xs: 100, md: 100 }
          }} component="img" src="/images/arbolado/ficha/f_cfisurada.png">
          </Box>
        )
      case 'AGRIETADA':
        return (
          <Box
            sx={{
              maxHeight: { xs: 100, md: 100 },
              maxWidth: { xs: 100, md: 100 }
            }} component="img" src="/images/arbolado/ficha/f_cagrietada.png">
          </Box>
        )
        case 'ESCAMOSA':
        return (
          <Box sx={{
            maxHeight: { xs: 100, md: 100 },
            maxWidth: { xs: 100, md: 100 }
          }} component="img" src="/images/arbolado/ficha/f_cescamosa.png">
          </Box>
        )
        case 'EXFOLIADA':
        return (
          <Box sx={{
            maxHeight: { xs: 100, md: 100 },
            maxWidth: { xs: 100, md: 100 }
          }} component="img" src="/images/arbolado/ficha/f_cexfoliada.png">
          </Box>
        )
        case 'LISA':
        return (
          <Box sx={{
            maxHeight: { xs: 100, md: 100 },
            maxWidth: { xs: 100, md: 100 }
          }} component="img" src="/images/arbolado/ficha/f_clisa.png">
          </Box>
        )
        case 'SURCADA':
        return (
          <Box sx={{
            maxHeight: { xs: 100, md: 100 },
            maxWidth: { xs: 100, md: 100 }
          }} component="img" src="/images/arbolado/ficha/f_csurcada.png">
          </Box>
        )
        case 'ANILLADA':
        return (
          <Box sx={{
            maxHeight: { xs: 100, md: 100 },
            maxWidth: { xs: 100, md: 100 }
          }} component="img" src="/images/arbolado/ficha/f_canillada.png">
          </Box>
        )
        case 'GRANULOSA':
        return (
          <Box sx={{
            maxHeight: { xs: 100, md: 100 },
            maxWidth: { xs: 100, md: 100 }
          }} component="img" src="/images/arbolado/ficha/fc_granulosa.png">
          </Box>
        )
        case 'ESPINOSA':
        return (
          <Box sx={{
            maxHeight: { xs: 100, md: 100 },
            maxWidth: { xs: 100, md: 100 }
          }} component="img" src="/images/arbolado/ficha/f_cespinosa.png">
          </Box>
        )
        case 'RESTOS DE PECIOLO':
        return (
          <Box sx={{
            maxHeight: { xs: 100, md: 100 },
            maxWidth: { xs: 100, md: 100 }
          }} component="img" src="/images/arbolado/ficha/f_cpesiolo.png">
          </Box>
        )
        case 'MEDIO LISA':
        return (
          <Box sx={{
            maxHeight: { xs: 100, md: 100 },
            maxWidth: { xs: 100, md: 100 }
          }} component="img" src="/images/arbolado/ficha/f_cmediolisa.png">
          </Box>
        )
        case 'TORTUOSO':
        return (
          <Box sx={{
            maxHeight: { xs: 100, md: 100 },
            maxWidth: { xs: 100, md: 100 }
          }} component="img" src="/images/arbolado/ficha/f_ctortuosa.png">
          </Box>
        )
        case 'RUGOSA':
        return (
          <Box sx={{
            maxHeight: { xs: 100, md: 100 },
            maxWidth: { xs: 100, md: 100 }
          }} component="img" src="/images/arbolado/ficha/f_crugosa.png">
          </Box>
        )
        case 'FIBROSA':
        return (
          <Box sx={{
            maxHeight: { xs: 100, md: 100 },
            maxWidth: { xs: 100, md: 100 }
          }} component="img" src="/images/arbolado/ficha/f_cfibrosa.png">
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


  export default TipoCorteza