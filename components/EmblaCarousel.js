import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const EmblaCarousel = () => {
    const options = { delay: 300} // Options
    const autoplayRoot = (emblaRoot) => emblaRoot.parentElement // Root node
    const autoplay = Autoplay(options, autoplayRoot)
   
    const [emblaRef] = useEmblaCarousel({loop: true},[Autoplay()])



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
            {items.map(slide => <div className="embla__slide"><img src= {slide.url} className='embla__image'/></div>)}
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
    `}
    </style>
    
    </div>

  )
}

export default EmblaCarousel;





