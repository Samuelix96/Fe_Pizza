/** @format */

import React from 'react';
import MainLayout from '../layout/MainLayout';
import '../style/dessert.css';

const AllDessert = () => {
  return (
    <MainLayout>
      <div className='back-dessert'>
        <h1 className='h1-new'>
          <span className='right'>Dessert</span>
        </h1>
      </div>
      <div>
        <h2 className='title-dessert'>Our Dessert</h2>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 col-md-6 mb-4'>
            <img
              className='img-fluid w-100 mb-3 img-thumbnail shadow-sm rounded-0'
              src='https://www.lacucinaimperfetta.com/wp-content/uploads/2015/05/Cheesecake-alle-fragole.jpg'
              alt='Strawberry Cheescake'
            />
            <h2 className='h4'>Strawberry Cheescake</h2>
          </div>
          <div className='col-lg-4 col-md-6 mb-4'>
            <img
              className='img-fluid w-100 mb-3 img-thumbnail shadow-sm rounded-0'
              src='https://staticcookist.akamaized.net/wp-content/uploads/sites/21/2021/11/Cheesecake-ai-frutti-di-bosco.jpg'
              alt='cheesecake with berries'
            />
            <h2 className='h4'>Cheesecake with berries</h2>
          </div>
          <div className='col-lg-4 col-md-6 grid-item mb-4'>
            <img
              className='img-fluid w-100 mb-3 img-thumbnail shadow-sm rounded-0'
              src='https://www.lucake.it/wp-content/uploads/2023/10/cheesecake-cotta-al-cioccolato.jpg'
              alt='Chocolate Cheesecake'
            />
            <h2 className='h4'>Chocolate Cheesecake</h2>
          </div>
          <div className='col-lg-4 col-md-6 grid-item mb-4'>
            <img
              className='img-fluid w-100 mb-3 img-thumbnail shadow-sm rounded-0'
              src='https://biancolievito.it/wp-content/uploads/2023/09/MASCHERA-WORDPRESS-3.png'
              alt='tiramisu'
            />
            <h2 className='h4'>Tiramisu</h2>
          </div>
          <div className='col-lg-4 col-md-6 grid-item mb-4'>
            <img
              className='img-fluid w-100 mb-3 img-thumbnail shadow-sm rounded-0'
              src='https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/A13E0EAA-DFA7-4264-8B3B-79CCC77F9282/Derivates/B59B434D-7C1D-4EEB-9CE2-B21BD45533D9.jpg'
              alt='Catalan cream'
            />
            <h2 className='h4'>Catalan cream</h2>
          </div>
          <div className='col-lg-4 col-md-6 grid-item mb-4'>
            <img
              className='img-fluid w-100 mb-3 img-thumbnail shadow-sm rounded-0'
              src='https://www.cucchiaio.it/content/dam/cucchiaio/it/ricette/2009/11/ricetta-panna-cotta/panna%20cotta-1.jpg'
              alt='Panna cotta'
            />
            <h2 className='h4'>Panna Cotta</h2>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AllDessert;
