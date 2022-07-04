import {
  Grid,
  Typography,
  Autocomplete,
  TextField
} from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { subYears } from 'date-fns/fp'
import { Controller, useFormContext } from 'react-hook-form'
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import Title from '@components/commons/Title';
import { debounce } from 'lodash';

const tendencyList = [
  { id: 1, value: 'Ascendente' },
  { id: 2, value: 'Descendente' },
  { id: 3, value: 'No aplica' }
];

const IndicadorFilter = (props) => {
  const { odsList, unidadMedidaList,
    coberturaList, modulosList } = props;
  const minDate = subYears(21, new Date());
  const maxDate = new Date();
  const { control } = useFormContext();

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Grid
        container
        sx={{
          marginBottom: 3,
          border: '1px solid rgb(0, 0, 0, 0.1)'
        }}
        borderRadius={2}
      >
        <Grid
          item
          container
          padding={2}
          direction="column"
        >
          <Grid item>
            <Title variant="h5" component="h3">
              Búsqueda
            </Title>
          </Grid>
          <Grid
            item
            container
            direction="row"
            columnSpacing={2}
            rowSpacing={2}
            justifyContent='center'
          >
            <Grid item xs={12} md={4} lg={3}>
              <Controller
                name='tema'
                control={control}
                defaultValue={null}
                render={({ field: props }) => (
                  <Autocomplete
                    {...props}
                    onChange={(_, data) => props.onChange(data)}
                    disablePortal
                    options={modulosList}
                    getOptionLabel={(option) => option.temaIndicador}
                    noOptionsText="No hay opciones"
                    isOptionEqualToValue={(option, value) => option.id === value.id}
                    renderOption={(props, option, { inputValue }) => {
                      const matches = match(option.temaIndicador, inputValue);
                      const parts = parse(option.temaIndicador, matches);

                      return (
                        <li {...props}>
                          <div>
                            {parts.map((part, index) => (
                              <span
                                key={index}
                                style={{
                                  fontWeight: part.highlight ? 700 : 400,
                                }}
                              >
                                {part.text}
                              </span>
                            ))}
                          </div>
                        </li>
                      );
                    }}
                    renderInput={(params) => (
                      <TextField {...params} label="Temática" />
                    )}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Controller
                name='ods'
                control={control}
                defaultValue={null}
                render={({ field: props }) => (
                  <Autocomplete
                    {...props}
                    onChange={(_, data) => props.onChange(data)}
                    disablePortal
                    options={odsList}
                    getOptionLabel={(option) => option.nombre}
                    isOptionEqualToValue={(option, value) => option.id === value.id}
                    noOptionsText="No hay opciones"
                    renderOption={(props, option, { inputValue }) => {
                      const matches = match(option.nombre, inputValue);
                      const parts = parse(option.nombre, matches);

                      return (
                        <li {...props}>
                          <div>
                            {parts.map((part, index) => (
                              <span
                                key={index}
                                style={{
                                  fontWeight: part.highlight ? 700 : 400,
                                }}
                              >
                                {part.text}
                              </span>
                            ))}
                          </div>
                        </li>
                      );
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label='ODS'
                        helperText='Objetivo de Desarrollo Sostenible'
                      />
                    )}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Controller
                name='medida'
                control={control}
                defaultValue={null}
                render={({ field: props }) => (
                  <Autocomplete
                    {...props}
                    onChange={(_, data) => props.onChange(data)}
                    disablePortal
                    id="cbx-medida"
                    options={unidadMedidaList}
                    getOptionLabel={(option) => option.nombre}
                    isOptionEqualToValue={(option, value) => option.id === value.id}
                    noOptionsText="No hay opciones"
                    renderOption={(props, option, { inputValue }) => {
                      const matches = match(option.nombre, inputValue);
                      const parts = parse(option.nombre, matches);

                      return (
                        <li {...props}>
                          <div>
                            {parts.map((part, index) => (
                              <span
                                key={index}
                                style={{
                                  fontWeight: part.highlight ? 700 : 400,
                                }}
                              >
                                {part.text}
                              </span>
                            ))}
                          </div>
                        </li>
                      );
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Unidad de Medida"
                      />
                    )}
                  />

                )}
              />
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Controller
                name='anio'
                control={control}
                defaultValue={null}
                render={({ field: props, fieldState: { error } }) => (
                  <>
                    <DatePicker
                      views={['year']}
                      label="Año"
                      inputFormat='yyyy'
                      onChange={debounce((val) => {
                        if (val > minDate && val < maxDate) {
                          props.onChange(val)
                        }
                      }, 500)}
                      value={props.value}
                      minDate={minDate}
                      maxDate={maxDate}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          fullWidth
                          helperText='Año del último valor disponible'
                        />
                      )}
                    />
                  </>
                )}
              />
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Controller
                name='cobertura'
                control={control}
                defaultValue={null}
                render={({ field: props }) => (
                  <Autocomplete
                    {...props}
                    onChange={(_, data) => props.onChange(data)}
                    disablePortal
                    options={coberturaList}
                    getOptionLabel={(option) => option.nombre}
                    isOptionEqualToValue={(option, value) => option.id === value.id}
                    noOptionsText="No hay opciones"
                    renderOption={(props, option, { inputValue }) => {
                      const matches = match(option.nombre, inputValue);
                      const parts = parse(option.nombre, matches);

                      return (
                        <li {...props}>
                          <div>
                            {parts.map((part, index) => (
                              <span
                                key={index}
                                style={{
                                  fontWeight: part.highlight ? 700 : 400,
                                }}
                              >
                                {part.text}
                              </span>
                            ))}
                          </div>
                        </li>
                      );
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Cobertura Geográfica"
                      />
                    )}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Controller
                name='tendenciaActual'
                control={control}
                defaultValue={null}
                render={({ field: props }) => (
                  <Autocomplete
                    {...props}
                    onChange={(_, data) => props.onChange(data)}
                    disablePortal
                    options={tendencyList}
                    getOptionLabel={(option) => option.value}
                    isOptionEqualToValue={(option, value) => option.id === value.id}
                    noOptionsText="No hay opciones"
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Tendencia"
                      />
                    )}
                  />
                )}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
};

export default IndicadorFilter;