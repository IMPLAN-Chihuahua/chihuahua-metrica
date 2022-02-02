import AboutDescription from '@components/information/AboutDescription';
import { AboutLocation } from '@components/information/AboutLocation';
import AboutTop from '@components/information/AboutTop';
import AboutValues from '@components/information/AboutValues';
import React from 'react';


const about = () => {
  return (
    <>
    <AboutTop/>
    <AboutDescription />
    <AboutValues/>
    <AboutLocation />
    </>
  );
};

export default about;