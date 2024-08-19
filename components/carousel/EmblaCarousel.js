import React, { useState, useEffect, useCallback, useMemo } from "react";
import { DotButton, useDotButton } from "./EmblaCarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import { Box, Button, Modal, styled, Typography } from "@mui/material";
import styles from './EmblaCarousel.module.css'
import Image from "next/image";
import { usePrevNextButton } from "./EmblaArrowButtons";
import { PrevButton, NextButton } from './EmblaArrowButtons'
import { useRouter } from "next/router";
import { grey } from "@mui/material/colors";

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
            <Image src={backgroundImageUrl} layout='fill' objectFit="cover" priority />
          )
        }
        {children}
      </div>
    </div>
  );
}

const CallToActionButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[50]),
  backgroundColor: grey[50],
  borderRadius: 25,
  textTransform: 'none',
  minWidth: '8rem',
  '&:hover': {
    color: theme.palette.getContrastText(grey[200]),
    backgroundColor: grey[200],
  }
}))

const SlideContent = ({ href, callToActionLabel, title, description, titleWeight, onClick }) => {
  const router = useRouter();

  return (
    <>
      <Box
        zIndex={1}
        className={styles.embla__slide__text}
      >
        <Typography
          variant='h3'
          fontWeight={titleWeight || 500}
          style={{ textShadow: '1px 1px 3px black' }}
          className={styles.embla__slide__title}
        >
          {title}
        </Typography>
        <Typography
          variant='body1'
          maxWidth='50em'
          style={{ textShadow: '1px 1px 3px black' }}
          className={styles.embla__slide__description}
        >
          {description}
        </Typography>
      </Box>

      <CallToActionButton
        sx={{ mt: 2 }}
        onClick={() => {
          if (onClick instanceof Function) {
            onClick();
            return;
          }
          router.push(href);
        }}
      >
        {callToActionLabel || 'Ver más'}
      </CallToActionButton>
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
            <PDU20240Slide />
          </SlideContainer>
          <SlideContainer>
            <SlideContent
              href='/arbolado-urbano'
              title='Arbolado urbano'
              description='La presencia del arbolado urbano forma parte de una infraestructura verde que impacta en el aspecto social, económico y cultural, mejorando la calidad de vida de la sociedad y mantener la resiliencia de las ciudades.'
              callToActionLabel='Ver arbolado urbano'
            />
          </SlideContainer>
          <SlideContainer >
            <ChihuahuaMetricaSlide />
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
        <Box className={styles.embla__arrows}>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </Box>
      </div>
    </section>
  );
};

const PDU20240Slide = () => {
  return (
    <SlideContent
      titleWeight={600}
      title='Sistema de indicadores del PDU2040'
      description={'Es una herramienta esencial para evaluar el progreso hacia objetivos establecidos en el PDU2040. Busca proporcionar información clave para la toma de decisiones informadas, identificando áreas de mejora y permitiendo una rendición de cuentas efectiva.'}
      callToActionLabel='Saber más'
      onClick={() => {
        const elem = document.getElementById('PDU2040-section')
        if (!elem) return;
        window.scroll({
          top: elem.offsetTop - 80,
          behavior: 'smooth'
        })
      }}
    />
  )
}


const ChihuahuaMetricaSlide = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <SlideContent
        href='/conocenos'
        title='Chihuahua Métrica'
        description='Plataforma digital para informar, monitorear y evaluar la transformación de nuestra ciudad y municipio en el ámbito de la planeación urbana y territorial'
        callToActionLabel='Reproducir video'
        onClick={() => {
          setOpen(true)
        }}
      />

      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}>
          <iframe width="1180" height="480" src="https://www.youtube.com/embed/5Jc6aMbJkAc" title="Métrica  Chihuahua" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </Box>
      </Modal>
    </>
  )
}


export default EmblaCarousel;
