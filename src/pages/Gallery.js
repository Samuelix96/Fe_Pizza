/** @format */

import React from 'react';
import MainLayout from '../layout/MainLayout';
import myImage1 from '../pic/img-1.avif';
import myImage2 from '../pic/img-2.avif';
import myImage3 from '../pic/img-3.avif';
import myImage4 from '../pic/img-4.avif';
import myImage5 from '../pic/img-5.avif';
import myImage6 from '../pic/img-6.avif';
import myImage7 from '../pic/img-7.avif';
import myImage8 from '../pic/img-8.avif';
import myImage9 from '../pic/img-9.avif';
import '../style/gallery.css';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const Gallery = () => {
  const onInit = () => {
    console.log('lightGallery has been initialized');
  };

  return (
    <MainLayout>
      <div className='back-gallery'>
        <h1 className='h1-new'>
          <span className='right'>Gallery</span>
        </h1>
      </div>
      <div className='h2-gallery'>
        <h2>Our Gallery</h2>
      </div>
      <section className='gallery'>
        <div className='gallery-container'>
          <LightGallery
            className='light-gallery'
            onInit={onInit}
            speed={500}>
            <a
              href={myImage1}
              className='box-gallery'
              data-lg-size='1600-1066'>
              <img
                src={myImage1}
                alt='image-gallery1'
              />
              <div className='icon'>
                <i className='fa-solid fa-plus'></i>
              </div>
            </a>

            <a
              href={myImage2}
              className='box-gallery'>
              <img
                src={myImage2}
                alt='image-gallery1'
              />
              <div className='icon'>
                <i className='fa-solid fa-plus'></i>
              </div>
            </a>
            <a
              href={myImage3}
              className='box-gallery'>
              <img
                src={myImage3}
                alt='image-gallery1'
              />
              <div className='icon'>
                <i className='fa-solid fa-plus'></i>
              </div>
            </a>
            <a
              href={myImage4}
              className='box-gallery'>
              <img
                src={myImage4}
                alt='image-gallery1'
              />
              <div className='icon'>
                <i className='fa-solid fa-plus'></i>
              </div>
            </a>
            <a
              href={myImage5}
              className='box-gallery'>
              <img
                src={myImage5}
                alt='image-gallery5'
              />
              <div className='icon'>
                <i className='fa-solid fa-plus'></i>
              </div>
            </a>
            <a
              href={myImage6}
              className='box-gallery'>
              <img
                src={myImage6}
                alt='image-gallery1'
              />
              <div className='icon'>
                <i className='fa-solid fa-plus'></i>
              </div>
            </a>
            <a
              href={myImage7}
              className='box-gallery'>
              <img
                src={myImage7}
                alt='image-gallery1'
              />
              <div className='icon'>
                <i className='fa-solid fa-plus'></i>
              </div>
            </a>
            <a
              href={myImage8}
              className='box-gallery'>
              <img
                src={myImage8}
                alt='image-gallery1'
              />
              <div className='icon'>
                <i className='fa-solid fa-plus'></i>
              </div>
            </a>
            <a
              href={myImage9}
              className='box-gallery'>
              <img
                src={myImage9}
                alt='image-gallery1'
              />
              <div className='icon'>
                <i className='fa-solid fa-plus'></i>
              </div>
            </a>
          </LightGallery>
        </div>
      </section>
    </MainLayout>
  );
};

export default Gallery;
