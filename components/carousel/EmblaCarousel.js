import React, { useState, useEffect, useCallback } from "react";
import { DotButton, PrevButton, NextButton } from "./EmblaCarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay'
import slides from '../../helpers/CarouselImages'
import { Box } from "@mui/material";
import style from '../../styles/EmblaCarousel.module.css'
import Image from "next/image";

const EmblaCarousel = () => {
  const options = { delay: 4000} // Options
  const autoplayRoot = (emblaRoot) => emblaRoot.parentElement // Root node
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false, loop: true, startIndex:0, draggable: false},[Autoplay(options, autoplayRoot)]);
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
      <Box className={style.embla} >
        <Box className={style.embla__viewport} ref={viewportRef}>
          <Box className={style.embla__container}>
            {slides.map((index) => (
              <Box className={style.embla__slide} key={index.name}>
                <Box className={style.embla__slide__inner}>
                  <Image
                    src={index.url} id={index.name}
                    alt={index.name}
                    width={2000}
                    height={860}
                />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </Box>
      <Box className={style.embla__dots}>
        {scrollSnaps.map((_, index) => (
          <DotButton
          key={index}
          selected={index === selectedIndex}
          onClick={() => scrollTo(index)}
          />
          ))}
      </Box>
    </>
  );
};

export default EmblaCarousel;
