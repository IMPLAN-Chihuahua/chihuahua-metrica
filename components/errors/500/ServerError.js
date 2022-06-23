import { Button } from '@mui/material'
import React, { useState } from 'react'
import style from './error500.module.css'

const ServerError = () => {
    const [goingHome, setGoingHome] = useState(false)

    const handleClick = () => {
        setGoingHome(!goingHome)
    };


    // let c = document.getElementById("c");
    // let ctx = c.getContext("2d");

    // //making the canvas full screen
    // c.height = window.innerHeight;
    // c.width = window.innerWidth;

    // //chinese characters - taken from the unicode charset
    // let binary = "010101010101010101010101010101010101";
    // binary = binary.split("");

    // let font_size = 10;
    // let columns = c.width / font_size; //number of columns for the rain
    // //an array of drops - one per column
    // let drops = [];
    // //x below is the x coordinate
    // //1 = y co-ordinate of the drop(same for every drop initially)
    // for (let x = 0; x < columns; x++)
    //     drops[x] = 1;

    // function draw() {
    //     //Black BG for the canvas
    //     //translucent BG to show trail
    //     ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    //     ctx.fillRect(0, 0, c.width, c.height);

    //     ctx.fillStyle = "#0F0"; //green text
    //     ctx.font = font_size + "px arial";
    //     //looping over drops
    //     for (var i = 0; i < drops.length; i++) {
    //         //a random chinese character to print
    //         var text = binary[Math.floor(Math.random() * binary.length)];
    //         //x = i*font_size, y = value of drops[i]*font_size
    //         ctx.fillText(text, i * font_size, drops[i] * font_size);

    //         //sending the drop back to the top randomly after it has crossed the screen
    //         //adding a randomness to the reset to make the drops scattered on the Y axis
    //         if (drops[i] * font_size > c.height && Math.random() > 0.975)
    //             drops[i] = 0;

    //         //incrementing Y coordinate
    //         drops[i]++;
    //     }
    // }

    // setInterval(draw, 45);

    return (
        <div className={`${style.background500}`}>
            <canvas id="c"></canvas>
            <div className={`${style.laptopContainer}`}>
                <img src="/images/errors-images/LAP-01.png" alt="Laptop" className={style.laptop} />
                <div className={`${style.gearsContainer}`}>
                    <div className={`${style.loading}`}>
                        <div className={`${style.gears}`}>
                            <div className={`${style.gear} ${style.one}`}>
                                <div className={`${style.bar}`}></div>
                                <div className={`${style.bar}`}></div>
                                <div className={`${style.bar}`}></div>
                            </div>
                            <div className={`${style.gear} ${style.two}`}>
                                <div className={`${style.bar}`}></div>
                                <div className={`${style.bar}`}></div>
                                <div className={`${style.bar}`}></div>
                            </div>
                            <div className={`${style.gear} ${style.three}`}>
                                <div className={`${style.bar}`}></div>
                                <div className={`${style.bar}`}></div>
                                <div className={`${style.bar}`}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}


export default ServerError;