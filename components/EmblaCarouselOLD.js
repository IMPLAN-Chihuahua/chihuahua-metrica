import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { useState, useEffect, useCallback } from "react";
import Autoplay from 'embla-carousel-autoplay'

const DotButton = ({ selected, onClick }) => (
  <button
    className={`embla__dot ${selected ? "is-selected" : ""}`}
    type="button"
    onClick={onClick}
  />
);

const EmblaCarousel = () => {
  const [scrollSnaps, setScrollSnaps] = useState([]);
    const options = { delay: 300} // Options
    const autoplayRoot = (emblaRoot) => emblaRoot.parentElement // Root node
    const autoplay = Autoplay(options, autoplayRoot)
   
    const [emblaRef, emblaApi] = useEmblaCarousel({
      align: "start",
      loop: true,
      skipSnaps: false,
      inViewThreshold: 0.7,
    },[Autoplay()])

    const scrollPrev = useCallback(() => {
      if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])
  
    const scrollNext = useCallback(() => {
      if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])
    
    const route = '/Banner/'
    const items = [
      {
          name: "banner-01",
          description: "description #1",
          url: `${route}banner-01.png`
      },
      {
          name: "banner-02",
          description: "description #2",
          url: `${route}banner-02.png`
     
      },
      {
          name: "banner-03",
          description: "description #3",
          url: `${route}banner-03.png`
     
      }
  ]

  return (
    <>
    <style jsx>
    {`
    .embla {
        overflow: hidden;
      }
      
      .embla__container {
        display: flex;
      }
      .embla__slide {
        position: relative;
        flex: 0 0 100%;
      }
      .embla__image {
        width: 100%;
      }
      .embla__button {
        outline: 0;
        cursor: pointer;
        background-color: transparent;
        touch-action: manipulation;
        position: absolute;
        z-index: 1;
        top: 50%;
        transform: translateY(-50%);
        border: 0;
        width: 40px;
        height: 40px;
        justify-content: center;
        align-items: center;
        fill: #263044;
        padding: 0;
      }
      
      .embla__button:disabled {
        cursor: default;
        opacity: 0.3;
      }
      
      .embla__button__svg {
        width: 100%;
        height: 100%;
      }
      
      .embla__button--prev {
        left: 5px;
      }
      
      .embla__button--next {
        right: 5px;
      }
      .embla__dots {
        display: flex;
        list-style: none;
        justify-content: center;
        padding-top: 10px;
      }
      
      .embla__dot {
        background-color: transparent;
        cursor: pointer;
        position: relative;
        padding: 0;
        outline: 0;
        border: 0;
        width: 30px;
        height: 30px;
        margin-right: 7.5px;
        margin-left: 7.5px;
        display: flex;
        align-items: center;
      }
      
      .embla__dot:after {
        background-color: #efefef;
        width: 100%;
        height: 4px;
        border-radius: 2px;
        content: "";
      }
      
      .embla__dot.is-selected:after {
        background-color: #1bcacd;
        opacity: 1;
      }
      `}
    </style>
    <div className="embla" ref={emblaRef}>

   
        <div className="embla__container">
            {items.map(slide => <div key={slide.name} className="embla__slide"><img src= {slide.url} className='embla__image'/>

            <button className="embla__button embla__button--prev" onClick={scrollPrev}>
            <svg className="embla__button__svg" viewBox="137.718 -1.001 366.563 644">
            <path d="M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z" />
             </svg>
          </button>
          <button className="embla__button embla__button--next" onClick={scrollNext}>
          <svg className="embla__button__svg" viewBox="0 0 238.003 238.003">
          <path d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z" />
          </svg>
          </button>
            </div>)}
        </div>
      </div>
    
    
      </>
    

  )
}

export default EmblaCarousel;





