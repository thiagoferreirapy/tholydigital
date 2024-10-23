import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
// import About from '../pages/About';
// import Contact from '../pages/Contact';
// import Favorites from '../pages/Favorites';
// import Property from '../pages/Property';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
