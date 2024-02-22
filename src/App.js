/** @format */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';

import NotFound from './pages/NotFound';
import Gallery from './pages/Gallery';
import AllDrinks from './pages/AllDrinks';
import AllDessert from './pages/AllDessert';
import AllFrieds from './pages/AllFrieds';
import DetailDrinks from './pages/DetailDrinks';
import DetailDessert from './pages/DetailDessert';
import DetailFrieds from './pages/DetailFrieds';
import DetailPizze from './pages/DetailPizze';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path='/'
          element={<Home />}
        />
        <Route
          path='/about'
          element={<About />}
        />
        <Route
          path='/menu'
          element={<Menu />}
        />
        <Route
          path='/gallery'
          element={<Gallery />}
        />

        <Route
          path='/alldrinks'
          element={<AllDrinks />}
        />
        <Route
          path='/allfrieds'
          element={<AllFrieds />}
        />
        <Route
          path='/alldessert'
          element={<AllDessert />}
        />
        <Route
          path='/detailpizze/:pizzeid'
          element={<DetailPizze />}
        />
        <Route
          path='/detaildrinks/:drinksid'
          element={<DetailDrinks />}
        />
        <Route
          path='/detailfrieds:friedsid'
          element={<DetailFrieds />}
        />
        <Route
          path='/detaildessert/:dessertid'
          element={<DetailDessert />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
