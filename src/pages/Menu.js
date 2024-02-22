/** @format */

import React from 'react';
import MainLayout from '../layout/MainLayout';
import '../style/menu.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useGetPizzeQuery } from '../api/ApiSlice';
import { nanoid } from 'nanoid';
import { useGetPizzeByCategoryQuery } from '../api/ApiSlice';
import Button from 'react-bootstrap/Button';
const Menu = ({ img, description, title, id, price, category }) => {
  const { data: classicPizza = [] } = useGetPizzeByCategoryQuery('classic');
  const { data: specialPizze = [] } = useGetPizzeByCategoryQuery('special');
  const { data: whitelPizze = [] } = useGetPizzeByCategoryQuery('white');

  return (
    <MainLayout>
      <div className='back-menu'>
        <h1 className='h1-new'>
          <span className='right'>Menu</span>
        </h1>
      </div>

      <div className=' pizze-box text-center fw-bold bg-body-orange p-4'>
        <h1>Pizze</h1>
      </div>
      <section className='m-2'>
        <div>
          {' '}
          <h2 className='h2-box'>Classic Pizza</h2>
        </div>
        <Row
          xs={2}
          md={4}
          className='g-3 m-1 my-5 '>
          {classicPizza &&
            classicPizza?.pizza?.map(element => (
              <Col key={nanoid()}>
                <Card className='fullcard'>
                  <Card.Img
                    className='img-box'
                    variant='top'
                    src={element.img}
                  />
                  <Card.Body className='card-box'>
                    <Card.Title className='center-title'>
                      <a
                        className=' title-pizzas link-underline link-underline-opacity-0'
                        href={`/pizze/${element._id}`}>
                        {' '}
                        {element.title}
                      </a>
                    </Card.Title>
                    <Card.Text>{element.price} €</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </section>

      <section className='my-5 m-2'>
        <div>
          {' '}
          <h2 className='h2-box'>Special Pizza</h2>
        </div>
        <Row
          xs={2}
          md={4}
          className='g-3 m-2 my-5'>
          {specialPizze &&
            specialPizze?.pizza?.map(element => (
              <Col key={nanoid()}>
                <Card className='fullcard'>
                  <Card.Img
                    className='img-box'
                    variant='top'
                    src={element.img}
                  />
                  <Card.Body className='card-box'>
                    <Card.Title className='center-title'>
                      <a
                        className=' title-pizzas link-underline link-underline-opacity-0'
                        href={`/pizze/${element._id}`}>
                        {' '}
                        {element.title}
                      </a>
                    </Card.Title>
                    <Card.Text>{element.price} €</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </section>
      <section className='my-5 m-2 '>
        <div>
          {' '}
          <h2 className='h2-box'>White Pizza</h2>
        </div>
        <Row
          xs={2}
          md={4}
          className='g-3 m-2'>
          {whitelPizze &&
            whitelPizze?.pizza?.map(element => (
              <Col key={nanoid()}>
                <Card className='fullcard'>
                  <Card.Img
                    className='img-box'
                    variant='top'
                    src={element.img}
                  />
                  <Card.Body className='card-box'>
                    <Card.Title className='center-title'>
                      <a
                        className=' title-pizzas link-underline link-underline-opacity-0'
                        href={`/pizze/${element._id}`}>
                        {' '}
                        {element.title}
                      </a>
                    </Card.Title>
                    <Card.Text>{element.price} €</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </section>
      <div>
        <h4 className='post-scrit'>PS: For each pizza we have vegan options</h4>
      </div>
    </MainLayout>
  );
};

export default Menu;
