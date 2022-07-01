import Title from '@components/commons/Title'
import { Avatar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import React from 'react'

import style from './TextWithAvatar.module.css'

const TextWithAvatar = ({ children, flexDirection, avatar, subtext }) => {
    return (
        <Box className={`${style.bodyContainer}`} sx={{ flexDirection: flexDirection }}>
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