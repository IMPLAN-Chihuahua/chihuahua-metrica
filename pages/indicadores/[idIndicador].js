import {Container} from "@mui/material";

import MapButton from "@components/indicador/Datasheet/MapButton";
import TopData from "@components/indicador/Datasheet/TopData";
import DataSheet from "@components/indicador/Datasheet/DataSheet";
import GraphBox from "@components/indicador/Datasheet/GraphBox";

export default function FichaTecnica(props) {
  const data = props.data;
  return (
    <>
      <Container>
        <style jsx>
          {`
            .formulaText {
              font-size: 2rem;
              font-weight: bold;
              color: white;
              margin-top: 10px;
              margin-bottom: 10px;
              overflow-x: auto;
              overflow-y: hidden;
              height: 80px;
            }
            /* width */
            ::-webkit-scrollbar {
              width: 10px;
            }
            
            /* Track */
            ::-webkit-scrollbar-track {
              background: rgba(241, 241, 241, 0.1);
            }

            /* Handle */
            ::-webkit-scrollbar-thumb {
              background: #888;
              background: rgba(136, 136, 136, 0.4);
            }

            /* Handle on hover */
            ::-webkit-scrollbar-thumb:hover {
              background: rgba(85, 85, 85, 0.4);
            }
          `}
        </style>
        <TopData info={data}/>
        <DataSheet datasheet={data}/>
        <GraphBox history={data}/>
        <MapButton hasMap={data.mapa}/>
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
