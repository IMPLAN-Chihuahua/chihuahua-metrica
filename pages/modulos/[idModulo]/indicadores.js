import Head from "next/head";
import Container from "@mui/material/Container";
import Skeleton from "@mui/material/Skeleton";
import { useEffect, useState } from "react";
import IndicadorFilter from "@components/Indicador/IndicadorFilter";
import IndicadorList from "@components/Indicador/IndicadorList";
import IndicadorPagination from "@components/Indicador/IndicadorPagination";
import IndicadorSkeleton from "@components/Indicador/IndicadorSkeleton";

export default function Modulo(props) {
    const [isLoading, setLoading] = useState(false);
    const [modulo, setModulo] = useState(props.modulo);
    const [indicadores, setIndicadores] = useState(props.indicadores.data);
    const [filtros, setFiltros] = useState('');
    const [page, setPage] = useState(props.indicadores.page);
    const [totalPages, setTotalPages] = useState(props.indicadores.totalPages);
    const [ods, setOds] = useState(null);
    const [medida, setMedida] = useState(null);
    const [year, setYear] = useState(null);
    const [cobertura, setCobertura] = useState(null);
    const [tendencia, setTendencia] = useState(null);

    const getURL = (params) => {

        return `${process.env.INDICADORES_BASE_URL}/modulos/${modulo}/${params}`;
    };

    const fetchIndicadores = (params) => {

        fetch(getURL(params))
            .then(res => res.json())
            .then(indicadores => {
                setTimeout(() => {
                    setLoading(false);
                }, 500);
                setIndicadores(indicadores.data);
                setTotalPages(indicadores.total_pages);
            });
    };

    useEffect(() => {
        let filters = '';
        setLoading(true);

        if (ods) {
            filters += '&idOds=' + ods;
        }

        if (medida) {
            filters += '&idUnidadMedida=' + medida;
        }

        if (year) {
            filters += '&anioUltimoValorDisponible=' + year;
        }

        if (cobertura) {
            filters += '&idCobertura=' + cobertura;
        }

        if (tendencia) {
            filters += '&tendenciaActual=' + tendencia;
        }

        fetchIndicadores(`indicadores?page=${page}${filters}`);

    }, [page, modulo, ods, medida, year, cobertura, tendencia]);

    const handlePagination = (event, value) => {
        setPage(value);
    };

    const handleModulo = (_, value) => setModulo(value === null ? props.modulo : value.id);
    const handleOds = (_, value) => setOds(value === null ? '' : value.id);
    const handleMedida = (_, value) => setMedida(value === null ? '' : value.id);
    const handleYear = (_, value) => setYear(value === null ? '' : value);
    const handleTendencia = (_, value) => setTendencia(value === null ? '' : value);
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
                {

                    isLoading ?
                        Array.from(new Array(3)).map((_, i) => <IndicadorSkeleton key={i} />)
                        :
                        <>
                            <IndicadorList indicadores={indicadores} />
                            <IndicadorPagination
                                page={page}
                                totalPages={totalPages}
                                handlePagination={handlePagination}
                            />
                        </>
                }
            </Container>
        </div>
    );
}

export async function getServerSideProps(context) {
    const baseUrl = process.env.INDICADORES_BASE_URL;
    const modulo = context.params.idModulo;
    const [indicadoresRes, catalogosRes, modulosRes] = await Promise.all([
        fetch(`${baseUrl}/modulos/${modulo}/indicadores`),
        fetch(`${baseUrl}/catalogos`),
        fetch(`${baseUrl}/modulos`),
    ]);
    const [indicadores, catalogos, modulos] = await Promise.all([
        indicadoresRes.json(),
        catalogosRes.json(),
        modulosRes.json(),
    ]);
    return {
        props: {
            modulo,
            catalogos,
            modulos,
            indicadores
        },
    };
}
