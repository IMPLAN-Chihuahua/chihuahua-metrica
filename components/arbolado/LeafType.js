import * as React from 'react';
import { Box } from "@mui/material";

const TipoHoja = ({treeLeaf}) => {
    switch (treeLeaf) {
      case 'SIMPLES ANCHAS':
        return (
          <Box sx={{
            maxHeight: { xs: 150, md: 150 },
            maxWidth: { xs: 150, md: 150 }
          }} component="img" src="/images/arbolado/ficha/f_anchas.png">
          </Box>
        )
      case 'SIMPLE LANCEOLADO':
        return (
          <Box
            sx={{
              maxHeight: { xs: 150, md: 150 },
              maxWidth: { xs: 150, md: 150 }
            }} component="img" src="/images/arbolado/ficha/f_lanceolada.png">
          </Box>
        )
        case 'SIMPLE ESCAMOSA':
        return (
          <Box sx={{
            maxHeight: { xs: 150, md: 150 },
            maxWidth: { xs: 150, md: 150 }
          }} component="img" src="/images/arbolado/ficha/f_escamosa.png">
          </Box>
        )
        case 'COMPUESTA PINNADAS':
        return (
          <Box sx={{
            maxHeight: { xs: 150, md: 150 },
            maxWidth: { xs: 150, md: 150 }
          }} component="img" src="/images/arbolado/ficha/f_pinada.png">
          </Box>
        )
        case 'SIMPLE LOBULADA':
        return (
          <Box sx={{
            maxHeight: { xs: 150, md: 150 },
            maxWidth: { xs: 150, md: 150 }
          }} component="img" src="/images/arbolado/ficha/f_lobulada.png">
          </Box>
        )
        case 'SIMPLE LINEAR':
        return (
          <Box sx={{
            maxHeight: { xs: 150, md: 150 },
            maxWidth: { xs: 150, md: 150 }
          }} component="img" src="/images/arbolado/ficha/f_linear.png">
          </Box>
        )
        case 'SIMPLE PALMEADA':
        return (
          <Box sx={{
            maxHeight: { xs: 150, md: 150 },
            maxWidth: { xs: 150, md: 150 }
          }} component="img" src="/images/arbolado/ficha/f_palemeada.png">
          </Box>
        )
        case 'COMPUESTA MULTI-PINNADA':
        return (
          <Box sx={{
            maxHeight: { xs: 150, md: 150 },
            maxWidth: { xs: 150, md: 150 }
          }} component="img" src="/images/arbolado/ficha/f_multi.png">
          </Box>
        )
        case 'COMPUESTAS PALMEADAS':
        return (
          <Box sx={{
            maxHeight: { xs: 150, md: 150 },
            maxWidth: { xs: 150, md: 150 }
          }} component="img" src="/images/arbolado/ficha/f_cpalmeada.png">
          </Box>
        )
        case 'ACICULAR':
        return (
          <Box sx={{
            maxHeight: { xs: 150, md: 150 },
            maxWidth: { xs: 150, md: 150 }
          }} component="img" src="/images/arbolado/ficha/f_acicular.png">
          </Box>
        )
        case 'ESCUAMIFORME':
        return (
          <Box sx={{
            maxHeight: { xs: 150, md: 150 },
            maxWidth: { xs: 150, md: 150 }
          }} component="img" src="/images/arbolado/ficha/f_escuamiforme.png">
          </Box>
        )
        case 'OVADA':
        return (
          <Box sx={{
            maxHeight: { xs: 150, md: 150 },
            maxWidth: { xs: 150, md: 150 }
          }} component="img" src="/images/arbolado/ficha/f_ovada.png">
          </Box>
        )
        case 'ASERRADA':
        return (
          <Box sx={{
            maxHeight: { xs: 150, md: 150 },
            maxWidth: { xs: 150, md: 150 }
          }} component="img" src="/images/arbolado/ficha/f_aserrada.png">
          </Box>
        )
        case 'ELIPTICA':
        return (
          <Box sx={{
            maxHeight: { xs: 150, md: 150 },
            maxWidth: { xs: 150, md: 150 }
          }} component="img" src="/images/arbolado/ficha/f_eliptica.png">
          </Box>
        )
        case 'OBLONGA':
        return (
          <Box sx={{
            maxHeight: { xs: 150, md: 150 },
            maxWidth: { xs: 150, md: 150 }
          }} component="img" src="/images/arbolado/ficha/f_oblonga.png">
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


  export default TipoHoja