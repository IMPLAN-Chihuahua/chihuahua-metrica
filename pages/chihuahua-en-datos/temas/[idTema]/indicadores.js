import Head from "next/head";
import {
  Box,
  Collapse, ToggleButton,
  Container,
} from "@mui/material";
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form"
import { FilterAlt, } from "@mui/icons-material";
import IndicadoresFilter from "@components/indicador/IndicadorFilter";
import IndicadorList from "@components/indicador/IndicadorList";
import IndicadorPagination from "@components/indicador/IndicadorPagination";
import IndicadorSkeleton from "@components/indicador/IndicadorSkeleton";
import Title from "@components/commons/Title";
import PageBreadcrumb from "@components/commons/PageBreadcrumb";
import NavBackAndFoward from "@components/commons/NavBackAndFoward";
import tinycolor from 'tinycolor2';
import { IndicadoresPageHeader } from "pages/chihuahua-en-datos/objetivos/[idObjetivo]/indicadores";
import useIndicadores from "@components/indicador/useIndicadores";
import SearchBar from "@components/commons/SearchBar";

export default function Tema(props) {
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);
  const methods = useForm();
  const tema = props.selectedTema;
  const { indicadores, isLoading, page, totalPages, goToPage } = useIndicadores({
    resource: 'temas',
    resourceId: props.selectedTema.id
  })

  const activeIds = [2, 4, 5, 6, 7, 9, 10];
  const currentIndex = activeIds.indexOf(tema.id);
  const prevId = currentIndex > 0 ? activeIds[currentIndex - 1] : null;

  const nextId = (currentIndex !== -1 && currentIndex < activeIds.length - 1)
    ? activeIds[currentIndex + 1]
    : null;

  return (
    <>
      <Head>
        <title>{tema.temaIndicador} - Indicadores</title>
        <meta name="description" content={tema.descripcion} />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Container maxWidth="lg" sx={{ mb: 3, mt: 3 }}>
        <IndicadoresPageHeader
          titulo={tema.temaIndicador}
          descripcion={tema.descripcion}
          urlImagen={tema.urlImagen}
          Breadcrumbs={
            <PageBreadcrumb crumbs={[{
              text: `${tema.temaIndicador.substring(0, 50)}${tema.temaIndicador.length > 50 ? '...' : ''}`,
            }]} />
          }
          Nav={
            <NavBackAndFoward
              prev={{
                title: 'Tema anterior',
                disabled: !prevId,
                link: prevId ? `/chihuahua-en-datos/temas/${prevId}/indicadores` : '#'
              }}
              next={{
                title: 'Siguiente tema',
                disabled: !nextId,
                link: nextId ? `/chihuahua-en-datos/temas/${nextId}/indicadores` : '#'
              }}
            />
          }
        />
        <section>
          <Title variant='h4' component='h2'>Indicadores</Title>
          <FormProvider {...methods}>
            <Box sx={{ display: 'flex', mb: 3 }}>
              <SearchBar setSearch={setSearch} />
              <ToggleButton
                value='cheked'
                selected={open}
                onChange={() => setOpen(old => !old)}
                sx={{ ml: 3 }}
              >
                <FilterAlt />
              </ToggleButton>
            </Box>
            <Collapse in={open}>
              <IndicadoresFilter />
            </Collapse>
          </FormProvider>
          {
            isLoading ? (
              Array.from(new Array(4)).map((_, i) => <IndicadorSkeleton key={i} />)
            ) : (
              <>
                <IndicadorList
                  indicadores={indicadores}
                  fontColor={tinycolor(tema.color).darken(60).toHexString()}
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
  );
};

export async function getServerSideProps(context) {
  const baseUrl = process.env.INDICADORES_BASE_URL;
  const { idTema } = context.params;
  const selectedTemaRes = await fetch(`${baseUrl}/temas/${idTema}`);
  const errorCode = selectedTemaRes.ok ? false : selectedTemaRes.status;
  const selectedTema = await selectedTemaRes.json();
  if (errorCode) {
    return {
      props: {
        errorCode,
        ...selectedTema
      }
    }
  }

  const [temasRes]
    = await Promise.all([
      fetch(`${baseUrl}/temas`)
    ]);

  const [temas] = await Promise.all([
    temasRes.json(),
  ]);
  return {
    props: {
      errorCode,
      key: idTema,
      selectedTema: { ...selectedTema.data }
    },
  };
};
