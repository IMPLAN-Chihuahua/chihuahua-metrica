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
            <Image src={backgroundImageUrl} loader={({ src }) => src} layout='fill' objectFit="cover" priority />
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
  position: 'relative',
  zIndex: 2,
  '&:hover': {
    color: theme.palette.getContrastText(grey[200]),
    backgroundColor: grey[200],
  }
}))

const SlideContent = ({ preTitle, title, description, titleWeight, callToActionLabel, onClick }) => {
  return (
    <>
      <Box zIndex={1} className={styles.embla__slide__text}>

        {/* Antetítulo */}
        {preTitle && (
          <Typography variant='overline' sx={{ color: '#90caf9', fontWeight: 600, letterSpacing: 2, lineHeight: 1 }}>
            {preTitle}
          </Typography>
        )}

        {/* Título Principal */}
        <Typography variant='h3' fontWeight={titleWeight || 700} className={styles.embla__slide__title}>
          {title}
        </Typography>

        {/* Subtítulo / Descripción */}
        {description && (
          <Typography variant='h6' sx={{ color: '#e0e0e0', fontWeight: 300, lineHeight: 1.4 }} className={styles.embla__slide__description}>
            {description}
          </Typography>
        )}

      </Box>

      {/* Tu botón se queda afuera de la caja para que mantenga su propio estilo */}
      <CallToActionButton sx={{ mt: 2 }} onClick={onClick}>
        {callToActionLabel || 'Ver más'}
      </CallToActionButton>
    </>
  )
}

const EmblaCarousel = () => {
  const isSingleSlide = true;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: !isSingleSlide,
    align: isSingleSlide ? 'center' : 'start',
    watchDrag: !isSingleSlide
  });

  const { selectedIndex, onDotButtonClick, scrollSnaps } = useDotButton(emblaApi);
  const { nextBtnDisabled, onNextButtonClick, prevBtnDisabled, onPrevButtonClick, } = usePrevNextButton(emblaApi);

  return (
    <section className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div
          className={styles.embla__container}
          style={isSingleSlide ? { justifyContent: 'center', marginLeft: 0 } : {}}
        >

          <SlideContainer backgroundImageUrl='images/banner_1.jpeg'>
            <PDU20240Slide />
          </SlideContainer>


        </div>
      </div>

      {!isSingleSlide && (
        <div className={styles.embla__controls}>
          <div className={styles.embla__dots}>
            {
              scrollSnaps.map((_, index) => (
                <DotButton
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  selected={index === selectedIndex}
                />
              ))
            }
          </div>
          <Box className={styles.embla__arrows}>
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </Box>
        </div>
      )}
    </section>
  );
};
const PDU20240Slide = () => {
  return (
    <SlideContent
      preTitle='SÉPTIMA ACTUALIZACIÓN'
      title='Sistema de Monitoreo PDU 2040'
      description='Plan de Desarrollo Urbano del centro de población de Chihuahua.'
      titleWeight={400}
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
        href='https://view.genially.com/691e2306f1e1e7523249333e/interactive-content-manual-usuariosss'
        title='Chihuahua Métrica'
        description='Plataforma digital para informar, monitorear y evaluar la transformación de nuestra ciudad y municipio en el ámbito de la planeación urbana y territorial'
        callToActionLabel='Ver manual de usuario'
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
          <iframe width="1180" height="480" src="https://view.genially.com/691e2306f1e1e7523249333e/interactive-content-manual-usuario" title="Métrica  Chihuahua" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </Box>
      </Modal>
    </>
  )
}


export default EmblaCarousel;
