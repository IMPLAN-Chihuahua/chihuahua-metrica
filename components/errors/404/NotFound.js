import { Button } from '@mui/material'
import Link from 'next/link'
import React, { useState } from 'react'
import style from './error404.module.css'
import { useRouter } from 'next/router'
// import rocket from './rocket.png'

const NotFound = () => {
    const [goingHome, setGoingHome] = useState(false)
    const router = useRouter();

    const handleClick = () => {
        setGoingHome(!goingHome)
        setTimeout(() => {
            router.push('/')
        }, 2500)
    };

    return (
        <div className={`${style.background404}`}>
            <section className={style.section}>
                <span className={style.span}></span>
                <span className={style.span}></span>
                <span className={style.span}></span>
                <span className={style.span}></span>
                <span className={style.span}></span>
                <span className={style.span}></span>
            </section>

            <div className={`${style.rocketContainer}`}>
                <Button variant='outlined' onClick={handleClick} className={style.goHome}>
                    Ir a casa
                </Button>
                <div className={`${goingHome ? style.rocketGoesWuWu : style.rocket}`}>
                    <div className={`${style.rocketBackground}`}></div>
                    <img src="/images/errors-images/rocket.png" alt="Rocket" className={style.rocketMan} />
                </div>
                <img src="/images/errors-images/base.png" alt="Rocket" className={style.rocketBase} />
            </div>
        </div >
    )
}

export default NotFound