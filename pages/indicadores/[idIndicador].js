import Container from "@mui/material/Container";
import MapButton from "@components/indicador/Datasheet/MapButton";
import TopData from "@components/indicador/Datasheet/TopData";
import DataSheet from "@components/indicador/Datasheet/DataSheet";
import GraphBox from "@components/indicador/Datasheet/GraphBox";

export default function FichaTecnica(props) {
  const data = props.data;

  return (
    <>
      <Container>
        <TopData info={data} />
        <DataSheet datasheet={data} />
        <GraphBox history={data} />
        <MapButton mapa={data.Mapa} />
      </Container>
    </>
  );
}

export async function getServerSideProps(context) {
  const idIndicador = context.params.idIndicador;
  const res = await fetch(
    `${process.env.INDICADORES_BASE_URL}/indicadores/${idIndicador}`
  );

  const data = await res.json();
  if (res.status === 200) {
    return {
      props: { ...data },
    };
  } else {
    return {
      props: {
        data: [],
      },
    };
  }
}
