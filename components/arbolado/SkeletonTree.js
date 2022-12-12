import { Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Skeleton } from '@mui/material'
import React from 'react'
import style from './CardTree.module.css';

const SkeletonTree = () => {
    const arrayEightPositions = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <>
            {
                arrayEightPositions.map((item) => {
                    return (
                        <Grid item xs={12} md={3} className={style.CardTreeFlex} key={item}>
                            <Card>
                                <CardActionArea>

                                    <CardMedia
                                        sx={{
                                            height: 500,
                                            width: 400,
                                            maxHeight: { xs: 500, md: 400 },
                                            maxWidth: { xs: 500, md: 400 }
                                        }}
                                    >
                                        <Skeleton variant="rectangular" width={500} height={500} />
                                    </CardMedia>

                                    <CardContent>
                                        {/* Make an h5 skeleton */}
                                        <Skeleton variant="text" sx={{ fontSize: '1.2rem' }} />
                                        {/* Make an h6 skeleton */}
                                        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                                        {/* Make an h6 skeleton */}
                                        <Skeleton variant="text" sx={{ fontSize: '0.8rem' }} />

                                    </CardContent>

                                    <CardActions>
                                        <Skeleton variant="text" sx={{ fontSize: '0.8rem' }} />
                                    </CardActions>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    )
                }
                )
            }

        </>
    )
}

export default SkeletonTree