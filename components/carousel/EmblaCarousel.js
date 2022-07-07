import React, { useState, useEffect, useCallback, useMemo } from "react";
import { DotButton, PrevButton, NextButton } from "./EmblaCarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay'
import { Box, Typography } from "@mui/material";
import style from '../../styles/EmblaCarousel.module.css'
import Image from "next/image";
import NextLink from "next/link";

const SLIDES = [
  {
    name: "banner-01",
    imgSrc: `/banner-01-828w.webp`,
    href: "/conocenos",
  },
  {
    name: "banner-03",
    description: "Arbolado Banner",
    imgSrc: `/banner-03-828w.webp`,
    href: "/arbolado-urbano",
  },
  {
    name: "banner-02",
    description: "Proyecto de indicadores del municipio de Chihuahua",
    imgSrc: `/banner-02-828w.webp`,
    href: "/chihuahua-en-datos",
  },
]

const Description = React.memo(({ name }) => {
  switch (name) {
    case 'banner-01':
      return (
        <Box sx={{
          position: 'absolute',
          maxWidth: 750,
          left: { md: '5%' },
          top: { xs: '23%', sm: '43%' }
        }}>
          <Typography
            fontSize={{ xs: 24, md: 32 }}
            fontWeight={300}
            textAlign='center'
            color='white'
            sx={{
              textShadow: '1px 2px rgba(0, 0, 0, 0.8)'
            }}>
            <span className="highlight-text">Chihuahua Métrica </span>
            es una plataforma digital para <span className='highlight-text'>informar, monitorear
              y evaluar</span> la transformación de nuestra ciudad y municipio en el ámbito de la planeación urbana y territorial
          </Typography>
        </Box>
      )
    case 'banner-02':
      return (
        <Box
          sx={{
            position: 'absolute',
            maxWidth: 900,
            right: { md: '5%' },
            top: { xs: '23%', sm: '43%' }
          }}>
          <Typography
            fontSize={{ xs: 24, md: 32 }}
            fontWeight={300}
            textAlign='center'
            color='white'
            sx={{
              textShadow: '1px 2px rgba(0, 0, 0, 0.8)'
            }}>
            <span className='highlight-text'>Sistema de indicadores del municipio de Chihuahua</span> <br />
            Es una herramienta que transforma información compleja
            en información simple, presentada en indicadores y mapas
          </Typography>
        </Box>
      )
    default:
      return null;
  }
});

Description.displayName = 'Description';

const Slide = ({ slide }) => {
  return (
    <NextLink href={slide.href}>
      <Box className={style.embla__slide} key={slide.name} sx={{ height: { xs: '60vh', md: '90vh' } }}>
        <Image src={slide.imgSrc} layout='fill' objectFit='cover' objectPosition='center' />
        <Description name={slide.name} />
      </Box>
    </NextLink>
  );
}

const EmblaCarousel = () => {
  const options = { delay: 15000 };
  const autoplayRoot = (emblaRoot) => emblaRoot.parentElement;
  const [emblaRef, embla] = useEmblaCarousel({
    skipSnaps: true,
    loop: true,
    startIndex: 0,
    draggable: true
  }, [Autoplay(options, autoplayRoot)]);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedSlide, setSelectedSlide] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedSlide(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedSlide]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <>
      <Box className={style.embla} style={{ marginTop: '5vh' }} >
        <Box className={style.embla__viewport} ref={emblaRef}>
          <Box className={style.embla__container}>
            {SLIDES.map((slide, idx) => (
              <Slide slide={slide} key={idx} />
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
            selected={index === selectedSlide}
            onClick={() => scrollTo(index)}
          />
        ))}
      </Box>
    </>
  );
};

export default EmblaCarousel;
