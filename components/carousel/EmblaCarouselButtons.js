import React, { useCallback, useEffect, useState } from "react";
import style from './EmblaCarouselButton.module.css'


export const useDotButton = (emblaApi) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onDotButtonClick = useCallback((index) => {
    if (!emblaApi) return;

    emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, [])

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);

    emblaApi
      .on('reInit', onInit)
      .on('reInit', onSelect)
      .on('select', onSelect)

  }, [emblaApi, onInit, onSelect])

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick
  }
}

export const DotButton = ({ selected, onClick }) => (
  <button
    className={`${style.embla__dot} ${selected ? style['is-selected'] : ''}`}
    type="button"
    onClick={onClick}
  />
);
