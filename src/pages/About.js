/** @format */

import React, { useState } from 'react';
import MainLayout from '../layout/MainLayout';
import '../style/about.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const About = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const fakeSubmit = () => {
    window.location.href = `/about`;
  };

  return (
    <MainLayout>
      <div className='back-about'>
        <h1 className='h1-new'>
          <span class='right'>About Us</span>
        </h1>
      </div>
      <div>
        <section class='about-section'>
          <div class='container'>
            <div class='row'>
              <div class='content-column col-lg-6 col-md-12 col-sm-12 order-2'>
                <div class='inner-column'>
                  <div class='sec-title'>
                    <span class='title'>About Us</span>
                    <h2>We are a centenary pizzeria since 1923</h2>
                  </div>
                  <div class='text'>
                    "The history of our pizzeria is a story of passion,
                    tradition and family. Founded way back in 1923 by our people
                    beloved grandparents, the Bagorha family has passed down of
                    generation after generation the art of true Italian pizza.
                    What began as a modest craft shop is grown over the years,
                    embracing the challenges of modern times without ever losing
                    sight of the deep roots in tradition. Guided by dedication
                    to quality and to authenticity, we have continued to
                    innovate, maintaining I always experience the warmth and
                    welcome that only a true one has family can offer. Today,
                    the By Lero pizzeria (managed by second son Samuele)
                    continues to be a place where there gathers to enjoy
                    culinary delights and share special moments, keeping our
                    legacy alive familiar and carrying forward our commitment to
                    perfection and excellence in Italian cuisine."
                  </div>

                  <div class='btn-box'>
                    <Button
                      variant='danger'
                      onClick={handleShow}>
                      Contact Us
                    </Button>

                    <Modal
                      show={show}
                      onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>
                          Contact us for some information
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Form>
                          <Form.Group
                            className='mb-3'
                            controlId='exampleForm.ControlInput1'>
                            <Form.Label>Your Email</Form.Label>
                            <Form.Control
                              type='email'
                              placeholder='your email'
                              autoFocus
                            />
                          </Form.Group>
                          <Form.Group
                            className='mb-3'
                            controlId='exampleForm.ControlTextarea1'>
                            <Form.Label>Your message</Form.Label>
                            <Form.Control
                              as='textarea'
                              rows={3}
                            />
                          </Form.Group>
                        </Form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          variant='secondary'
                          onClick={handleClose}>
                          Close
                        </Button>
                        <Button
                          variant='primary'
                          type='submit'
                          onClick={fakeSubmit}>
                          Save Changes
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </div>
              </div>

              <div class='image-column col-lg-6 col-md-12 col-sm-12'>
                <div class='inner-column wow fadeInLeft'>
                  <figure class='image-1'>
                    <a
                      href='#'
                      class='lightbox-image'
                      data-fancybox='images'>
                      <img
                        src='https://images.unsplash.com/photo-1569230516306-5a8cb5586399?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGl6emVyaWF8ZW58MHx8MHx8fDA%3D'
                        alt='pizzeria by lero'
                      />
                    </a>
                  </figure>
                  <figure class='image-2'>
                    <a
                      href='#'
                      class='lightbox-image'
                      data-fancybox='images'>
                      <img
                        src='https://images.unsplash.com/photo-1564936281659-ba4f75a41956?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGl6emVyaWF8ZW58MHx8MHx8fDA%3D'
                        alt='img inside pizzeria'
                      />
                    </a>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default About;
