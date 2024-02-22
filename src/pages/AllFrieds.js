/** @format */

import React from 'react';
import MainLayout from '../layout/MainLayout';
import '../style/frieds.css';
import { useGetFriedsQuery } from '../api/ApiSlice';
import { nanoid } from 'nanoid';

const AllFrieds = () => {
  const {
    data: frieds = [],
    isLoading,
    isSuccess,
    errors,
  } = useGetFriedsQuery();

  console.log(frieds);

  return (
    <MainLayout>
      <div className='back-frieds'>
        <h1 className='h1-new'>
          <span class='right'>Frieds</span>
        </h1>
      </div>
      <div>
        <h2 className='title-frieds'>Food Fried</h2>
      </div>
      <div className='container-fluid all-fried'>
        <div className='row'>
          {isSuccess && !isLoading
            ? frieds?.fried?.map(element => (
                <div
                  className='col col-md-4 col-12 '
                  key={nanoid()}
                  id='container'>
                  <div class='product-details'>
                    <h1>{element.title}</h1>
                    <p className=' fs-3 fst-italic fw-bold '>
                      {element.price}€
                    </p>
                  </div>

                  <div class='product-image'>
                    <img
                      src={element.img}
                      alt={element.title}
                    />
                  </div>
                </div>
              ))
            : errors && <p>Errors during download</p>}
        </div>
      </div>
    </MainLayout>
  );
};

export default AllFrieds;
