import {
    Grid,
    Typography,
    Autocomplete,
    TextField
} from '@mui/material';


const IndicadorFilter = (props) => {
    const { odsList, unidadMedidaList,
        coberturaList, modulosList, handleModulo } = props;
    const start = new Date().getFullYear();
    const end = start - 15;
    const yearList = [...Array(start - end + 1).keys()].map((x) => start - x);
    const tendencyList = ['Ascendente', 'Descendente', 'No aplica'];

    return (
        <Grid
            container
            sx={{
                backgroundColor: "info.main",
                marginBottom: 4,
            }}
            borderRadius={2}
        >
            <Grid
                item
                container
                padding={2}
                rowSpacing={2}
                columnSpacing={2}
                direction="column"
            >
                <Grid item>
                    <Typography variant="h5" component="h2">
                        Filtrar Indicadores
                    </Typography>
                </Grid>
                <Grid
                    item
                    container
                    direction="row"
                    columnSpacing={2}
                    rowSpacing={2}
                >
                    <Grid item xs={12} md={4} lg={3}>
                        <Autocomplete
                            disablePortal
                            id="cbx-tematica"
                            options={modulosList}
                            getOptionLabel={(option) => option.temaIndicador}
                            noOptionsText="No hay opciones"
                            onChange={handleModulo}
                            renderInput={(params) => (
                                <TextField {...params} label="Temática" />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} md={4} lg={3}>
                        <Autocomplete
                            disablePortal
                            id="cbx-ods"
                            options={odsList}
                            getOptionLabel={(option) => option.nombre}
                            noOptionsText="No hay opciones"
                            renderInput={(params) => (
                                <TextField {...params} label="Ods" />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} md={4} lg={3}>
                        <Autocomplete
                            disablePortal
                            id="cbx-medida"
                            options={unidadMedidaList}
                            getOptionLabel={(option) => option.nombre}
                            noOptionsText="No hay opciones"
                            renderInput={(params) => (
                                <TextField {...params} label="Unidad de Medida" />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} md={4} lg={3}>
                        <Autocomplete
                            disablePortal
                            id="cbx-year"
                            options={yearList}
                            getOptionLabel={(option) => option.toString()}
                            noOptionsText="No hay opciones"
                            renderInput={(params) => (
                                <TextField {...params} label="Año" />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} md={4} lg={3}>
                        <Autocomplete
                            disablePortal
                            id="cbx-fuente"
                            options={coberturaList}
                            getOptionLabel={(option) => option.nombre}
                            noOptionsText="No hay opciones"
                            renderInput={(params) => (
                                <TextField {...params} label="Cobertura Geográfica" />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} md={4} lg={3}>
                        <Autocomplete
                            disablePortal
                            id="cbx-fuente"
                            options={tendencyList}
                            noOptionsText="No hay opciones"
                            renderInput={(params) => (
                                <TextField {...params} label="Tendencia" />
                            )}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default IndicadorFilter;