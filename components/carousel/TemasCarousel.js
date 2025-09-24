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

const SlideContainer = ({ children }) => {
    return (
        <div className={styles.embla__slide}>
            <div className={styles.embla__slide__content}>
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
                    <SlideContainer>
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

export default EmblaCarousel;