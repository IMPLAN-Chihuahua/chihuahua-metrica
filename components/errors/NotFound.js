import React from 'react'
import style from './errors.module.css'
// import rocket from './rocket.png'

const NotFound = () => {
    return (
        <div className={`${style.background}`}>
            <section className={style.section}>
                <span className={style.span}></span>
                <span className={style.span}></span>
                <span className={style.span}></span>
                <span className={style.span}></span>
                <span className={style.span}></span>
                <span className={style.span}></span>
            </section>
            <div className={`${style.rocketContainer}`}>
                <div className={`${style.rocket}`}>
                    <div className={`${style.rocketBackground}`}></div>
                    <img src="/images/errors-images/rocket.png" alt="Rocket" className={style.rocketMan} />
                </div>
                <img src="/images/errors-images/base.png" alt="Rocket" className={style.rocketBase} />
            </div>
        </div >
    )
}

export default NotFound