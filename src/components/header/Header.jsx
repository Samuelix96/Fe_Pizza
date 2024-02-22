/** @format */

import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './header.css';
import { useGetAdvQuery } from '../../api/ApiSlice';
import { nanoid } from '@reduxjs/toolkit';

const Header = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = selectedIndex => {
    setIndex(selectedIndex);
  };

  const { data: AdvData = [], isLoading, isSuccess, errors } = useGetAdvQuery();

  console.log(AdvData);

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}>
      {isSuccess && !isLoading
        ? AdvData?.advs?.map(adv => (
            <Carousel.Item key={nanoid()}>
              <img
                className=' item-size d-block w-100'
                src={adv.img}
                alt={adv.title}
              />
              <Carousel.Caption className='box-head'>
                <h3>{adv.title}</h3>
                <p>{adv.subtitle}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))
        : errors && <p>Errore nel caricamento</p>}
    </Carousel>
  );
};

export default Header;
