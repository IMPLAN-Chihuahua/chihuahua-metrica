import { Link as MuiLink, Stack } from "@mui/material"
import Link from "next/link";


export const IndicadoresRelacionados = (props) => {
    const { indicadores = [] } = props || {};

    return (
        <ul>
            {indicadores.map(indicador => (
                <li key={indicador.id}>
                    <Link href={`/chihuahua-en-datos/indicadores/${indicador.id}`} passHref >
                        <MuiLink underline="hover">
                            {indicador.nombre}
                        </MuiLink>
                    </Link>
                </li>
            ))}
        </ul>
    )
}