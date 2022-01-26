import Skeleton from "@mui/material/Skeleton";
import Grid from '@mui/material/Grid';

const IndicadorSkeleton = () => {
    return (<>
        <Grid container direction='row' spacing={1} alignItems='center' sx={{marginTop: 2}}>
            <Grid item>
                <Skeleton
                    animation='pulse'
                    variant='rectangular'
                    width={100}
                    height={100}
                    sx={{ borderRadius: 3, marginTop: 1 }}
                />
            </Grid>
            <Grid item container xs direction='column' flexGrow={1}>
                <Skeleton
                    animation='pulse'
                    variant='text'
                    sx={{ marginBottom: 1 }} />
                <Skeleton
                    animation='pulse'
                    variant='rectangular'
                    height={120} />
            </Grid>
        </Grid>
    </>);
}

export default IndicadorSkeleton;