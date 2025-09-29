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
import { COBERTURA_GEOGRAFICA, ODS } from './Indicador';
import { useEffect, useState } from 'react';
import useSWRImmutable from 'swr/immutable'

const IndicadoresFilter = (props) => {
  const [ods, setOds] = useState([]);
  const [coberturas, setCoberturas] = useState([]);

  const minDate = subYears(20, new Date());
  const maxDate = new Date();
  const { control, setError } = useFormContext();
  const fetcher = async (url) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_INDICADORES_BASE_URL}${url}`)
    return res.json();
  }

  const { data: odsList } = useSWRImmutable(`/catalogos/${ODS}`, fetcher);
  const { data: coberturaList } = useSWRImmutable(`/catalogos/${COBERTURA_GEOGRAFICA}`, fetcher);

  useEffect(() => {
    if (!odsList) return;
    setOds(odsList.data)
  }, [odsList])

  useEffect(() => {
    if (!coberturaList) return;
    setCoberturas([1, 2, 3])
  }, [coberturaList])

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Grid container>
        <Grid
          item
          container
          marginBottom={3}
          direction="column"
        >
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
                name='ods'
                control={control}
                defaultValue={null}
                render={({ field: props }) => (
                  <Autocomplete
                    {...props}
                    onChange={(_, data) => props.onChange(data)}
                    disablePortal
                    options={ods}
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
                name='anioUltimoValorDisponible'
                control={control}
                defaultValue={null}
                render={({ field: props }) => (
                  <DatePicker
                    views={['year']}
                    label="Año"
                    inputFormat='yyyy'
                    onChange={debounce((val) => {
                      if (val >= minDate && val <= maxDate) {
                        props.onChange(val)
                      } else {
                        props.onChange(undefined)
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
                    options={coberturas}
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
          </Grid>
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
};

export default IndicadoresFilter;