/** @format */

import React from 'react';
import Navigation from '../components/navbar/Navigation';
import Footer from '../components/footer/Footer';

const MainLayout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
