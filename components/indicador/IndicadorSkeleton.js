import Skeleton from "@mui/material/Skeleton";
import Grid from '@mui/material/Grid';

const IndicadorSkeleton = () => {
    return (<>
        <Grid container direction='row' spacing={1} alignItems='center' marginTop={2}>
            <Grid item>
                <Skeleton
                    marginTop={1}
                    animation='pulse'
                    variant='rectangular'
                    width={100}
                    height={100}
                    sx={{ borderRadius: 3 }}
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