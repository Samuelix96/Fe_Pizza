/** @format */

import React from 'react';
import MainLayout from '../layout/MainLayout';
import '../style/drinks.css';

const AllDrinks = () => {
  return (
    <MainLayout>
      <div className='back-drinks'>
        <h1 className='h1-new'>
          <span class='right'>Drinks</span>
        </h1>
      </div>
      <div>
        <h2 className='title-drinks'>All Our Drinks </h2>
      </div>
      <section>
        <div class='grid-wrapper'>
          <div className='image-container'>
            <img
              src='https://www.lauretana.com/2020/grafica/prodotti/vetro/copertina2.jpg'
              alt='Water 1l'
            />
            <p>Still Water 1L</p>
          </div>
          <div className='image-container'>
            <img
              src='https://t4.ftcdn.net/jpg/02/84/65/61/360_F_284656117_sPF8gVWaX627bq5qKrlrvCz1eFfowdBf.jpg'
              alt='Coca Cola'
            />
            <p>Coca Cola</p>
          </div>
          <div className='image-container'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNf9tWMwn28xTWM3Gjs7TgxdL6iaAK4WcLQg&usqp=CAU'
              alt='Fanta drinks'
            />
            <p>Fanta</p>
          </div>
          <div className='image-container'>
            <img
              src='https://st.depositphotos.com/1000647/4405/i/450/depositphotos_44059545-stock-photo-soft-drink-sprite.jpg'
              alt='Sprite '
            />
            <p>Sprite </p>
          </div>
          <div className='image-container'>
            <img
              src='https://vetkoekpaleis-media.b-cdn.net/wp-content/uploads/2023/01/12003736/Lipton-Ice-Tea-Drink-330ml-1.webp'
              alt='Lipton peach '
            />
            <p>Lipton peach</p>
          </div>
          <div className='tall image-container'>
            <img
              src='https://www.carpineto.com/shop/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/V/N/VN100055-1.jpg'
              alt='Chianti Classico DOCG 2021'
            />
            <p>Chianti Classico DOCG 2021</p>
          </div>
          <div className='big image-container'>
            <img
              src='https://sfiziedeliziepalermo.com/wp-content/uploads/2020/06/Prodotti-155.jpg'
              alt='schweppes tonic'
            />
            <p>Schweppes Tonic</p>
          </div>
          <div className='image-container'>
            <img
              src='https://shop.terrecarsiche.it/wp-content/uploads/2021/03/Selezione-di-vini-bianchi-della-Valle-dItria.webp'
              alt='White Vines'
            />{' '}
            <p>White Vines</p>
          </div>
          <div className='wide image-container'>
            <img
              src='https://hips.hearstapps.com/hmg-prod/images/cocktail-1590739101.jpg?crop=1.00xw:1.00xh;0,0&resize=2048:*'
              alt='Tropica cocktail'
            />
            <p>Tropica cocktail</p>
          </div>

          <div className='image-container'>
            <img
              src='https://www.isladerum.com/wp-content/uploads/2019/08/Rum-Shelf-4.jpg'
              alt='Rum drinks'
            />
            <p>Rum drinks</p>
          </div>

          <div className='image-container'>
            <img
              src='https://thekitchencommunity.org/wp-content/uploads/2021/09/gin-shutterstock_1039600045-1200x800.jpg'
              alt='Gin drinks'
            />
            <p>Gin drinks</p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AllDrinks;
