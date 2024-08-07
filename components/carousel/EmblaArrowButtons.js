import { useCallback, useEffect, useState } from "react";
import styles from './EmblaCarouselButton.module.css'
import { Button, IconButton } from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export const usePrevNextButton = (emblaApi) => {
    const [prevBtnDisabled, setPrevDisabled] = useState(true);
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

    const onPrevButtonClick = useCallback(() => {
        if (!emblaApi) return;

        emblaApi.scrollPrev();
    }, [emblaApi]);

    const onNextButtonClick = useCallback(() => {
        if (!emblaApi) return;

        emblaApi.scrollNext();
    }, [emblaApi]);


    const onSelect = useCallback((emblaApi) => {
        setPrevDisabled(!emblaApi.canScrollPrev());
        setNextBtnDisabled(!emblaApi.canScrollNext());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        onSelect(emblaApi);
        emblaApi
            .on('reInit', onSelect)
            .on('select', onSelect)
    }, [emblaApi, onSelect])

    return {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    }
}

export const PrevButton = ({ disabled, onClick }) => (
    <IconButton onClick={onClick} disabled={disabled} sx={{ backgroundColor: 'primary' }}>
        <KeyboardArrowLeftIcon />
    </IconButton>
);

export const NextButton = ({ disabled, onClick }) => (
    <IconButton onClick={onClick} disabled={disabled}>
        <KeyboardArrowRightIcon />
    </IconButton>
);