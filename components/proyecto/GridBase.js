import Base from '@components/proyecto/Base';
import Grid from '@mui/material/Grid';

const JSON = [
    {
        title: 'Indicadores',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin nisl et finibus convallis. Nulla id ultricies dui. Nulla facilisi. Nunc gravida lorem ultricies, pretium arcu sed, euismod massa. Cras non tellus velit. Sed hendrerit quis turpis vitae ornare.',
        url: 'proyecto-indicadores'
    },
    {
        title: 'Proyecto 2',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin nisl et finibus convallis. Nulla id ultricies dui. Nulla facilisi. Nunc gravida lorem ultricies, pretium arcu sed, euismod massa. Cras non tellus velit. Sed hendrerit quis turpis vitae ornare.',
        url: 'indicador2'
    },
    {
        title: 'Proyecto 3',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin nisl et finibus convallis. Nulla id ultricies dui. Nulla facilisi. Nunc gravida lorem ultricies, pretium arcu sed, euismod massa. Cras non tellus velit. Sed hendrerit quis turpis vitae ornare.',
        url: 'indicador3'
    },
]

const GridBase = () => {
    return (
        <div>
            <Grid container spacing={3}>
                {
                JSON.map( ({title, body, url}) => {
                    return (
                        <Grid key={url} item xs={12} md={4}>
                            <Base title={title} body={body} url={url}/>
                        </Grid>
                        )
                    })
                }
            </Grid>
        </div>
    );
}

export default GridBase;