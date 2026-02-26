import Head from "next/head";
import {
    Typography, Box, Stack,
    Collapse, ToggleButton,
    Container,
    FormControlLabel,
    Checkbox,
} from "@mui/material";
import { useState } from "react";
import { useForm, FormProvider, useWatch } from "react-hook-form"
import { CheckCircle, FilterAlt, PanoramaFishEye, } from "@mui/icons-material";
import IndicadoresFilter from "@components/indicador/IndicadorFilter";
import IndicadorList from "@components/indicador/IndicadorList";
import IndicadorPagination from "@components/indicador/IndicadorPagination";
import IndicadorSkeleton from "@components/indicador/IndicadorSkeleton";
import Title from "@components/commons/Title";
import PageBreadcrumb from "@components/commons/PageBreadcrumb";
import NavBackAndFoward from "@components/commons/NavBackAndFoward";
import tinycolor from 'tinycolor2';
import Image from "next/image";
import { hexAsRGBA } from "helpers/StringUtils";
import SearchBar from "@components/commons/SearchBar";
import useIndicadores from "@components/indicador/useIndicadores";

const Indicadores = (props) => {
    const objetivo = props.selectedObjetivo;
    const [open, setOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const methods = useForm({
        temas: [],
        anioUltimoValorDisponible: null,
        ods: null,
        cobertura: null
    });
    const values = useWatch({ control: methods.control });
    const filters = {
        temas: values.temas ? values.temas : null,
        anioUltimoValorDisponible: values.anioUltimoValorDisponible ? new Date(values.anioUltimoValorDisponible).getFullYear() : null,
        ods: values.ods?.id,
        cobertura: values.cobertura?.id
    }
    const { indicadores, isLoading, goToPage, page, totalPages } = useIndicadores({
        resource: 'objetivos',
        resourceId: objetivo.id,
        searchQuery,
        ...filters
    });

    return (
        <>
            <Head>
                <title>{objetivo.titulo} - Indicadores</title>
                <meta name="description" content={objetivo.titulo} />
                <link rel="icon" href="/icon.ico" />
            </Head>
            <Container sx={{ marginTop: 3, marginBottom: 3 }} maxWidth='lg'>
                <IndicadoresPageHeader
                    titulo={objetivo.titulo}
                    descripcion={objetivo.descripcion}
                    urlImagen={objetivo.urlImagen}
                    Breadcrumbs={
                        <PageBreadcrumb crumbs={[{
                            text: 'Sistema de Indicadores del PDU2040 Séptima Actualización',
                            href: '/chihuahua-en-datos'
                        }, {
                            text: `${objetivo.titulo.substring(0, 50)}${objetivo.titulo.length > 50 ? '...' : ''}`,
                        }]} />
                    }
                    Nav={
                        <NavBackAndFoward
                            prev={{
                                title: 'Objetivo anterior',
                                disabled: objetivo.id === 1,
                                link: `/chihuahua-en-datos/objetivos/${objetivo.id - 1}/indicadores`
                            }}
                            next={{
                                title: 'Siguiente objetivo',
                                disabled: objetivo.id === 3,
                                link: `/chihuahua-en-datos/objetivos/${objetivo.id + 1}/indicadores`
                            }}
                        />
                    }
                />
                <section>
                    <Title variant='h5' component='h2'>Indicadores</Title>
                    <FormProvider {...methods}>
                        <Box sx={{ display: 'flex', mb: 1 }}>
                            <SearchBar setSearch={setSearchQuery} />
                            <ToggleButton
                                value='cheked'
                                selected={open}
                                onChange={() => setOpen(old => !old)}
                                sx={{ ml: 3 }}
                            >
                                <FilterAlt />
                            </ToggleButton>
                        </Box>
                        <Collapse in={open} >
                            <IndicadoresFilter />
                        </Collapse>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            gap: 1,
                            m: 2
                        }}>
                            {
                                props.temas.data.map(tema => (
                                    <FormControlLabel
                                        key={tema.id}
                                        control={
                                            <Checkbox
                                                size="small"
                                                icon={<PanoramaFishEye />}
                                                checkedIcon={<CheckCircle />}
                                                value={tema.id}
                                                {...methods.register('temas')}
                                                sx={{
                                                    color: objetivo.color,
                                                    '&.Mui-checked': {
                                                        color: objetivo.color,
                                                    },
                                                }}
                                            />
                                        }
                                        label={<Typography sx={{ fontSize: '17px' }}>{tema.temaIndicador}</Typography>}
                                        sx={{
                                            borderRadius: '50px',
                                            border: `1px solid ${objetivo.color}`,
                                            p: '1px',
                                            pr: '10px',
                                            backgroundColor: hexAsRGBA(objetivo.color, 0.1),
                                        }}
                                    />
                                ))
                            }
                        </Box>
                    </FormProvider>
                    {
                        isLoading ? (
                            Array.from(new Array(4)).map((_, i) => <IndicadorSkeleton key={i} />)
                        ) : (
                            <>
                                <IndicadorList
                                    indicadores={indicadores}
                                    fontColor={tinycolor(objetivo.color).darken(60).toHexString()}
                                />
                                <IndicadorPagination
                                    page={page}
                                    totalPages={totalPages}
                                    handlePagination={goToPage}
                                />
                            </>
                        )
                    }
                </section>
            </Container>
        </>
    )
}


export async function getServerSideProps(context) {
    const baseUrl = process.env.INDICADORES_BASE_URL;
    const { idObjetivo } = context.params;
    const objetivoRes = await fetch(`${baseUrl}/objetivos/${idObjetivo}`);
    const errorCode = objetivoRes.ok ? false : objetivoRes.status;
    const selectedObjetivo = await objetivoRes.json();

    if (errorCode) {
        return {
            props: {
                errorCode,
                ...selectedObjetivo
            }
        }
    }
    const objetivosRes = await fetch(`${baseUrl}/objetivos/${idObjetivo}/temas`);
    const temas = await objetivosRes.json()
    return {
        props: {
            errorCode,
            key: idObjetivo,
            temas,
            selectedObjetivo: { ...selectedObjetivo.data }
        },
    };
};

export const IndicadoresPageHeader = ({ titulo, Nav, Breadcrumbs, urlImagen, descripcion }) => {
    return (
        <Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: { xs: 'flex-end', lg: 'space-between' },
                    paddingTop: 1,
                    paddingBottom: 1,
                    alignItems: 'center'
                }}>
                {Breadcrumbs}
                {Nav}
            </Box>
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                my={{ xs: 1, md: 3 }}
                spacing={4}
                justifyContent='space-around'
            >
                <Box
                    sx={{
                        minWidth: { xs: '100%', sm: 500, md: 400 },
                        maxWidth: 400,
                        height: 250,
                        position: 'relative',
                        alignSelf: { xs: 'center', md: 'flex-start' },
                        // --- CAMBIO PARA VERSATILIDAD ---
                        backgroundColor: '#f5f5f5', // Gris muy claro (neutro)
                        border: '1px solid #e0e0e0', // Borde sutil
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        boxShadow: '0px 2px 8px rgba(0,0,0,0.05)'
                    }}>

                    {/* Contenedor de la imagen: Ajustamos el tamaño para que no toque los bordes */}
                    <Box
                        sx={{
                            minWidth: { xs: '100%', sm: 500, md: 400 },
                            maxWidth: 400,
                            height: 250,
                            position: 'relative',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            boxShadow: 3,
                        }}>
                        <Image
                            loader={(val) => val.src}
                            src={urlImagen}
                            layout='fill'
                            objectFit='cover' // Aquí sí usamos cover para que llene todo
                            priority
                        />
                        {/* Overlay oscuro solo en la base para el texto */}
                        <Box sx={{
                            position: 'absolute',
                            bottom: 0,
                            width: '100%',
                            height: '40%',
                            background: 'linear-gradient(transparent, rgba(0,0,0,0.4))',
                            display: 'flex',
                            alignItems: 'flex-end',
                            p: 1
                        }} />
                    </Box>
                </Box>

                <Box
                    sx={{
                        flex: 1,
                        wordWrap: 'break-word',
                        alignSelf: 'flex-start'
                    }}>
                    <Title
                        variant='h4'
                        component='h1'
                        sx={{ fontWeight: 600, mb: 1, color: '#1A1A1A' }}
                    >
                        {titulo}
                    </Title>
                    <Typography
                        sx={{ color: '#444', lineHeight: 1.7, fontSize: '1.1rem' }}
                    >
                        {descripcion}
                    </Typography>
                </Box>
            </Stack>
        </Box>
    )
}

export default Indicadores