import Head from "next/head";
import Container from "@mui/material/Container";
import { useCallback, useEffect, useState } from "react";
import IndicadorFilter from "@components/indicador/IndicadorFilter";
import IndicadorList from "@components/indicador/IndicadorList";
import IndicadorPagination from "@components/indicador/IndicadorPagination";
import IndicadorSkeleton from "@components/indicador/IndicadorSkeleton";
import { Alert } from "@mui/material";

const serialize = (obj) => {
    let str = [];
    for (let p in obj) {
        if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
        }
    }
    return str.join('&');
};

export default function Modulo(props) {
    const [isLoading, setLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [modulo, setModulo] = useState(props.modulo);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [filters, setFilters] = useState('');

    const fetchIndicadores = useCallback(() => {
        setLoading(true);
        const url = `${process.env.INDICADORES_BASE_URL}/modulos/${modulo}/indicadores?per_page=2&page=${page}&${filters}`;
        fetch(url)
            .then(res => res.json())
            .then(indicadores => {
                setTotalPages(indicadores.total_pages);
                setIndicadores(indicadores.data);
                setHasError(false);
                return indicadores;
            })
            .catch(() => setHasError(true))
            .finally(() => {
                setTimeout(() => setLoading(false), 250)
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
        updateFilter();
        fetchIndicadores();
    }, [updateFilter, fetchIndicadores]);

    const handlePagination = (_, value) => setPage(value);
    const handleModulo = (_, value) => setModulo(value === null ? props.modulo : value.id);
    const handleOds = (_, value) => setOds(value === null ? '' : value.id);
    const handleMedida = (_, value) => setMedida(value === null ? '' : value.id);
    const handleYear = (_, value) => setYear(value);
    const handleTendencia = (_, value) => setTendencia(value);
    const handleCobertura = (_, value) => setCobertura(value === null ? '' : value.id);

    return (

        <div>
            <Head>
                <title>Indicadores</title>
                <meta name="description" content="Indicadores de la ciudad de Chihuahua" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container maxWidth="xl">
                <h1>Indicadores Modulo {modulo}</h1>
                <IndicadorFilter
                    odsList={[...props.catalogos.ods]}
                    unidadMedidaList={[...props.catalogos.unidadMedida]}
                    coberturaList={[...props.catalogos.coberturas]}
                    modulosList={[...props.modulos.data]}
                    handleModulo={handleModulo}
                    handleOds={handleOds}
                    handleMedida={handleMedida}
                    handleYear={handleYear}
                    handleTendencia={handleTendencia}
                    handleCobertura={handleCobertura}
                />
                {hasError && <Alert severity='error' sx={{marginBottom: 2}}>Hubo un error</Alert>}
                {isLoading ?
                    Array.from(new Array(3)).map((_, i) => <IndicadorSkeleton key={i} />)
                    :
                    (<>
                        <IndicadorList
                            indicadores={indicadores}
                        />
                        <IndicadorPagination
                            page={page}
                            totalPages={totalPages}
                            handlePagination={handlePagination}
                        />
                    </>)}
            </Container>
        </div>
    );
};

export async function getServerSideProps(context) {
    const baseUrl = process.env.INDICADORES_BASE_URL;
    const modulo = context.params.idModulo;
    const [catalogosRes, modulosRes] = await Promise.all([
        fetch(`${baseUrl}/catalogos`),
        fetch(`${baseUrl}/modulos`),
    ]);
    const [catalogos, modulos] = await Promise.all([
        catalogosRes.json(),
        modulosRes.json(),
    ]);
    return {
        props: {
            modulo,
            catalogos,
            modulos,
        },
    };
}
