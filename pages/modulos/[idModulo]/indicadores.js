import Head from "next/head";
import Container from "@mui/material/Container";
import { useCallback, useEffect, useState } from "react";
import IndicadorFilter from "@components/indicador/IndicadorFilter";
import IndicadorList from "@components/indicador/IndicadorList";
import IndicadorPagination from "@components/indicador/IndicadorPagination";
import IndicadorSkeleton from "@components/indicador/IndicadorSkeleton";
import Alert from "@mui/material/Alert";
import { serialize } from '../../../helpers/StringUtils';
import Title from "@components/commons/Title";

const ODS = 1;
const UNIDAD_MEDIDA = 2;
const COBERTURA_GEOGRAFICA = 3;

export default function Modulo(props) {
    const [isLoading, setLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [modulo, setModulo] = useState(props.modulo);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [filters, setFilters] = useState('');

    const fetchIndicadores = useCallback(() => {
        setLoading(true);
        const url = `${process.env.INDICADORES_BASE_URL}/modulos/${modulo}/indicadores?page=${page}&${filters}`;
        fetch(url)
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error(res.error.text)
            })
            .then(indicadores => {
                setTotalPages(indicadores.total_pages);
                setIndicadores(indicadores.data);
                setHasError(false);
            })
            .catch((err) => {
                setHasError(true)
            })
            .finally(() => {
                setLoading(false);
            });
    }, [modulo, page, filters]);

    const [indicadores, setIndicadores] = useState({});
    const [ods, setOds] = useState('');
    const [medida, setMedida] = useState('');
    const [year, setYear] = useState('');
    const [cobertura, setCobertura] = useState('');
    const [tendencia, setTendencia] = useState('');

    const updateFilter = useCallback(() => {
        let filtersObj = {
            ...(ods && { idOds: ods }),
            ...(medida && { idUnidadMedida: medida }),
            ...(year && { anioUltimoValorDisponible: year }),
            ...(cobertura && { idCobertura: cobertura }),
            ...(tendencia && { tendenciaActual: tendencia })
        };
        setFilters(serialize(filtersObj));
    }, [ods, medida, year, cobertura, tendencia]);

    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            updateFilter();
            fetchIndicadores();
        }
        return () => {
            isMounted = false;
        }
    }, [updateFilter, fetchIndicadores]);

    const handlePagination = (_, value) => setPage(value);
    const handleModulo = (_, value) => setModulo(value === null ? props.modulo : value.id);
    const handleOds = (_, value) => setOds(value === null ? '' : value.id);
    const handleMedida = (_, value) => setMedida(value === null ? '' : value.id);
    const handleYear = (_, value) => setYear(value);
    const handleTendencia = (_, value) => setTendencia(value);
    const handleCobertura = (_, value) => setCobertura(value === null ? '' : value.id);
    const title = `indicadores modulo ${modulo}`;
    return (
        <>
            <Head>
                <title>Indicadores</title>
                <meta name="description" content="Indicadores de la ciudad de Chihuahua" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container maxWidth="xl" sx={{ mb: '2%', mt: '3%' }}>
                <Title variant='h3' component='h1' margin='0% 0 3% 0'>{title}</Title>
                <IndicadorFilter
                    odsList={[...props.ods.data]}
                    unidadMedidaList={[...props.medidas.data]}
                    coberturaList={[...props.coberturas.data]}
                    modulosList={[...props.modulos.data]}
                    handleModulo={handleModulo}
                    handleOds={handleOds}
                    handleMedida={handleMedida}
                    handleYear={handleYear}
                    handleTendencia={handleTendencia}
                    handleCobertura={handleCobertura}
                />
                {!isLoading && hasError && <Alert severity='error' sx={{ marginBottom: 2 }}>Hubo un error</Alert>}
                {isLoading ?
                    Array.from(new Array(3)).map((_, i) => <IndicadorSkeleton key={i} />)
                    :
                    !hasError &&
                        (<>
                            <IndicadorList
                                indicadores={indicadores}
                            />
                            <IndicadorPagination
                                page={page}
                                totalPages={totalPages}
                                handlePagination={handlePagination}
                            />
                        </>)
                    }
            </Container>
        </>
    );
};

export async function getServerSideProps(context) {
    const baseUrl = process.env.INDICADORES_BASE_URL;
    const modulo = context.params.idModulo;
    const [odsRes, medidaRes, coberturaRes, modulosRes] = await Promise.all([
        fetch(`${baseUrl}/catalogos/${ODS}`),
        fetch(`${baseUrl}/catalogos/${UNIDAD_MEDIDA}`),
        fetch(`${baseUrl}/catalogos/${COBERTURA_GEOGRAFICA}`),
        fetch(`${baseUrl}/modulos`),
    ]);
    const [ods, medidas, coberturas, modulos] = await Promise.all([
        odsRes.json(),
        medidaRes.json(),
        coberturaRes.json(),
        modulosRes.json(),
    ]);
    return {
        props: {
            modulo,
            ods,
            coberturas,
            medidas,
            modulos,
        },
    };
}
