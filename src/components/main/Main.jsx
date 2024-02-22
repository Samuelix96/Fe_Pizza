/** @format */

import React from 'react';
import './main.css';

const Main = () => {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='weather-card one'>
              <div className='top'></div>
              <div className='bottom'>
                <div className='wrapper'>
                  <a
                    className=' text-light link-underline link-underline-opacity-0'
                    href='/menu'>
                    <h2>PIZZA</h2>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='col'>
            <div className='weather-card drinks'>
              <div className='top'></div>
              <div className='bottom'>
                <a
                  className=' text-light link-underline link-underline-opacity-0'
                  href='/alldrinks'>
                  <h2>DRINKS</h2>
                </a>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='weather-card frieds'>
              <div className='top'></div>
              <div className='bottom'>
                <a
                  className=' text-light link-underline link-underline-opacity-0'
                  href='/allfrieds'>
                  <h2>FRIEDS</h2>
                </a>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='weather-card dessert'>
              <div className='top'></div>
              <div className='bottom'>
                <a
                  className=' text-light link-underline link-underline-opacity-0'
                  href='/alldessert'>
                  <h2>DESSERT</h2>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div>
          <h1 className='text-center my-5 fst-italic fs-1 fw-semibold'>
            Pizzas of the month
          </h1>
        </div>
        <div className='container mydiv'>
          <div className='row'>
            <div className='col-md-4'>
              <div className='bbb_deals'>
                <div className='ribbon ribbon-top-right'>
                  <span>
                    <small className='cross'> </small>1
                  </span>
                </div>
                <div className='bbb_deals_title'>Best of Today's </div>
                <div className='bbb_deals_slider_container'>
                  <div className=' bbb_deals_item'>
                    <div className='bbb_deals_image'>
                      <img
                        className='img-size'
                        src='https://images.unsplash.com/photo-1601924582970-9238bcb495d9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGl6emElMjBkaWF2b2xhfGVufDB8fDB8fHww'
                        alt='pizzas of the month'
                      />
                    </div>
                    <div className='bbb_deals_content'>
                      <div className='bbb_deals_info_line d-flex flex-row justify-content-start'></div>
                      <div className='bbb_deals_info_line d-flex flex-row justify-content-start'>
                        <div className='bbb_deals_item_name mx-3'>
                          Pizza Diavola
                        </div>
                        <div className='bbb_deals_item_price ml-auto'>
                          $7,50
                        </div>
                      </div>
                      <div className='available'>
                        <div className='available_line d-flex flex-row justify-content-start'>
                          <div className='available_title mx-4'>
                            Top: <span>1</span>
                          </div>
                          <div className='sold_stars ml-auto'>
                            {' '}
                            <i className='fa fa-star'></i>{' '}
                            <i className='fa fa-star'></i>{' '}
                            <i className='fa fa-star'></i>{' '}
                            <i className='fa fa-star'></i>{' '}
                            <i className='fa fa-star'></i>{' '}
                          </div>
                        </div>
                        <div className='available_bar'>
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='bbb_deals'>
                <div className='ribbon ribbon-top-right'>
                  <span>
                    <small className='cross'></small>2
                  </span>
                </div>
                <div className='bbb_deals_title'>Best of Today's</div>
                <div className='bbb_deals_slider_container'>
                  <div className=' bbb_deals_item'>
                    <div className='bbb_deals_image'>
                      <img
                        className='img-size'
                        src='https://primochef.it/wp-content/uploads/2020/04/SH_pizza_quattro_formaggi.jpg'
                        alt=''
                      />
                    </div>
                    <div className='bbb_deals_content'>
                      <div className='bbb_deals_info_line d-flex flex-row justify-content-start'>
                        <div className='bbb_deals_item_name mx-2'>
                          Pizza 4 Formaggi
                        </div>
                        <div className='bbb_deals_item_price ml-auto'>
                          $8,50
                        </div>
                      </div>
                      <div className='available'>
                        <div className='available_line d-flex flex-row justify-content-start'>
                          <div className='available_title mx-4'>
                            Top: <span>2</span>
                          </div>
                          <div className='sold_stars ml-auto'>
                            {' '}
                            <i className='fa fa-star'></i>{' '}
                            <i className='fa fa-star'></i>{' '}
                            <i className='fa fa-star'></i>{' '}
                            <i className='fa fa-star'></i>{' '}
                          </div>
                        </div>
                        <div className='available_bar'>
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='bbb_deals'>
                <div className='ribbon ribbon-top-right'>
                  <span>
                    <small className='cross'></small>3
                  </span>
                </div>
                <div className='bbb_deals_title'>Best of Today's</div>
                <div className='bbb_deals_slider_container'>
                  <div className=' bbb_deals_item'>
                    <div className='bbb_deals_image'>
                      <img
                        className='img-size'
                        src='https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8'
                        alt=''
                      />
                    </div>
                    <div className='bbb_deals_content'>
                      <div className='bbb_deals_info_line d-flex flex-row justify-content-start'>
                        <div className='bbb_deals_item_name mx-3'>
                          Pizza Margherita
                        </div>
                        <div className='bbb_deals_item_price ml-auto'>
                          $5,00
                        </div>
                      </div>
                      <div className='available'>
                        <div className='available_line d-flex flex-row justify-content-start'>
                          <div className='available_title mx-4'>
                            Top: <span>3</span>
                          </div>
                          <div className='sold_stars ml-auto'>
                            {' '}
                            <i className='fa fa-star'></i>{' '}
                            <i className='fa fa-star'></i>{' '}
                            <i className='fa fa-star'></i>{' '}
                          </div>
                        </div>
                        <div className='available_bar'>
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
