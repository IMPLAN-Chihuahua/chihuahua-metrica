import { Button } from '@mui/material'
import React, { useState } from 'react'
import style from './error404.module.css'
// import rocket from './rocket.png'

const NotFound = () => {
    const [goingHome, setGoingHome] = useState(false)

    const handleClick = () => {
        setGoingHome(!goingHome)
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
                <Button variant='contained' onClick={handleClick}>
                    {goingHome.toString()}
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