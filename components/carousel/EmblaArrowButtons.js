import { useCallback, useEffect, useState } from "react";
import styles from './EmblaCarouselButton.module.css'
import { Button, IconButton, styled } from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { grey } from "@mui/material/colors";

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

const CustomIconButton = styled(IconButton)(({ theme }) => ({
    color: theme.palette.getContrastText(grey[900]),
    backgroundColor: grey[900],
    '&:hover': {
        backgroundColor: grey[700],
        color: theme.palette.getContrastText(grey[700]),
    }
}))

export const PrevButton = ({ disabled, onClick }) => (
    <CustomIconButton onClick={onClick} disabled={disabled} size="large">
        <KeyboardArrowLeftIcon />
    </CustomIconButton>
);

export const NextButton = ({ disabled, onClick }) => (
    <CustomIconButton onClick={onClick} disabled={disabled} sx={{ ml: 1 }} size='large'>
        <KeyboardArrowRightIcon />
    </CustomIconButton>
);