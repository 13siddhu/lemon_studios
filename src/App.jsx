import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import TrendyPlants from './components/TrendyPlants/TrendyPlants';
import TopSelling from './components/TopSelling/TopSelling';
import CustomerReviews from './components/CustomerReviews/CustomerReviews';
import BestO2 from './components/BestO2/BestO2';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <TrendyPlants />
        <TopSelling />
        <CustomerReviews />
        <BestO2 />
      </main>
      <Footer />
    </div>
  );
}

export default App;
