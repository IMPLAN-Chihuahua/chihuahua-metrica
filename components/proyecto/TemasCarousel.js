import React from "react";
import { DotButton, useDotButton } from "@components/carousel/EmblaCarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import { Box, Typography } from "@mui/material";
import emblaStyles from './TemasEmblaCarousel.module.css'
import style from '../../styles/indicador.module.css'

import { usePrevNextButton } from "@components/carousel/EmblaArrowButtons";
import { PrevButton, NextButton } from "@components/carousel/EmblaArrowButtons";
import { Tema } from "./GridModulos";

const SlideContainer = ({ children }) => {
    return (
        <div className={emblaStyles.embla__slide}>
            <div className={emblaStyles.embla__slide__content}>
                {children}
            </div>
        </div>
    );
}

const TemasCarousel = ({ modulos }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const { selectedIndex, onDotButtonClick, scrollSnaps } = useDotButton(emblaApi);
    const { nextBtnDisabled, onNextButtonClick, prevBtnDisabled, onPrevButtonClick, } = usePrevNextButton(emblaApi);

    return (
        <section className={emblaStyles.embla}>
            <Typography variant="h2" className={style.title}>Temas de interés</Typography>
            <div className={emblaStyles.embla__viewport} ref={emblaRef}>
                <div className={emblaStyles.embla__container}>
                    {
                        modulos.map((modulo) => (
                            parseInt(modulo.indicadoresCount) > 0 && (
                                <SlideContainer>
                                    <Box key={modulo.id} className={style.temaList}>
                                        <Tema key={modulo.id} modulo={modulo} />
                                    </Box>
                                </SlideContainer>
                            )
                        ))
                    }
                    {/* <SlideContainer>
                    </SlideContainer> */}
                </div>
            </div>
            <div className={emblaStyles.embla__controls}>
                <div className={emblaStyles.embla__dots}>
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
                <Box className={emblaStyles.embla__arrows}>
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </Box>
            </div>
        </section>
    );
};

export default TemasCarousel;