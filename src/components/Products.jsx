import React from 'react';
import ProductCard from './ProductCard';
import './Products.css';

const Products = () => {
  return (
    <section className="products">
      <div className="products-container">
        <ProductCard 
          title="For Small Desk AI Plant"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          price="Rs. 599/-"
          delay={0.2}
        />
      </div>
    </section>
  );
};

export default Products;
