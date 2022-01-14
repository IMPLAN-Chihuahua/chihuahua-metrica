import Base from '@components/ProjectCard/Base';
import { Grid, Link } from '@mui/material';

const JSON = [
    {
        title: 'Microme',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin nisl et finibus convallis. Nulla id ultricies dui. Nulla facilisi. Nunc gravida lorem ultricies, pretium arcu sed, euismod massa. Cras non tellus velit. Sed hendrerit quis turpis vitae ornare. Praesent erat ex, malesuada viverra odio ultrices, suscipit convallis nibh. In hac habitasse platea dictumst. Quisque vestibulum ut nisl a scelerisque. Curabitur sit amet auctor quam. Maecenas sed pretium justo. Praesent gravida massa euismod consectetur tincidunt. Donec nec scelerisque leo, eget sodales justo.',
        url: 'indicador'
    },
    {
        title: 'Papi bowser',
        body: 'Moc moc',
        url: 'indicador2'
    },
    {
        title: 'www',
        body: 'Heheeeee',
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