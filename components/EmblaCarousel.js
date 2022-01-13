import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { useState, useEffect, useCallback } from "react";
import Autoplay from 'embla-carousel-autoplay'

const EmblaCarousel = () => {
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
    <div className="embla" ref={emblaRef}>

   
        <div className="embla__container">
            {items.map(slide => <div key={slide.name} className="embla__slide"><img src= {slide.url} className='embla__image'/>

            <button className="embla__prev" onClick={scrollPrev}>
            Previer
          </button>
          <button className="embla__next" onClick={scrollNext}>
            Next
          </button>
            </div>)}
        </div>
      


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
      embla__prev{
        color: white;
      }
    `}
    </style>
    
    </div>

  )
}

export default EmblaCarousel;





