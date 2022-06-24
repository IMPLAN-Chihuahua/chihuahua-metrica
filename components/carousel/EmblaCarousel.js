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
    href: "NaN",
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
          left: { xs: '', md: '5%' },
          top: { xs: '23%', sm: '43%' }
        }}>
          <Typography
            fontSize={32}
            fontWeight={300}
            textAlign='center'
            color='white'
            sx={{
              textShadow: '1px 2px rgba(0, 0, 0, 0.8)'
            }}>
            <span className="highlight-text">Chihuahua Métrica </span>
            es una plataforma digital para <span className='highlight-text'>informar, monitorear
              y evaluar</span> su transformación en el ámbito de la planeación urbana y territorial
          </Typography>
        </Box>
      )
    case 'banner-02':
      return (
        <Box
          sx={{
            position: 'absolute',
            maxWidth: 900,
            right: { xs: '', md: '5%' },
            top: { xs: '23%', sm: '43%' }
          }}>
          <Typography
            fontSize={32}
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
    case 'banner-03':
      return (<Box
        sx={{
          position: 'absolute',
          width: { sm: '100%', md: '80%' },
          top: { xs: '10%', md: '50%' },
          left: { md: '50%' },
          transform: { md: 'translate(-50%, -50%)' },
        }}>
        <Typography
          fontSize={32}
          fontWeight={300}
          textAlign='center'
          height='auto'
          color='white'
          sx={{
            textShadow: '1px 3px rgba(0, 0, 0, 0.8)'
          }}>
          <span className="highlight-text">Plantar un árbol construye la infraestructura verde de la ciudad </span><br />
          mitigando el cambio climático y acercando los servicios ambientales <br />
          a las personas, además de apropiarse del espacio público y de las áreas verdes
        </Typography>
      </Box>);
    default:
      return (<>invalid</>)
  }
});

const Slide = ({ slide }) => {
  return (
    <NextLink href={slide.href}>
      <Box className={style.embla__slide} key={slide.name}>
        <Image src={slide.imgSrc} layout='fill' objectFit='cover' objectPosition='center' />
        <Description name={slide.name} />
      </Box>
    </NextLink>
  );
}

const EmblaCarousel = () => {
  const options = { delay: 15000 };
  const autoplayRoot = (emblaRoot) => emblaRoot.parentElement;
  const [viewportRef, embla] = useEmblaCarousel({
    kipSnaps: false,
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
  const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [
    embla
  ]);

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
        <Box className={style.embla__viewport} ref={viewportRef}>
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
