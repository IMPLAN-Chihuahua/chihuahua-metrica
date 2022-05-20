import Indicador from "./Indicador";
import Stack from '@mui/material/Stack';
import Alert from "@mui/material/Alert";

const IndicadorList = (props) => {
    const { indicadores } = props;
    return (
        <Stack spacing={2} alignItems="stretch" justifyContent="space-around">
            {
                indicadores.length > 0 ?
                    indicadores.map(elem => <Indicador value={elem} key={elem.id} />)
                    : <Alert severity="warning">No hay indicadores disponibles</Alert>
            }
        </Stack>
    );
};

export default IndicadorList;