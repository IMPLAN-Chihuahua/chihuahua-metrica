import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container } from '@mui/material';
import { useState } from 'react';

const data = [
  {
    id: 'q1',
    question: '¿Cuál es la periodicidad de actualización de los indicadores?',
    answer: 'La frecuencia de actualización de los datos de los indicadores depende de la periodicidad y disponibilidad de los datos que los organismos ofrecen.',
  },
  {
    id: 'q2',
    question: '¿Cómo debo de referenciar la fuente de los datos en Chihuahua Métrica?',
    answer: `Para referenciar los datos contenidos en los indicadores, la fuente de información se encuentra indicada después de las variables de la fórmula. 
    <br />
    Para referenciar alguno de los proyectos contenido en la plataforma, como Chihuahua en Datos o Arbolado Urbano, deberás escribirlo de manera en que menciones lo siguiente: 

    <ul> 
    <li> 
    IMPLAN (2022). Chihuahua Métrica: Chihuahua en Datos. En https://www.chihuahuametrica.online/chihuahua-en-datos
    </li>
    <li> 
    IMPLAN (2022). Chihuahua Métrica: Censo del Arbolado. En https://www.chihuahuametrica.online/arbolado-urbano
    </li>
`,
  },
  {
    id: 'q3',
    question: '¿Cómo me puedo contactar con el monitor de un indicador?',
    answer: 'Al visualizar a detalle cada indicador, en la parte inferior se encuentra el contacto de la persona responsable de monitorear y actualizar el indicador. Las actualizaciones dependen de la periodicidad y disponibilidad de los datos de cada una de sus fuentes.',
  },
  {
    id: 'q4-1',
    question: '¿Cuál es la zona metropolitana/área metropolitana de Chihuahua?',
    answer: `El Sistema urbano Nacional establecido en el año 2010 por la SEDESOL (actualmente SEDATU) en conjunto con la CONAPO y el INEGI, en su documento “Delimitación de las zonas metropolitanas de México” define como zona metropolitana al <b>conjunto de dos o más municipios donde se localiza una ciudad de 50 mil o más habitantes, cuya área urbana, funciones y actividades rebasan el límite del municipio que originalmente la contenía, incorporando como parte de sí misma o de su área de influencia directa a municipios vecinos, predominantemente urbanos, con los que mantiene un alto grado de integración socioeconómica.</b> También se incluyen a aquellos municipios que por sus características particulares son relevantes para la planeación y política urbanas de las zonas metropolitanas en cuestión.
    <br/>
    <br/>
    Adicionalmente, se define como zonas metropolitanas <b>a todos aquellos municipios que contienen una ciudad de un millón o más habitantes, así como aquellos con ciudades de 250 mil o más habitantes que comparten procesos de conurbación con ciudades de Estados Unidos de América.</b>
    <br/>
    En términos de la Ley de Asentamientos Humanos, Ordenamiento Territorial y Desarrollo Urbano del Estado de Chihuahua (Nueva Ley POE 2021.10.02/No. 7), Artículo 7, Definiciones, LXXXV. <b>El área metropolitana se conforma por centros de población, ubicados en el territorio de dos o más municipios que, por su complejidad, interacciones, relevancia social y económica, conforman una unidad territorial de influencia dominante y revisten importancia estratégica para el desarrollo estatal y/o nacional.</b>
    <br/>
    <br/>
    <b>La Zona Metropolitana de Chihuahua se compone de los municipios de Aquiles Serdán, Aldama y Chihuahua, siendo Chihuahua,</b> en el periodo 2010-2018 presentaba una Tasa Media de Crecimiento Anual de 1.31%. 
    <br/>
    <br/>
    <b>Es necesario diferenciar la zona metropolitana de la zona conurbada de Chihuahua, esta última está conformada por la superficie que ocupan con los centros de población Chihuahua, Aldama y Aquiles Serdán.</b>
    `
  },
  {
    id: 'q4-2',
    question: '¿Qué es un centro de población?',
    answer: `
    La Ley General de Asentamientos Humanos, Ordenamiento Territorial y Desarrollo Urbano, artículo 3.VI. define a los Centros de Población como las <b>áreas constituidas por las zonas urbanizadas y las que se reserven para su expansión.</b>
    En términos de la Ley de Asentamientos Humanos, Ordenamiento Territorial y Desarrollo Urbano del Estado de Chihuahua (Nueva Ley POE 2021.10.02/No. 7), Artículo 7, Definiciones, XLVIII. <b>Los límites de centro de población se refieren a la superficie comprendida por las zonas urbanizadas, zonas de conservación y preservación ecológica y las zonas urbanizables que se reserven para su expansión, conforme a los planes de desarrollo urbano municipales y de centros de población vigentes.</b> Tales límites de centro de población también pueden definirse en los fundos legales existentes. 
    <br/>
    <br/>
    En el caso particular de la ciudad de Chihuahua, el centro de población (CP) fue definido a partir de su primera dotación con una superficie 3,374.83 ha. Posteriormente han ocurrido cuatro ampliaciones al fundo legal, en la primera el CP aumento a 6,787.01 ha publicada en el POE No. 64 el 10 de agosto de 1960; en la segunda el CP aumento su superficie a 23,392.90 ha publicada en el POE No. 81 el 10 de octubre de 1989; en la tercera el CP aumentó a 78,099.06 ha publicada en el POE 639-00-IPO el 29 de noviembre del 2000; y en su cuarta ampliación, la superficie del CP creció a 78,289,38 ha de acuerdo con la publicación en el anexo 94 del POE con fecha del 24 de noviembre 2001.
    `,
  },
  {
    id: 'q4-3',
    question: '¿Qué es el área y crecimiento urbanos?',
    answer: `
    La Ley General de Asentamientos Humanos, Ordenamiento Territorial y Desarrollo Urbano, artículo 3.III <b>define como área urbanizada al territorio ocupado por los Asentamientos Humanos con redes de infraestructura, equipamientos y servicios;</b>
    <br/>
    En términos de la Ley de Asentamientos Humanos, Ordenamiento Territorial y Desarrollo Urbano del Estado de Chihuahua (Nueva Ley POE 2021.10.02/No. 7), Artículo 7, Definiciones, V. <b>El área urbana corresponde a la superficie que contiene el espacio físico del territorio de los centros de población en donde un conglomerado demográfico de más de dos mil quinientos habitantes lleva a cabo procesos sociales y económicos en un medio natural adaptado para el desarrollo de la vida comunitaria.</b>
    <br/>
    <br/>
    En el caso particular de Chihuahua el crecimiento urbano se monitorea mediante el registro de los cambios físicos de la urbanización que son visibles a través de la fotointerpretación con imágenes satelitales y aéreas recientes de un periodo específico. Se consideran varios criterios como la superficie del crecimiento urbano del año previo, el nivel de consolidación urbana y, al registrarse como un continuo, se incluyen las áreas de preservación que puedan existir al interior del área urbana. <b>En el 2021 se detectaron <i>27,970.89 ha</i> de crecimiento urbano.</b>
    `,
  },
  {
    id: 'q5',
    question: '¿Cómo puedo contribuir a la plataforma?',
    answer: 'De manera técnica, puedes realizar contribuciones directamente en el <a href="https://github.com/IMPLAN-Chihuahua/observatorio-urbano-website" style="color: #31416F; font-weight: bold;">repositorio del sitio web</a>. Uno de nuestros desarrolladores verificará tus contribuciones y en caso de que pase los filtros, lo añadiremos al proyecto. Si deseas contribuir con información o aclaraciones respecto a los datos del sitio web, puedes <a href="mailto:chihuahuametrica@implanchihuahua.org" style="color: #31416F; font-weight: bold;">enviar un correo</a> con tus comentarios.',
  },
  {
    id: 'q6',
    question: '¿Cómo utilizo el repositorio del Censo del Arbolado?',
    answer: 'Para obtener el código fuente y utilizar la aplicación del Censo del Arbolado, puedes clonar el <a href="https://github.com/mittrees/Treepedia_Public" style="color: #31416F; font-weight: bold;">proyecto en GitHub</a> y tener una copia local en tu equipo de cómputo. Para ejecutar el proyecto será necesario que cuentes con Android Studio.',
  },
  {
    id: 'q7',
    question: '¿Puedo construir mi propia aplicación con base en los datos de la plataforma?',
    answer: '¡Sí! Al ser una aplicación de código abierto, puedes utilizar nuestra REST API para construir tu aplicación propia. Si tienes dudas sobre cómo consumir la API consulta nuestra <a href="http://localhost:8080/api/v1/documentation/" style="color: #31416F; font-weight: bold;">documentación</a>.',
  }
];



const Summary = () => {


  const faq = data.map(({ id, question, answer }) => {
    return (

      <Accordion key={id} elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id={id}
          sx={
            [
              {
                '&:hover': {
                  backgroundColor: 'rgb(49,154,197,0.1)'
                }
              }
            ]
          }

        >
          <Typography
            variant='button'
            display='block'
            gutterBottom
            sx={{
              fontWeight: 'bold',
            }}>
            {question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{
          color: '#4b4453'
        }}>
          <Typography>
            <div dangerouslySetInnerHTML={{ __html: answer }}></div>
          </Typography>
        </AccordionDetails>
      </Accordion>

    );
  })
  return faq;
};

const QuestionsContent = () => {
  return (
    <Summary />
  )
}

export default QuestionsContent;
