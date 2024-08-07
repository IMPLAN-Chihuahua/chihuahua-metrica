import React, { useState, useEffect, useCallback, useMemo } from "react";
import { DotButton, useDotButton } from "./EmblaCarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import { Box, Button, Typography } from "@mui/material";
import styles from './EmblaCarousel.module.css'
import Image from "next/image";
import NextLink from "next/link";
import { usePrevNextButton } from "./EmblaArrowButtons";
import { PrevButton, NextButton } from './EmblaArrowButtons'
import { useRouter } from "next/router";

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
  {
    name: "banner-03",
    description: "Sistema de monitoreo del PDU",
    imgSrc: `/banner-02-828w.webp`,
    href: "/chihuahua-en-datos",
  }
]

const SlideContainer = ({ children, backgroundImageUrl }) => {
  return (
    <div className={styles.embla__slide}>
      <div className={styles.embla__slide__content}>
        {
          backgroundImageUrl && (
            <Image src={backgroundImageUrl} layout='fill' objectFit="cover" />
          )
        }
        {children}
      </div>
    </div>
  );
}

const SlideContent = ({ href, callToActionLabel, title, description, titleWeight }) => {
  const router = useRouter();

  return (
    <>
      <Typography zIndex={1} variant='h3' fontWeight={titleWeight || 500} style={{ textShadow: '1px 1px 3px black' }}>{title}</Typography>
      <Typography zIndex={1} variant='body1' mt={2} maxWidth='50em' style={{ textShadow: '1px 1px 3px black' }}>
        {description}
      </Typography>
      <Button
        onClick={() => router.push(href)}
        sx={{
          borderRadius: 25,
          backgroundColor: 'white',
          textTransform: 'capitalize',
          minWidth: '8rem',
          mt: 5
        }}
      >
        {callToActionLabel || 'Ver más'}
      </Button>
    </>
  )
}

const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const { selectedIndex, onDotButtonClick, scrollSnaps } = useDotButton(emblaApi);
  const { nextBtnDisabled, onNextButtonClick, prevBtnDisabled, onPrevButtonClick, } = usePrevNextButton(emblaApi);

  return (
    <section className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          <SlideContainer backgroundImageUrl='https://images.unsplash.com/photo-1626908013351-800ddd734b8a?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'>
            <SlideContent
              titleWeight={600}
              title='Sistema de indicadores del PDU2040 Séptima Actualización'
              description={'Es una herramienta esencial para evaluar el progreso hacia objetivos establecidos en el PDU2040. Busca proporcionar información clave para la toma de decisiones informadas, identificando áreas de mejora y permitiendo una rendición de cuentas efectiva.'}
            />
          </SlideContainer>
          <SlideContainer backgroundImageUrl='https://images.unsplash.com/photo-1702305289740-1c4836dd149a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'>
            <SlideContent
              href='/arbolado-urbano'
              title='Arbolado urbano'
              description='La presencia del arbolado urbano forma parte de una infraestructura verde que impacta en el aspecto social, económico y cultural, mejorando la calidad de vida de la sociedad y mantener la resiliencia de las ciudades.'
              callToActionLabel='Ir a arbolado urbano'
            />
          </SlideContainer>
          <SlideContainer >
            <SlideContent
              href='/conocenos'
              title='Chihuahua Métrica'
              description='Plataforma digital para informar, monitorear y evaluar la transformación de nuestra ciudad y municipio en el ámbito de la planeación urbana y territorial'
              callToActionLabel='Ver video'
            />
          </SlideContainer>
        </div>
      </div>
      <div className={styles.embla__controls}>
        <div className={styles.embla__dots}>
          {
            scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                selected={index == selectedIndex}
              />
            ))
          }
        </div>
        <div>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};


export default EmblaCarousel;
