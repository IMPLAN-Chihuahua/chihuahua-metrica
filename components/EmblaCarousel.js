import React, { useState, useEffect, useCallback } from "react";
import { DotButton, PrevButton, NextButton } from "./EmblaCarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay'

const route = '/Images/Banner/'
const slides = [
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

const EmblaCarousel = () => {
  const options = { delay: 3000} // Options
  const autoplayRoot = (emblaRoot) => emblaRoot.parentElement // Root node
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false, loop: true },[Autoplay(options, autoplayRoot)]);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [
    embla
  ]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <>
    <style jsx>
{`
.embla {
  position: relative;

  max-width: 100%;
  margin-left: auto;
  margin-right: auto;


}

.embla__viewport {
  overflow: hidden;
  width: 100%;

}

.embla__viewport.is-draggable {
  cursor: move;
  cursor: grab;
}

.embla__viewport.is-dragging {
  cursor: grabbing;
}

.embla__container {
  display: flex;
  user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -webkit-tap-highlight-color: transparent;
  margin-left: -10px;
  height: 100%;
}

.embla__slide {
  position: relative;
  min-width: 100%;
  padding-left: 10px;
}

.embla__slide__inner {
  position: relative;
  overflow: hidden;
  
}

.embla__slide__img {
  position: relative;
  display: block;
  top: 50%;
  left: 50%;
  width: 100%;
  min-width: 100%;
  max-width: none;
  height: 100%;
  transform: translate(-50%, 0%);
}

.embla__dots {
  display: flex;
  list-style: none;
  justify-content: center;
  padding-top: 10px;
}

`}
   </style>
      <div className="embla" >
        <div className="embla__viewport" ref={viewportRef}>
          <div className="embla__container">
            {slides.map((index) => (
              <div className="embla__slide" key={index.name}>
                <div className="embla__slide__inner">
                  <img
                    className="embla__slide__img"
                    src={index.url} id={index.name}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
          key={index}
          selected={index === selectedIndex}
          onClick={() => scrollTo(index)}
          />
          ))}
      </div>
    </>
  );
};

export default EmblaCarousel;
