import Error from '../../_error'
import Head from "next/head";
import Container from "@mui/material/Container";
import Header from "@components/indicador/Header";
import HistoricalData from "@components/indicador/Historical";
import PageBreadcrumb from "@components/commons/PageBreadcrumb";
import { Stack, Typography } from "@mui/material";
import Owner from '@components/commons/IndicadorOwner';
import Formula from '@components/indicador/Datasheet/Formula';
import Stats from '@components/indicador/Stats';
import { numberWithCommas } from 'helpers/FormatNumbers';
import { IndicadoresRelacionados } from '@components/indicador/IndicadoresRelacionados';


export default function FichaTecnica(props) {
  if (props.errorCode) {
    return <Error statusCode={props.errorCode} message={props?.message} />
  }

  const { indicador } = props;
  const objetivo = indicador.objetivos[0]
  const CRUMBS = [{
    text: 'Sistema de Indicadores del PDU2040 Séptima Actualización',
    href: '/chihuahua-en-datos'
  }, {
    text: `${objetivo.titulo}`,
    href: `/chihuahua-en-datos/objetivos/${objetivo.id}/indicadores`
  }, {
    text: indicador.nombre
  }];

  const unidad = indicador?.unidadMedida || "NA";
  const cobertura = indicador?.cobertura || "NA";

  return (
    <>
      <Head>
        <title>{indicador.nombre}</title>
        <meta name="description" content={indicador.descripcion} />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Container sx={{ mb: 3, mt: { xs: 0, md: 3 } }}>
        <PageBreadcrumb crumbs={CRUMBS} />
        <Stack spacing={6} mt={2}>
          <Header info={indicador} />
          <Stats
            ultimoValor={`${numberWithCommas(indicador.ultimoValorDisponible)}${indicador.adornment !== null ? indicador.adornment : ''}`}
            anioReferencia={indicador.anioUltimoValorDisponible}
            tendencia={indicador.tendenciaActual}
            unidad={unidad.nombre}
            cobertura={cobertura.tipo}
          />
          <section>
            <Typography fontStyle='italic' variant='body2'>{indicador.fuente}</Typography>
          </section>
          {/* TODO: ADD ELI5 SECTION */}
          {
            indicador.formula && (
              <IndicadorPageSection title={indicador.formula.isFormula === 'NO' ? 'Origen de datos' : 'Fórmula'}>
                <Formula formula={indicador.formula} />
              </IndicadorPageSection>
            )
          }
          {
            indicador.historicos.length > 0 && (
              <IndicadorPageSection title='Históricos'>
                <HistoricalData history={indicador} />
              </IndicadorPageSection>
            )
          }
          {
            indicador.related.length > 0 && (
              <IndicadorPageSection title='Indicadores relacionados'>
                <IndicadoresRelacionados indicadores={indicador.related} />
              </IndicadorPageSection>
            )
          }
          {
            indicador.responsable.length > 0 && (
              <IndicadorPageSection title='Responsable'>
                <Owner
                  responsible={indicador.responsable[0]}
                  indicadorDate={indicador.updatedAt}
                  indicadorName={indicador.nombre}
                />
              </IndicadorPageSection>
            )
          }
        </Stack>
      </Container>
    </>
  );
}

const IndicadorPageSection = ({ title, children }) => {
  return (<section>
    <Typography variant='h5' mb={2}>{title}</Typography>
    {children}
  </section>)
}


export async function getServerSideProps(context) {
  const idIndicador = context.params.idIndicador;
  const indicadorRes = await fetch(`${process.env.INDICADORES_BASE_URL}/indicadores/${idIndicador}`);
  const errorCode = indicadorRes.ok ? false : indicadorRes.status;
  const res = await indicadorRes.json();

  if (errorCode) {
    return { props: { errorCode: res.status, message: res.message } }
  }

  return {
    props: { indicador: res.data, errorCode: null },
  };
}
