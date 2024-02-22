/** @format */

import React, { useEffect, useState } from 'react';

import './footer.css';

const Footer = () => {
  const [formData, setFormData] = useState({});
  console.log(formData);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div>
      <div class='page-wrapper'>
        <div id='waterdrop'></div>
        <footer>
          <div class='footer-top'>
            <div class='pt-exebar'></div>
            <div class='container'>
              <div class='row'>
                <div class='col-lg-3 col-md-12 col-sm-12 footer-col-3'>
                  <div class='widget footer_widget'>
                    <h5 class='footer-title'>Address</h5>
                    <div class='gem-contacts'>
                      <div class='gem-contacts-item gem-contacts-address'>
                        Via Carlo Manzoni, n XVI Mozzate (Co) 22076
                      </div>
                      <div class='gem-contacts-item gem-contacts-phone'>
                        <i
                          class='fa fa-phone'
                          aria-hidden='true'></i>{' '}
                        Phone: <a href=''>0331987333</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class='col-12 col-lg-6 col-md-6 col-sm-12'>
                  <div class='row'>
                    <div class='col-6 col-lg-6 col-md-6 col-sm-6'>
                      <div class='widget footer_widget'>
                        <h5 class='footer-title'>Recent News</h5>
                        <ul class='posts  styled'>
                          <li class='clearfix gem-pp-posts'>
                            <div class='gem-pp-posts-text'>
                              <div class='gem-pp-posts-item'>
                                <a href='#'>
                                  Want to start Your Own Play School.
                                </a>
                              </div>
                              <div class='gem-pp-posts-date'>
                                Call +91-9122588799
                              </div>
                            </div>
                          </li>
                          <li class='clearfix gem-pp-posts'>
                            <div class='gem-pp-posts-text'>
                              <div class='gem-pp-posts-item'>
                                <a href='#'>
                                  Now we are in Faridabad,Now we are in
                                  DaudNagar.
                                </a>
                              </div>
                              <div class='gem-pp-posts-date'>
                                Call +91-9122588799, +91-9122588799
                              </div>
                            </div>
                          </li>
                          <li class='clearfix gem-pp-posts'>
                            <div class='gem-pp-posts-text'>
                              <div class='gem-pp-posts-item'>
                                <a href=''>
                                  Now we are in Ranchi, Admission open
                                </a>
                              </div>
                              <div class='gem-pp-posts-date'>
                                Call +91-9122588799, +91-9122588799
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class='col-6 col-lg-6 col-md-6 col-sm-6'>
                      <div class='widget'>
                        <h5 class='footer-title'>Email Us</h5>
                        <div class='textwidget'>
                          <div
                            class='wpcf7'
                            id='wpcf7-f4-o1'
                            dir='ltr'>
                            <form class='wpcf7-form'>
                              <div class='contact-form-footer'>
                                <p>
                                  <span class='wpcf7-form-control-wrap your-first-name'>
                                    <input
                                      onChange={handleInputChange}
                                      type='text'
                                      name='your-first-name'
                                      size='40'
                                      className='wpcf7-form-control wpcf7-text'
                                      placeholder='Your name'
                                    />
                                  </span>
                                </p>
                                <p>
                                  <span class='wpcf7-form-control-wrap your-email_1'>
                                    <input
                                      onChange={handleInputChange}
                                      type='email'
                                      name='your-email_1'
                                      size='40'
                                      className='wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-email'
                                      placeholder='Your email'
                                    />
                                  </span>
                                </p>
                                <p>
                                  <span class='wpcf7-form-control-wrap your-message'>
                                    <textarea
                                      name='your-message'
                                      cols='40'
                                      rows='10'
                                      class='wpcf7-form-control wpcf7-textarea'
                                      aria-invalid='false'
                                      placeholder='Your message'></textarea>
                                  </span>
                                </p>
                                <div>
                                  <input
                                    type='submit'
                                    value='Send'
                                    class='wpcf7-form-control wpcf7-submit'
                                  />
                                  <span class='ajax-loader'></span>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class='col-12 col-lg-3 col-md-5 col-sm-12 footer-col-4'>
                  <div class='widget widget_gallery gallery-grid-4'>
                    <h5 class='footer-title'>Our Gallery</h5>
                    <ul class='magnific-image'>
                      <li>
                        <a class='magnific-anchor'>
                          <img
                            src='https://images.unsplash.com/photo-1477239439998-839196943351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=414&q=80'
                            alt=''
                          />
                        </a>
                      </li>
                      <li>
                        <a class='magnific-anchor'>
                          <img
                            src='https://images.unsplash.com/photo-1477239439998-839196943351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=414&q=80'
                            alt=''
                          />
                        </a>
                      </li>
                      <li>
                        <a class='magnific-anchor'>
                          <img
                            src='https://images.unsplash.com/photo-1477239439998-839196943351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=414&q=80'
                            alt=''
                          />
                        </a>
                      </li>
                      <li>
                        <a class='magnific-anchor'>
                          <img
                            src='https://images.unsplash.com/photo-1477239439998-839196943351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=414&q=80'
                            alt=''
                          />
                        </a>
                      </li>
                      <li>
                        <a class='magnific-anchor'>
                          <img
                            src='https://images.unsplash.com/photo-1477239439998-839196943351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=414&q=80'
                            alt=''
                          />
                        </a>
                      </li>
                      <li>
                        <a class='magnific-anchor'>
                          <img
                            src='https://images.unsplash.com/photo-1477239439998-839196943351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=414&q=80'
                            alt=''
                          />
                        </a>
                      </li>
                      <li>
                        <a class='magnific-anchor'>
                          <img
                            src='https://images.unsplash.com/photo-1477239439998-839196943351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=414&q=80'
                            alt=''
                          />
                        </a>
                      </li>
                      <li>
                        <a class='magnific-anchor'>
                          <img
                            src='https://images.unsplash.com/photo-1477239439998-839196943351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=414&q=80'
                            alt=''
                          />
                        </a>
                      </li>
                      <li>
                        <a class='magnific-anchor'>
                          <img
                            src='https://images.unsplash.com/photo-1477239439998-839196943351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=414&q=80'
                            alt=''
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class='footer-bottom'>
            <div class='container'>
              <div class='row'>
                <div class='col-md-3'>
                  <div class='footer-site-info'>
                    2020 ©{' '}
                    <a
                      href='https://www.youtube.com/watch?v=pdr4IzBpacI&t=34s'
                      target='_blank'>
                      Top HTML & CSS Program{' '}
                    </a>
                  </div>
                </div>

                <div class='col-md-6'>
                  <nav
                    id='footer-navigation'
                    class='site-navigation footer-navigation centered-box'
                    role='navigation'>
                    <ul
                      id='footer-menu'
                      class='nav-menu styled clearfix inline-inside'>
                      <li
                        id='menu-item-26'
                        class='menu-item menu-item-type-custom menu-item-object-custom menu-item-26'>
                        <a href='#'>Support</a>
                      </li>
                      <li
                        id='menu-item-27'
                        class='menu-item menu-item-type-custom menu-item-object-custom menu-item-27'>
                        <a href='#'>Contact Us</a>
                      </li>
                      <li
                        id='menu-item-28'
                        class='menu-item menu-item-type-custom menu-item-object-custom menu-item-28'>
                        <a href='#'>Disclaimer</a>
                      </li>
                      <li
                        id='menu-item-29'
                        class='menu-item menu-item-type-custom menu-item-object-custom menu-item-29'>
                        <a href='#'>Add more</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js'></script>
      <script src='http://code.jquery.com/ui/1.11.4/jquery-ui.js'></script>
      <script src='https://daniellaharel.com/raindrops/js/raindrops.js'></script>
    </div>
  );
};

export default Footer;
