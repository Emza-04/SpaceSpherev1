import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Listings } from './pages/Listings';
import { PropertyDetails } from './pages/PropertyDetails';
import { useScreenInit } from './useScreenInit';
export function App() {
  useScreenInit();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>
    </BrowserRouter>);

}