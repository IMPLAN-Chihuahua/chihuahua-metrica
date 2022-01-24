import Head from "next/head";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import IndicadorFilter from "@components/indicador/IndicadorFilter";
import IndicadorList from "@components/indicador/IndicadorList";
import IndicadorPagination from "@components/indicador/IndicadorPagination";

export default function Modulo(props) {
    const [isLoading, setLoading] = useState(false);
    const [modulo, setModulo] = useState(props.modulo);
    const [indicadores, setIndicadores] = useState(props.indicadores.data);
    const [filtros, setFiltros] = useState('');
    const [page, setPage] = useState(props.indicadores.page);
    const [totalPages, setTotalPages] = useState(props.indicadores.totalPages);
    const getURL = (params) => {
        return `${process.env.INDICADORES_BASE_URL}/modulos/${modulo}/${params}`;
    };

    const fetchIndicadores = (params) => {
        fetch(getURL(params))
            .then(res => res.json())
            .then(indicadores => {
                setLoading(false);
                setIndicadores(indicadores.data);
                setTotalPages(indicadores.total_pages);
            });
    };

    useEffect(() => {
        setLoading(true);
        fetchIndicadores(`indicadores?page=${page}`);
    }, [page, modulo]);

    const handlePagination = (event, value) => {
        setPage(value);
    };

    const handleModulo = (event, value) => {
        if (value === null) {
            setModulo(props.modulo);
        } else {
            setModulo(value.id)
        }
    } 

    return (
        <div>
            <Head>
                <title>Indicadores</title>
                <meta name="description" content="Generated by create next app" />
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
                />
                {isLoading ? <p>Loading...</p> :
                    <>
                        <IndicadorList indicadores={indicadores} />
                        <IndicadorPagination
                            page={page}
                            totalPages={totalPages}
                            handlePagination={handlePagination} />
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