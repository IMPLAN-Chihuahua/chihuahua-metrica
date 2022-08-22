import Title from '@components/commons/Title'
import { Avatar, Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

import style from './TextWithAvatar.module.css'

const TextWithAvatar = ({ children, flexDirection, avatar, subtext, header }) => {
    return (
        <Box className={`${style.bodyContainer} ${header ? style.header : undefined}`} sx={{ flexDirection: flexDirection, mb: 1 }}>
            <Avatar src={avatar} className={`${style.imageContainer}`} sx={{ width: 100, height: 100 }} />
            <Box className={`${style.bodyText}`}>
                <Title variant='h5' component='h5' color='var(--darker-green)'>{children}</Title>
                <Typography variant='h6' component='p' color='var(--soft-black)'>
                    <b>
                        {subtext}
                    </b>
                </Typography>
            </Box>
        </Box>
    )
}

export default TextWithAvatar